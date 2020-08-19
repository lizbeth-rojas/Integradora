var express = require('express');
const { title } = require('process');
var router = express.Router();
const ArticulosController = require('../controllers/ArticulosController');
const InicioController = require('../controllers/InicioController');
const EventController = require('../controllers/EventController');
const Auth = require('../controllers/AuthController');
const PersonalizaController = require('../controllers/PersonalizaController');
//console.log('dsgfiuagf');
router.get('/', InicioController.Inicio);

router.get('/crear-cuenta', InicioController.CrearCuenta);

router.get('/eventos', EventController.Eventos);

router.get('/bodas', EventController.Bodas);

router.get('/graduaciones', EventController.Graduaciones);

router.get('/infantiles', EventController.Infantiles);

router.get('/xv', EventController.XV);

router.get('/articulos', ArticulosController.Articulos);

router.get('/camisas', ArticulosController.Camisas);

router.get('/termos', ArticulosController.Termos);

router.get('/invitaciones', ArticulosController.Invitaciones);

router.get('/globos', ArticulosController.Globos);

router.post ('/register', Auth.Register);
router.post ('/login', Auth.Login);
router.get('/cerrar', Auth.Logout);

router.get('/personalizaarticulos', PersonalizaController.Pers_Articulos);
router.get('/personalizaeventos', PersonalizaController.Pers_Eventos);


module.exports = router;