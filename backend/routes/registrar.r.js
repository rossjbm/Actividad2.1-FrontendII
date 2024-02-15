var express = require('express');
var router = express.Router();

const registrarControllers = require("../controllers/registrar.c")

router.post('/', registrarControllers.agregar);

module.exports = router;