const mysql = require('mysql');

const connection = mysql.createConnection({
    user: root,
    database: purchases
});

connection.connect();

module.exports = connection;