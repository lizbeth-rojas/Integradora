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

const Factura = (req, res) => {
	res.render ('factura.hbs')
}

//ADMINISTRADOR
const Administrador = (req, res) => {
  res.render('administrador.hbs', {
    title: 'TinyDesigns - Administrador',
    name: req.session.correo,
    logueado: req.session.loggedin 
  })
}

const Pers_Articulos = (req,res) => {
  res.render('art_per.hbs', {
    title: 'TinyDesigns - Artículos Pendientes',
    name: req.session.correo,
    logueado: req.session.loggedin 
  })
}

const Pers_Eventos = (req,res) => {
  res.render('event_per.hbs', {
    title: 'TinyDesigns - Eventos Pendientes',
    name: req.session.correo,
    logueado: req.session.loggedin 
  })
}

module.exports = {
    Inicio,
    CrearCuenta,
    Factura,
    Administrador,
    Pers_Eventos,
    Pers_Articulos
}

