var mariadb = require('mariadb');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const router = express.Router();
//const PaginasController = require('../controllers/PaginasController');
const InicioController = require('../controllers/InicioController');

router.get ('/inicio', InicioController.Inicio);

router.get ('/crear-cuenta', InicioController.CrearCuenta);

router.get ('/factura', InicioController.Factura);



module.exports = router;