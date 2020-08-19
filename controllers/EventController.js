const Eventos = (req, res) => {
    res.render('eventosb.hbs', {
        title: 'TinyDesigns - Eventos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Bodas = (req, res) => {
    res.render('evbodas.hbs', {
        title: 'TinyDesigns - Bodas'
    })
}

const Graduaciones = (req, res) => {
    res.render('evgraduaciones.hbs', {
        title: 'TinyDesigns - Graduaciones'
    })
}

const Infantiles = (req, res) => {
    res.render('evinfantiles.hbs', {
        title: 'TinyDesigns - Infantiles'
    })
}

const XV = (req, res) => {
    res.render('evXV.hbs', {
        title: 'TinyDesigns - XV´s'
    })
}

module.exports = {
    Eventos,
    Bodas,
    Graduaciones,
    Infantiles,
    XV
}
