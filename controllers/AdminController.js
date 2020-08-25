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
    let fetchData = async () =>{
        conn = await pool.getConnection();
        const ped_ev = await conn.query('SELECT * FROM pedidos_eventos');
        ped_ev.forEach((ped_ev) => {
            console.log(" events: " + ped_ev.descripcion, ped_ev.monto, ped_ev.id_evento_fk); 
        })
        return res.render('event_per.hbs', {
            idevento : ped_ev.id_evento_fk,
            monto : ped_ev.monto,
            descripcion : ped_ev.descripcion
        });
    }
    fetchData()
}
