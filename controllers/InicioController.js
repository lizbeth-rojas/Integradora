const { title } = require("process");


//inicio controller
const Inicio = (req,res) =>{
  res.render('iniciob.hbs', {
    title: 'TinyDesigns - Inicio',
    name: req.session.correo,
	  logueado: req.session.loggedin 
  })
}

const CrearCuenta = (req, res) => {
	if (req.session.loggedin === true) { 
		res.redirect('/');
	} else {
		res.render ('registro.hbs')
	} 
	
}




module.exports = {
    Inicio,
    CrearCuenta
}

