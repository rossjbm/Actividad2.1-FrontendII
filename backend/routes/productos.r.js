var express = require('express');
var router = express.Router();

const productosControllers = require("../controllers/productos.c")
const {JWT, JWTadmin, JWTconInfo} = require('../middleware/verificarJWT')

/* GET users listing. */
router.get('/' , JWT, productosControllers.listar);
router.post('/create',JWTadmin, productosControllers.agregar);
router.post('/favorito',JWTconInfo, productosControllers.favorito);
router.put('/comprar',JWT,  productosControllers.comprar);
router.put('/edit',JWTadmin, productosControllers.editar);
router.delete('/delete',JWTadmin, productosControllers.eliminar);

module.exports = router;
