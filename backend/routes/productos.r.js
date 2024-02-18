var express = require('express');
var router = express.Router();

const productosControllers = require("../controllers/productos.c")
const {JWT, JWTadmin} = require('../middleware/verificarJWT')

/* GET users listing. */
router.get('/' , JWT, productosControllers.listar);
router.post('/create',JWTadmin, productosControllers.agregar);
router.put('/comprar',JWT,  productosControllers.comprar);
router.put('/edit',JWTadmin, productosControllers.editar);
router.delete('/delete',JWTadmin, productosControllers.eliminar);

module.exports = router;
