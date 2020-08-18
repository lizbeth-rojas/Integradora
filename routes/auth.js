let express = require ('express');
let path = require ('path');
const authController = require('../controllers/AuthController');
const fact = require('../views/fac')
const router = express.Router();

router.post ('/register', authController.Register);
router.post ('/login', authController.Login);

router.get('/cerrar', authController.Longout);

module.exports = router;