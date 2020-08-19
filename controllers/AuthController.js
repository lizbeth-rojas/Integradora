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
	//console.log('Conexion a BD establecida 2...');
  } catch (err) {
	throw err
	}
}
fetchData()


exports.Register = (req, res) => {

	console.log(req.body);

	const { nombre, correo, telefono, domicilio, pass } = req.body;
	let fetchData = async () => {
	let conn;
	try {
		conn = await pool.getConnection();
		console.log(correo)
		var pure = "";
		const res = await conn.query("SELECT contacto_alt FROM clientes WHERE contacto_alt = ?", [correo]);
		res.forEach((res) => {
			pure = res.contacto_alt;
			console.log(res.contacto_alt); 
		})
	} catch (err) {
		throw err
		}
	if(pure === correo ) {
		return res.render('registro.hbs', {
			message: 'El correo ingresado ya existe'
		});
	}

	let hashedPassword = await bcrypt.hash(pass, 8);
	console.log(hashedPassword);

	valores = [nombre, correo, telefono, domicilio, hashedPassword]
	let fetchData = async () => {
			let conn;
		  	try {
				conn = await pool.getConnection();
				const consulta = await conn.query("INSERT INTO clientes (nombre, contacto_alt, telefono, direccion, password) VALUES ?", [valores]);
				req.session.loggedin = true;
				req.session.correo = correo;
				console.log("esta logueado? " + req.session.loggedin)
				res.redirect('/');
			}catch (err) {
				throw err
				}
		}
		fetchData()

	}
	fetchData()
}

exports.Login = (req, res) => {
	console.log(req.body)

	const { correo, pass } = req.body;

	if (correo && pass) {
		let fetchData = async () => {
			let conn;
		  	try {
				conn = await pool.getConnection();
				const consulta = await conn.query("SELECT * FROM clientes WHERE contacto_alt = ?", [correo]);
				consulta.forEach((consulta) => {
					respu = consulta.contacto_alt;
					console.log("cuenta " + consulta.contacto_alt); 
				})
				var respu;
					if (respu === correo) {
						req.session.loggedin = true;
						req.session.correo = correo;
						console.log("esta logueado? " + req.session.loggedin)
						res.redirect('/');
					} else {
						return res.render('iniciob.hbs', {
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
		return res.render('iniciob.hbs', {
			message: 'Porfavor ingrese un correo y una contraseña'
		});
		res.end();
	}
};

exports.Logout = (req, res) => {
	req.session.loggedin = false;
	res.redirect('/');
	}