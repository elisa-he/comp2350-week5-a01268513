const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "gbbbxpiejnzi04dj",
	password: "ajifdpue8fld4uld",
	database: "ynyzs3ul6unw819f",
	multipleStatements: false, 
	reconnect: true
};

const dbConfigLocal = {
	host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "gbbbxpiejnzi04dj",
	password: "ajifdpue8fld4uld",
	database: "ynyzs3ul6unw819f",
	multipleStatements: false,
	reconnect:true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
