const mysql = require('mysql2');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ayoub',
    database :'briefnodejs'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

function findAll() {
    return new Promise((resolve, reject) => {
        connection.query("select * from vols", function(err, res){
            resolve(res)
        })
    })
}

function insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO reservation (nom,email,datenaissance,Npassport,nPerson,telephone,volID) VALUES ("${nom}","${email}","${dateNaissance}","${passport}","${nombrePer}","${numeroTel}","${volID}")`, function(err, res){
            // "INSERT INTO reservation (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')"
            resolve(res);
            
        })
    })
}

module.exports = {
    findAll,
    insertReservation
}