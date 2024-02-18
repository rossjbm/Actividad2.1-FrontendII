const usuariosModel = require("../models/usuarios.m")
const validator = require("validator") 
const bcryptjs = require("bcryptjs")
const JWT = require("jsonwebtoken")

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
        const {_id, user, nombre, apellido, actual_p, nueva_p, confirmar_p, correo, direccion, tlf} = req.body

        try {
            //Comparaciones
            if (!user || !nombre || !apellido || !correo) {
                return res.status('400').json({"alerta":"Debes ingresar todos los datos solicitados"}) //estado
            }
            if (!validator.isEmail(correo)) {
                return res.status('400').json({"alerta":"El correo no es válido. Verifica e ingresa nuevamente"})
            }
            //En caso de cambiar contraseña
            if (actual_p || nueva_p || confirmar_p) {

                try {
                    if(!actual_p) {
                        return res.status('400').json({"alerta":"Debes ingresar tu contraseña actual"})
                    }
                    const comparar = await usuariosModel.find({_id: _id})
                    const comparacion = await bcryptjs.compare(actual_p, comparar[0].contrasena)
                    if (!comparacion) {
                        return res.status('400').json({"alerta":"Esta no es tu contraseña actual. Verifica e ingresa nuevamente"})
                    }
                    if (!nueva_p && !confirmar_p) {
                        return res.status('400').json({"alerta":"Debes ingresar la nueva contraseña y confirmarla"})
                    }
                    if (nueva_p != confirmar_p) {
                        return res.status('400').json({"alerta":"Las contraseñas no coinciden. Ingresarla nuevamente"})
                    }
                    const contrasena = await bcryptjs.hash(nueva_p, 8);
                    await usuariosModel.updateOne({_id: _id}, {$set:{contrasena:contrasena}});
                } catch (error) {
                    console.log("Hubo algún error cambiar contraseña", error);
                    throw("Error al cambiar contraseña")
                }
            }
            //Hacer edición
            const documento = {user, nombre, apellido, correo, direccion, tlf }
            console.log('editar:', documento)
            await usuariosModel.updateOne({_id: _id}, {$set:documento});
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
    async iniciar(req, res, next){
        var user = req.body.user;
        var password = req.body.password;
        console.log(req.body);
        try {
            const datos = await usuariosModel.find();
            if (!datos) {
                throw["404","No hay usuarios registrados"]
            }
            const usuario = await usuariosModel.find({user: user})
            if (!usuario[0]) {
                throw ["404","Usuario o contraseña incorrecto"]
            }
            console.log(usuario[0].contrasena, " y ",password);
            console.log(usuario);
            // bcrypt
            const verificarPassword = await bcryptjs.compare(password, usuario[0].contrasena)
            if (!verificarPassword) {
                console.log('error en veri: ', verificarPassword);
                throw ["404","Usuario o contraseña incorrecto"]
            }
            // devolver un token
            const token = JWT.sign(
                {
                    name: usuario[0].user,
                    rol:usuario[0].rol
                },process.env.secreto,{
                    expiresIn:"20m"
                }
            )
            res.status(200).json({token,"rol":usuario[0].rol})
            
        } catch (error) {
            if (error.length) {
                console.log("Hubo algún error: ", error[1]); // vemos error por consola
                res.status(error[0]).json({"error":error[1]}) //estado
            }else{
                console.log("Tenemos error: ",error);
                res.status("404").send(error)
            }
        }
    }
    async miPerfil(req, res, next){
        const user = req.usuarioName
        const usuario = await usuariosModel.find({user: user})
        console.log(usuario);
        var informacionPublica = usuario[0];
        informacionPublica._id=null
        informacionPublica.contrasena=null
        res.status('200').json({'exito':informacionPublica})
    }
}

module.exports = new usuariosControllers();