const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "udo9opnzprghafjd",
	password: "khdze0ky58d8a9df",
	database: "bzq4scu6rpham0sn",
	multipleStatements: false, 
	reconnect: true
};

const dbConfigLocal = {
	host: "qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "udo9opnzprghafjd",
	password: "khdze0ky58d8a9df",
	database: "bzq4scu6rpham0sn",
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
		
