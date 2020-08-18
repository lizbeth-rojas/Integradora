var mariadb = require('mariadb');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const router = express.Router();
const PaginasController = require('../controllers/PaginasController');

router.get ('/inicio', PaginasController.Inicio);

router.get ('/crear-cuenta', PaginasController.CrearCuenta);

router.get ('/factura', PaginasController.Factura);



module.exports = router;