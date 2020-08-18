//inicio controller
const Inicio = (req,res) =>{
  res.render('inicio.ejs', {
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

module.exports = {
    Inicio,
    CrearCuenta,
    Factura
}

