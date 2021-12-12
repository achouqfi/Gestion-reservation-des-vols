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

function insertReservation(reservationID) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO vols (reservationID, volID)VALUES ('${reservationID}','null pour I')`, function(err, res){
            resolve(res)
        })
    })
}

module.exports = {
    findAll,
    insertReservation
}