const http = require('http');
var express = require('express')
var mariadb = require ('mariadb');
var path = require('path');
var dotenv = require ('dotenv');
var session = require('express-session');
var bodyParser = require('body-parser');
const consolidate = require ('consolidate')
var app = express();
var rutas = require("./routes/index");


//SESSION
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', consolidate.handlebars)
app.set('view engine', 'ejs');
app.set('view engine', 'hbs');


//CONEXION A BASE DE DATOS
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
   console.log('Conexion a BD establecida...');
 } catch (err) {
   throw err
   }
}
fetchData()


//LOGIN
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/', require('./routes/paginas.js'));
app.use('/auth', require('./routes/auth'));




//middleware
app.use((req, res, next) => {
	console.log('$(req.url) -$(req.method)'); 
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(rutas);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the Server
app.listen(app.get('port'), () =>{
	console.log("Server on Port: " + app.get('port'))
});




