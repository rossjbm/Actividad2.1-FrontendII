const productosModel = require("../models/productos.m")

class productosControllers {
    async listar(req, res, next) {  //para ver todos los documentos de la collection
        try {
            const datos = await productosModel.find();  //esperamos a que encuentre y los guardamos en una variable
            if (!datos) {
                throw('No hay Comentarios')  //si no hay elementos dentro de datos
                // hacer un res para avisar al front
            }
            console.log(typeof(datos), datos) //vemos el tipo que es datos (un objeto)
            res.send(datos).status('200'); //enviamos respuesta y el estado
        } catch (error) {
            console.log('Hubo algún error', error); // vemos error por consola
            res.status('404').json({"error":error}) //estado
        }
    }
}

module.exports = new productosControllers();