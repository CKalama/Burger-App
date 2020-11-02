var mysql = require('mysql');

var connection  = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:"root",
    password:"password",
    database:'department_db'
});

connection.connect(function(err) {
    if (err) {
        console.error("error connectin: " + err.stack);
        return;
    }
    console.log("conected as id " + connection.threadId);
});

module.exports = connection; 