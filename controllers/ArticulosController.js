//ARTICULOS
const Articulos = (req, res) => {
    res.render('articulos.ejs', {
        title: 'TinyDesigns - Artículos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Camisas = (req, res, next) => {
    res.render('camisas.ejs', {
        title: 'TinyDesigns - Camisas'
    })
}

const Termos = (req, res, next) => {
    res.render('termos.ejs', {
        title: 'TinyDesigns - Termos'
    })
}

const Invitaciones = (req, res, next) => {
    res.render('invitaciones.ejs', {
        title: 'TinyDesigns - Invitaciones'
    })
}

const Globos = (req, res, next) => {
    res.render('globos.ejs', {
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