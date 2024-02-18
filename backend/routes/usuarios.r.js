var express = require('express');
var router = express.Router();

const usuariosControllers = require("../controllers/usuarios.c")
const {JWT, JWTadmin, JWTconInfo} = require('../middleware/verificarJWT')

/* GET users listing. */
router.get('/miPerfil', JWTconInfo, usuariosControllers.miPerfil);
router.get('/', JWTadmin, usuariosControllers.listar);
router.post('/', usuariosControllers.iniciar);
router.put('/edit', JWTadmin, usuariosControllers.editar);
router.delete('/delete', JWTadmin, usuariosControllers.eliminar);

module.exports = router;