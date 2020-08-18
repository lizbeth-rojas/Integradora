var express = require('express');
const { title } = require('process');
var router = express.Router();
const ArticulosController = require('../controllers/ArticulosController');
const InicioController = require('../controllers/InicioController');
const EventController = require('../controllers/EventController');

router.get('/', InicioController.Inicio);

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

module.exports = router;