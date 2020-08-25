var express = require('express');
const { title } = require('process');
var router = express.Router();
const ArticulosController = require('../controllers/ArticulosController');
const InicioController = require('../controllers/InicioController');
const EventController = require('../controllers/EventController');
const Auth = require('../controllers/AuthController');
const adminController = require('../controllers/AdminController');
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
//Pedidos Eventos - Articulos
router.post ('/pedidoev', Auth.PedidoEv);

router.post ('/pedcamisa',Auth.Camisas);
router.post ('/pedtermo', Auth.Termos);
router.post ('/pedinvita', Auth.Invita);
router.post ('/pedglobo', Auth.Globos);

router.get('/cerrar', Auth.Logout);

router.get('/administrador', InicioController.Administrador);

router.get('/MuestraArticulos', InicioController.Pers_Articulos);
router.get('/MuestraEventos', InicioController.Pers_Eventos);
router.post('/Loginadmin', adminController.Loginadmin);
router.get('/tabla1', adminController.Ped_event);
router.get('/Ped_Art', adminController.Ped_art);



module.exports = router;
