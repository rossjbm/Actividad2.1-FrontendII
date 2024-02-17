const usuariosModel = require("../models/usuarios.m")
const validator = require("validator") 
const bcryptjs = require("bcryptjs")
const { v4 : uuidv4 } = require("uuid");

const claveAdmin = "soyadmin" //si no lo vemos necesario se quita esto

class registrarControllers {

    async agregar(req, res, next) {
        const {user, nombre, apellido, password, confirmar_p, correo, clave} = req.body
        console.log('en registro')
        console.log(user, nombre, apellido, password, confirmar_p, correo, clave)
        try {
            //Comparaciones
            if (!user || !nombre || !apellido || !password || !confirmar_p || !correo) {
                return res.status('200').json({"alerta":"Debes ingresar todos los datos solicitados"}) //estado
            }
            if (password != confirmar_p) {
                return res.status('200').json({"alerta":"Las contraseñas no coinciden. Ingresarla nuevamente"})
            }
            if (!validator.isEmail(correo)) {
                return res.status('200').json({"alerta":"El correo no es válido. Verifica e ingresa nuevamente"})
            }

            //Verificar existencia
            try {
                const verificar = await usuariosModel.find({correo: correo})
                if (verificar[0]) {
                    return res.status('200').json({"alerta":"El correo ingresado ya tiene una cuenta registrada"})
                }
            } catch (error) {
                console.log("Hubo algún error verificar correo", error);
                throw("Error al verificar si ese correo ya estaba registrado")
            }
            try {
                const verificar = await usuariosModel.find({user: user})
                if (verificar[0]) {
                    return res.status('409').json({"alerta":"Ese nombre de usuario ya existe. Utiliza otro diferente"})
                }
            } catch (error) {
                console.log("Hubo algún error verificar usuario", error);
                throw("Error al verificar si el usuario ya existe")
            }

            //Asignar rol
            var rol = "cliente"
            if (clave) {
                if (clave === claveAdmin) {
                    rol = "admin" 
                } else {
                    return res.status('200').json({"alerta":"La clave especial para registrar un Administrador es erronea. Intentarlo nuevamente"})
                }
            }

            //Encriptar contraseña
            console.log("contraseña:", password)
            var contrasena = await bcryptjs.hash(password, 8);
            console.log("contraseña:", contrasena)

            //Agregar ID
            const _id = uuidv4();

            //Hacer registro
            const documento = {_id, rol, user, nombre, apellido, contrasena, correo }
            console.log('agregar:', documento)
            await usuariosModel.create(documento);
            res.status('200').json({"exito":"Se ha registrado correctamente"})

        } catch (error) {
            console.log("Hubo algún error", error); // vemos error por consola
            res.status('404').json({"error":error});
        }
    }
}

module.exports = new registrarControllers();