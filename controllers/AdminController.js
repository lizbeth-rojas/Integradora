var mariadb = require ('mariadb');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');

const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'tiny_designs',
     connectionLimit: 5
});
let fetchData = async () => {
  let conn;
  try {
	conn = await pool.getConnection();
	console.log('Conexion a BD establecida 2...');
  } catch (err) {
	throw err
	}
}
fetchData()

exports.Loginadmin = (req, res) => {
	console.log(req.body)

	const { correo, pass } = req.body;

	if (correo && pass) {
		let fetchData = async () => {
            let conn;
            let paswd;
		  	try {
				conn = await pool.getConnection();
				const consulta = await conn.query("SELECT * FROM contactos WHERE nom_contact = ?", [correo]);
				consulta.forEach((consulta) => {
                    respu = consulta.nom_contact;
					paswd = consulta.password;
                    console.log("cuenta " + consulta.nom_contact); 
                })
				var respu;
					if (respu === correo && paswd == pass) {
						req.session.loggedin = true;
                        req.session.correo = correo;
                        puesto = true;
						console.log("esta logueado? " + req.session.loggedin)
						res.redirect('/Administrador');
					} else {
						return res.render('administrador.hbs', {
							message: 'Correo o contraseña incorrecto'
						});
						res.end();
					}			
					res.end();
			}catch (err) {
				throw err
				}
		}
		fetchData()
	} else {
		return res.render('administrador.hbs', {
			message: 'Porfavor ingrese un correo y una contraseña'
		});
	}
};

exports.Ped_event =(req, res) =>{
    var tabla1 = ""
    let conn;
    let idevento;
    let monto;
    let descripcion;
    let array = [];
    let fetchData = async () =>{
        conn = await pool.getConnection();
        const ped_ev = await conn.query('SELECT * FROM pedidos_eventos');
        ped_ev.forEach((ped_ev) => {
            console.log(" events: " + ped_ev.descripcion, ped_ev.monto, ped_ev.id_evento_fk); 
            idevento = ped_ev.id_evento_fk,
            monto = ped_ev.monto,
            descripcion = ped_ev.descripcion
            array.push(ped_ev)
        })
        console.log(ped_ev[1]);
        console.log(array + "konda");
        console.log(idevento, monto, descripcion+ "knvksd")
        return res.render('event_per.hbs', {
            idevento: idevento,
            monto : monto,
            descripcion : descripcion,
            title: 'TinyDesigns - Eventos Pendientes',
            name: req.session.correo,
            logueado: req.session.loggedin 
        });
    }
    fetchData()
}
exports.Ped_art =(req,res) =>{
    let conn;
    let idart;
    let monto;
    let descripcion;
    let unidades;
    let xunidad;
    let datos;
    let array = [];
    let fetchData = async () =>{
        conn = await pool.getConnection();
        const ped_art = await conn.query('SELECT * FROM pedidos_art');
        ped_art.forEach((ped_art) => {
            console.log(" events: " + ped_art.descripcion, ped_art.monto, ped_art.id_art_fk, ped_art.unidades, ped_art.xunidad,); 
            idart = ped_art.id_art_fk,
            monto = ped_art.monto,
            descripcion = ped_art.descripcion,
            unidades = ped_art.unidades,
            xunidad = ped_art.xunidad
            datos=(idart,monto,descripcion,unidades,xunidad)
        })
        console.log(idart, xunidad, unidades, descripcion, monto  + "knvksd")
        return res.render('art_per.hbs', {
            datos:datos,
            idart: idart,
            monto : monto,
            descripcion : descripcion,
            unidades : unidades,
            xunidad : xunidad,
            title: 'TinyDesigns - Artículos Pendientes',
            name: req.session.correo,
            logueado: req.session.loggedin 
        });
    }
    fetchData()
}
