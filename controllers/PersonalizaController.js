const Pers_Articulos = (req, res) => {
    res.render('art_per.hbs', {
        title: 'TinyDesigns - Personaliza Artículos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Pers_Eventos = (req, res) => {
    res.render('event_per.hbs', {
        title: 'TinyDesigns - Personaliza Eventos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}



module.exports = {
    Pers_Articulos,
    Pers_Eventos,
}