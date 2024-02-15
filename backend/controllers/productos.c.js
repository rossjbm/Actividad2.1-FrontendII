const productosModel = require("../models/productos.m")
const { v4 : uuidv4 } = require("uuid");

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

    async agregar(req, res, next) {
        const {nombre, descripcion, categoria, cantidad, precio, marca} = req.body
        var {img} = req.body
        try {
            if (!nombre || !descripcion || !categoria || !cantidad || !precio || !marca) {
                return res.status('200').json({"alerta":"Debes ingresar todos los datos solicitados"}) //estado
            }

            //Agregar ID
            const _id = uuidv4();

            //Guardar producto
            const documento = {_id, img, nombre, descripcion, categoria, cantidad, precio, marca}
            console.log('agregar:', documento)
            await productosModel.create(documento);
            res.status('200').json({"exito":"Se ha guardado correctamente el producto"})

        } catch (error) {
            console.log('Hubo algún error', error);
            res.status('404').json({"error":error}) 
        }
    }

    async editar(req, res, next) {
        const {id, img, nombre, descripcion, categoria, cantidad, precio, marca} = req.body

        try {
            //Comparaciones
            if (!nombre || !descripcion || !categoria || !cantidad || !precio || !marca || !img) {
                return res.status('200').json({"alerta":"Debes ingresar todos los datos solicitados"}) //estado
            }

            //Hacer edición
            const documento = { img, nombre, descripcion, categoria, cantidad, precio, marca}
            console.log('editar:', documento)
            await productosModel.updateOne({_id: id}, {$set:documento});
            res.status('200').json({"exito":"Se ha editado correctamente el producto"})
            
        } catch (error) {
            console.log("Hubo algún error", error);
            res.status('404').json({"error":error});
        }
    }

    async eliminar(req, res, next) {
        const {id} = req.body
        try {
            await productosModel.deleteOne({_id:id})
            res.status('200').json({"exito":"Se ha eliminado correctamente"})
        } catch (error) {
            console.log("Hubo algún error", error);
            res.status('404').json({"error":error});
        }

    }
}

module.exports = new productosControllers();