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
        title: 'TinyDesigns - Camisas'
    })
}

const Termos = (req, res, next) => {
    res.render('termos.hbs', {
        title: 'TinyDesigns - Termos'
    })
}

const Invitaciones = (req, res, next) => {
    res.render('invitaciones.hbs', {
        title: 'TinyDesigns - Invitaciones'
    })
}

const Globos = (req, res, next) => {
    res.render('globos.hbs', {
        title: 'TinyDesigns - Globos'
    })
}
module.exports = { 
    Articulos,
    Camisas,
    Termos,
    Invitaciones,
    Globos
}