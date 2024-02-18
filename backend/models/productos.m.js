const mongoose = require('mongoose'); //requerimos libreria de mongo

const productosSchema = new mongoose.Schema( //en mongo el modelo es establecer el esquema de los datos que vamos a recibir
    {
        _id: {
            type: String  //importante indicar el tipo de dato
        },
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        categoria: {
            type: String
        },
        cantidad: {
            type: Number
        },
        precio: {
            type: String
        },
        marca: {
            type: String
        },
        img: {
            type: String
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('productos', productosSchema, 'productos') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
