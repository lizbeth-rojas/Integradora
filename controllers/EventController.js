const Eventos = (req, res) => {
    res.render('eventosb.hbs', {
        title: 'TinyDesigns - Eventos',
        name: req.session.correo,
        logueado: req.session.loggedin 
    })
}

const Bodas = (req, res) => {
    res.render('evbodas.ejs', {
        title: 'TinyDesigns - Bodas'
    })
}

const Graduaciones = (req, res) => {
    res.render('evgraduaciones.ejs', {
        title: 'TinyDesigns - Graduaciones'
    })
}

const Infantiles = (req, res) => {
    res.render('evinfantiles.ejs', {
        title: 'TinyDesigns - Infantiles'
    })
}

const XV = (req, res) => {
    res.render('evXV.ejs', {
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