const mysql = require('mysql2');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ayoub',
    database :'briefnodejs'
});

connection.connect(function(err){
    if(err){
        throw err;
    }
    console.log('connected!');

    var personne = "CREATE TABLE personnes (id int primary key,LastName varchar(255), FirstName varchar(255),Email varchar(255));"
    var updatsql = "ALTER TABLE reservation ADD COLUMN dateDebut varchar(255);"
    var delsql = "drop table Message"
    
    // connection.query(personne, function(err, resultat){
    //     if(err){
    //         throw err;
    //     }
    //     console.log('table created !');
    // })
});