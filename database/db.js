const mysql = require('mysql');

const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'tcg'
});

conexion.connect((error)=>{
	if (error) {
		console.log("el error de conexion es: " + error);
		return;
	}
	console.log('conectado a la database');
});

module.exports = conexion;