const usuariosModel = require("../models/usuarios.m")

class usuariosControllers {
    async listar(req, res, next) {
        try {
            const datos = await usuariosModel.find();
            if (!datos) {
                throw('No hay Usuarios Registrados')
                // hacer un res para avisar al front
            }
            console.log(typeof(datos), datos)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new usuariosControllers();