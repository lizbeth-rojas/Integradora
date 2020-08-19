const Eventos = (req, res) => {
    res.render('eventosb.hbs', {
        title: 'TinyDesigns - Eventos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Bodas = (req, res) => {
    res.render('evbodas.hbs', {
        title: 'TinyDesigns - Bodas',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Graduaciones = (req, res) => {
    res.render('evgraduaciones.hbs', {
        title: 'TinyDesigns - Graduaciones',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Infantiles = (req, res) => {
    res.render('evinfantiles.hbs', {
        title: 'TinyDesigns - Infantiles',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const XV = (req, res) => {
    res.render('evXV.hbs', {
        title: 'TinyDesigns - XV´s',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

module.exports = {
    Eventos,
    Bodas,
    Graduaciones,
    Infantiles,
    XV
}
