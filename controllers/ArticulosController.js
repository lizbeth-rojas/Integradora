//ARTICULOS
const Articulos = (req, res) => {
    res.render('articulos.hbs', {
        title: 'TinyDesigns - Artículos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Camisas = (req, res, next) => {
    res.render('camisas.hbs', {
        title: 'TinyDesigns - Camisas',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Termos = (req, res, next) => {
    res.render('termos.hbs', {
        title: 'TinyDesigns - Termos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Invitaciones = (req, res, next) => {
    res.render('invitaciones.hbs', {
        title: 'TinyDesigns - Invitaciones',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Globos = (req, res, next) => {
    res.render('globos.hbs', {
        title: 'TinyDesigns - Globos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}
module.exports = { 
    Articulos,
    Camisas,
    Termos,
    Invitaciones,
    Globos
}