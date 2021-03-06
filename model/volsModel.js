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

function findReservation() {
    return new Promise((resolve, reject) => {
        connection.query("select nom,email,Npassport,assurance,repas,telephone,Nperson,datenaissance,vols.pointdepart,vols.pointarrive,vols.horaire,vols.datedepart,vols.datedarrive,vols.prix,vols.escale from vols,reservation where vols.volID = reservation.volID and reservation.reservationID=(SELECT  MAX(reservationID) FROM reservation)", function(err, res){
            resolve(res)
        })
    })
}

function insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance,assurance,repas) {
    // console.log(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance,assurance,repas);
    
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO reservation (nom,email,datenaissance,Npassport,nPerson,telephone,volID,repas,assurance) VALUES ("${nom}","${email}","${dateNaissance}","${passport}","${nombrePer}","${numeroTel}","${volID}","${repas}","${assurance}")`, function(err, res){
            resolve(res)
        })

        connection.query(`UPDATE vols SET capacite = capacite - ${nombrePer}  WHERE volID = ${volID};`, function(err, res){
            resolve(res)
        })
    })
}

module.exports = {
    findAll,
    insertReservation,
    findReservation
}