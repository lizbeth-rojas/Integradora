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

	valores = [nombre, correo, telefono, domicilio, pass]
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
			let paswd;
		  	try {
				conn = await pool.getConnection();
				const consulta = await conn.query("SELECT * FROM clientes WHERE contacto_alt = ?", [correo]);
				consulta.forEach((consulta) => {
					respu = consulta.contacto_alt;
					paswd = consulta.password;
					console.log("cuenta: " + consulta.contacto_alt, consulta.password); 
				})
				var respu;
					if (respu === correo && paswd == pass) {
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

exports.RegPedido = (req, res) =>{
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


exports.Logout = (req, res) => {
	req.session.loggedin = false;
	res.redirect('/');
	}

exports.PedidoEv = (req, res)=>{
	const { Evento1, Comida, Personas, Lugar } = req.body;
	console.log(req.body);
	console.log(req.session.correo+"Yes");
	let sessi = req.session.correo;
	console.log(sessi);
	let fetchData = async () => {
	let conn;
	let desc= ("Comida: "+ Comida+", N# de Personas: "+Personas+", Lugar establecido: "+Lugar);
	console.log(desc);
	try {
		conn = await pool.getConnection();
		console.log(Evento1);
		var idev = "";
		var nom = "";
		var cos ="";
		var us = "";
		
		const res = await conn.query("SELECT ID_evento, nombre, costo FROM eventos WHERE nombre = ?", [Evento1]);
		const res2 = await conn.query("SELECT ID_cliente FROM clientes WHERE contacto_alt = ?", [sessi]);
		
		res.forEach((res) => {
			idev = res.ID_evento;
			nom = res.nombre;
			cos = res.costo;
			console.log(idev+""+nom+""+cos);
			console.log(res.nombre+" :o"); 
		})
		
		res2.forEach((res2)=>{
			us =res2.ID_cliente;
			console.log(us);
		})
		datillos= [cos, desc, us, idev]
		const consulta = await conn.query("INSERT INTO pedidos_eventos (monto, descripcion, id_cliente_fk, id_evento_fk) VALUES ?", [datillos]);

	 }catch (err) {
		throw err
		}
	}
	fetchData()

	return res.render('iniciob.hbs', {
				name: req.session.correo,
				logueado: req.session.loggedin,
				message: 'Solicitud enviada con exito'
		});
}

exports.Camisas = (req, res) =>{
	const { Camisa1, Talla, Genero, Color, Unidades } = req.body;
	console.log(req.body);
	console.log(req.session.correo + ": Correo");
	let sessi2 = req.session.correo;
	console.log(sessi2);


	var montillo = 0;
	if (Unidades === "1") {
		montillo=1;
	} else if (Unidades === "2") {
		montillo = 2;
	}else{
		montillo =3;
	};


	let fetchData = async () => {
	let conn;
	let desc2= ("Genero: "+ Genero+", Color "+ Color+ ", Talla: " + Talla);
	console.log(desc2);
	try {
		conn = await pool.getConnection();
		console.log(Camisa1);
		var idart = "";
		var nom = "";
		var cos ="";
		var us = "";


		var montF = 0;
		
		const res = await conn.query("SELECT ID_art, costo , nombre FROM articulos WHERE nombre = ?", [Camisa1]);
		const res2 = await conn.query("SELECT ID_cliente FROM clientes WHERE contacto_alt = ?", [sessi2]);
		
		res.forEach((res) => {
			idart = res.ID_art;
			nom = res.nombre;
			cos = res.costo;
			montF = cos * montillo;
			console.log(montF);



			console.log(idart+""+nom+""+cos);
			console.log(res.nombre+"shey"); 
		})
		
		res2.forEach((res2)=>{
			us =res2.ID_cliente;
			console.log(us);
		})
	
		datillos= [ Unidades,cos, montF, desc2, us, idart]
		const consulta = await conn.query("INSERT INTO pedidos_art (unidades, precio_unidad, monto, descripcion, id_cliente_fk, id_art_fk) VALUES ?", [datillos]);

	 }catch (err) {
		throw err
		}
	}
	fetchData()

	return res.render('iniciob.hbs', {
				//name: req.session.correo,
				//logueado: req.session.loggedin,
				message: 'Solicitud de Camisa(s) enviada con exito'
		});
}


exports.Termos = (req, res) =>{
	const { Termo1, Tex, Unidades, Color } = req.body;
	console.log(req.body);
	console.log(req.session.correo + ": Correo");
	let sessi = req.session.correo;
	console.log(sessi);


	var montillo = 0;
	if (Unidades === "1") {
		montillo=1;
	} else if (Unidades === "2") {
		montillo = 2;
	}else{
		montillo =3;
	};


	let fetchData = async () => {
	let conn;
	let desc2= ("Texto: "+ Tex+", Color "+ Color+ ", Unidades: " + Unidades);
	console.log(desc2);
	try {
		conn = await pool.getConnection();
		console.log(Termo1);
		var idart = "";
		var nom = "";
		var cos ="";
		var us = "";


		var montF = 0;
		
		const res = await conn.query("SELECT ID_art, costo , nombre FROM articulos WHERE nombre = ?", [Termo1]);
		const res2 = await conn.query("SELECT ID_cliente FROM clientes WHERE contacto_alt = ?", [sessi]);
		
		res.forEach((res) => {
			idart = res.ID_art;
			nom = res.nombre;
			cos = res.costo;
			montF = cos * montillo;
			console.log(montF);



			console.log(idart+""+nom+""+cos);
			console.log(res.nombre+"uwu"); 
		})
		
		res2.forEach((res2)=>{
			us =res2.ID_cliente;
			console.log(us);
		})
		datillos= [ Unidades,cos, montF, desc2, us, idart]
		const consulta = await conn.query("INSERT INTO pedidos_art (unidades, precio_unidad, monto, descripcion, id_cliente_fk, id_art_fk) VALUES ?", [datillos]);

	 }catch (err) {
		throw err
		}
	}
	fetchData()

	return res.render('iniciob.hbs', {
				name: req.session.correo,
				logueado: req.session.loggedin,
				message: 'Solicitud de Termo(s)enviada con exito'
		});
}

exports.Invita = (req, res) =>{
	const { Invita1, Nombre,  Unidades, Detall } = req.body;
	console.log(req.body);
	console.log(req.session.correo + ": Correo");
	let sessi = req.session.correo;
	console.log(sessi);


	var montillo = 0;
	if (Unidades === "10") {
		montillo=1;
	} else if (Unidades === "20") {
		montillo = 2;
	}else{
		montillo =3;
	};


	let fetchData = async () => {
	let conn;
	let desc2= ("Nombre(s): "+ Nombre+", Detalles : "+ Detall + ", Unidades: " + Unidades);
	console.log(desc2);
	try {
		conn = await pool.getConnection();
		console.log(Invita1);
		var idart = "";
		var nom = "";
		var cos ="";
		var us = "";


		var montF = 0;
		
		const res = await conn.query("SELECT ID_art, costo , nombre FROM articulos WHERE nombre = ?", [Invita1]);
		const res2 = await conn.query("SELECT ID_cliente FROM clientes WHERE contacto_alt = ?", [sessi]);
		
		res.forEach((res) => {
			idart = res.ID_art;
			nom = res.nombre;
			cos = res.costo;
			montF = cos * montillo;
			console.log(montF);



			console.log(idart+""+nom+""+cos);
			console.log(res.nombre+"o-o"); 
		})
		
		res2.forEach((res2)=>{
			us =res2.ID_cliente;
			console.log(us);
		})
		datillos= [ Unidades,cos, montF, desc2, us, idart]
		const consulta = await conn.query("INSERT INTO pedidos_art (unidades, precio_unidad, monto, descripcion, id_cliente_fk, id_art_fk) VALUES ?", [datillos]);

	 }catch (err) {
		throw err
		}
	}
	fetchData()

	return res.render('iniciob.hbs', {
				name: req.session.correo,
				message: 'Solicitud de Invitaciones enviada con exito',
				logueado: req.session.loggedin, 
		});
}

exports.Globos = (req, res) => {
	const { Globo1, Tex2, Unidades, Tama} = req.body;
	console.log(req.body);
	console.log(req.session.correo + ": Correo");
	let sessi = req.session.correo;
	console.log(sessi);


	var montillo = 0;
	if (Unidades === "1") {
		montillo=1;
	} else if (Unidades === "2") {
		montillo = 2;
	}else{
		montillo =3;
	};


	let fetchData = async () => {
	let conn;
	let desc2= ("Texto: "+ Tex2 +", Tamaño : "+ Tama + ", Unidades: " + Unidades);
	console.log(desc2);
	try {
		conn = await pool.getConnection();
		console.log(Globo1);
		var idart = "";
		var nom = "";
		var cos ="";
		var us = "";


		var montF = 0;
		
		const res = await conn.query("SELECT ID_art, costo , nombre FROM articulos WHERE nombre = ?", [Globo1]);
		const res2 = await conn.query("SELECT ID_cliente FROM clientes WHERE contacto_alt = ?", [sessi]);
		
		res.forEach((res) => {
			idart = res.ID_art;
			nom = res.nombre;
			cos = res.costo;
			montF = cos * montillo;
			console.log(montF);
			console.log(cos);



			console.log(idart+""+nom+""+cos);
			console.log(res.nombre+"(9'-')9"); 
		})
		
		res2.forEach((res2)=>{
			us =res2.ID_cliente;
			console.log(us);
		})
		datillos3= [ Unidades,cos, montF, desc2, us, idart]
		const consulta = await conn.query("INSERT INTO pedidos_art (unidades, precio_unidad, monto, descripcion, id_cliente_fk, id_art_fk) VALUES ?", [datillos3]);

	 }catch (err) {
		throw err
		}
	}
	fetchData()

	return res.render('iniciob.hbs', {
				name: req.session.correo,
				logueado: req.session.loggedin,
				message: 'Solicitud de Globo(s) enviada con exito'
		});
}
