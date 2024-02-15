const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        rol: {
            type: String
        },
        user: {
            type: String
        },
        nombre: {
            type: String
        },
        apellido: {
            type: String
        },
        contrasena: {
            type: String
        },
        correo: {
            type: String
        },
        tlf: {
            type: String
        },
        direccion: {
            type: String
        },
        favoritos: {
            type: [String]
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)



module.exports = mongoose.model('usuariosModel', usuariosSchema, 'usuarios') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
