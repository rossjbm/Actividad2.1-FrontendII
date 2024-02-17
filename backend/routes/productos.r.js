var express = require('express');
var router = express.Router();

const productosControllers = require("../controllers/productos.c")
const {JWT} = require('../middleware/verificarJWT')

/* GET users listing. */
router.get('/',JWT , productosControllers.listar);
router.post('/create',JWT, productosControllers.agregar);
router.put('/edit', JWT, productosControllers.editar);
router.delete('/delete', JWT, productosControllers.eliminar);

module.exports = router;
