var express = require('express');
var router = express.Router();

const productosControllers = require("../controllers/productos.c")

/* GET users listing. */
router.get('/', productosControllers.listar);

module.exports = router;
