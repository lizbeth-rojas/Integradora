const Eventos = (req, res) => {
    res.render('eventos', {
        title: 'TinyDesigns - Eventos'
    })
}

const Bodas = (req, res) => {
    res.render('evbodas', {
        title: 'TinyDesigns - Bodas'
    })
}

const Graduaciones = (req, res) => {
    res.render('evgraduaciones', {
        title: 'TinyDesigns - Graduaciones'
    })
}

const Infantiles = (req, res) => {
    res.render('evinfantiles', {
        title: 'TinyDesigns - Infantiles'
    })
}

const XV = (req, res) => {
    res.render('evXV', {
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