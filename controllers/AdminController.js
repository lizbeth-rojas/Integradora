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
					if (respu === correo && paswd === pass) {
						req.session.loggedin = true;
                        req.session.correo = correo;
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
    //let array = [];
    let fetchData = async () =>{
        conn = await pool.getConnection();
        const ped_ev = await conn.query('SELECT * FROM pedidos_eventos');
        ped_ev.forEach((ped_ev) => {
            console.log(" events: " + ped_ev.descripcion, ped_ev.monto, ped_ev.id_evento_fk);
            idevento=ped_ev.id_evento_fk;
        })
        
        //console.log(ped_ev + ": REGISTROS");
        return res.render('event_per.hbs', {
            regis: ped_ev,
            title: 'TinyDesigns - Eventos Pendientes',
            name: req.session.correo,
            logueado: req.session.loggedin 
        });
    }
    fetchData()
}
exports.Ped_art =(req,res) =>{
    let conn;
    let datos;
    let array = [];
    let fetchData = async () =>{
        conn = await pool.getConnection();
        const ped_art = await conn.query('SELECT * FROM pedidos_art');
        ped_art.forEach((ped_art) => {
            console.log(" events: " + ped_art.descripcion, ped_art.monto, ped_art.id_art_fk, ped_art.unidades, ped_art.xunidad,); 
        })
        console.log(idart, xunidad, unidades, descripcion, monto  + "knvksd")
        return res.render('art_per.hbs', {
            datos:ped_art,
            title: 'TinyDesigns - Artículos Pendientes',
            name: req.session.correo,
            logueado: req.session.loggedin 
        });
    }
    fetchData()
}
