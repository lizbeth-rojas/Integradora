const Inicio = (req, res) => {
	res.render('inicio.ejs', {
		name: req.session.correo,
		logueado: req.session.loggedin 
	})
}

const CrearCuenta = (req, res) => {
	if (req.session.loggedin === true) { 
		res.redirect('/');
	} else {
		res.render ('registro')
	} 
	
}

const Factura = (req, res) => {
	res.render ('factura')
}

module.exports = {
    Inicio,
    CrearCuenta,
    Factura
}