const usuariosModel = require("../models/usuarios.m")
const validator = require("validator") 
const bcryptjs = require("bcryptjs")

class usuariosControllers {
    async listar(req, res, next) {
        try {
            const datos = await usuariosModel.find();
            if (!datos) {
                res.status('200').json({"alerta":"No hay usuarios registrados"}) //estado
            }
            console.log(typeof(datos), datos)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log("Hubo algún error", error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }

    async editar(req, res, next) {
        const {id, user, nombre, apellido, actual_p, nueva_p, confirmar_p, correo, direccion, tel} = req.body

        try {
            //Comparaciones
            if (!user || !nombre || !apellido || !correo) {
                return res.status('200').json({"alerta":"Debes ingresar todos los datos solicitados"}) //estado
            }
            if (!validator.isEmail(correo)) {
                return res.status('200').json({"alerta":"El correo no es válido. Verifica e ingresa nuevamente"})
            }
            //En caso de cambiar contraseña
            if (actual_p || nueva_p || confirmar_p) {

                try {
                    if(!actual_p) {
                        return res.status('200').json({"alerta":"Debes ingresar tu contraseña actual"})
                    }
                    const comparar = await usuariosModel.find({_id: id})
                    const comparacion = await bcryptjs.compare(actual_p, comparar[0].contrasena)
                    if (!comparacion) {
                        return res.status('200').json({"alerta":"Esta no es tu contraseña actual. Verifica e ingresa nuevamente"})
                    }
                    if (!nueva_p && !confirmar_p) {
                        return res.status('200').json({"alerta":"Debes ingresar la nueva contraseña y confirmarla"})
                    }
                    if (nueva_p != confirmar_p) {
                        return res.status('200').json({"alerta":"Las contraseñas no coinciden. Ingresarla nuevamente"})
                    }
                    const contrasena = await bcryptjs.hash(nueva_p, 8);
                    await usuariosModel.updateOne({_id: id}, {$set:{contrasena:contrasena}});
                } catch (error) {
                    console.log("Hubo algún error cambiar contraseña", error);
                    throw("Error al cambiar contraseña")
                }
            }
            //Hacer edición
            const documento = {user, nombre, apellido, correo, direccion, tel }
            console.log('editar:', documento)
            await usuariosModel.updateOne({_id: id}, {$set:documento});
            res.status('200').json({"exito":"Se ha editado correctamente"})
            
        } catch (error) {
            console.log("Hubo algún error", error);
            res.status('404').json({"error":error});
        }
    }

    async eliminar(req, res, next) {
        const {id} = req.body
        try {
            await usuariosModel.deleteOne({_id:id})
            res.status('200').json({"exito":"Se ha eliminado correctamente"})
        } catch (error) {
            console.log("Hubo algún error", error);
            res.status('404').json({"error":error});
        }

    }
}

module.exports = new usuariosControllers();