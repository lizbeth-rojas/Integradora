//ARTICULOS
const Articulos = (req, res) => {
    res.render('articulos', {
        title: 'TinyDesigns - Artículos'
    })
}

const Camisas = (req, res, next) => {
    res.render('camisas', {
        title: 'TinyDesigns - Camisas'
    })
}

const Termos = (req, res, next) => {
    res.render('termos', {
        title: 'TinyDesigns - Termos'
    })
}

const Invitaciones = (req, res, next) => {
    res.render('invitaciones', {
        title: 'TinyDesigns - Invitaciones'
    })
}

const Globos = (req, res, next) => {
    res.render('globos', {
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