var express = require('express');
var router = express.Router();

const usuariosControllers = require("../controllers/usuarios.c")

/* GET users listing. */
router.get('/', usuariosControllers.listar);

module.exports = router;