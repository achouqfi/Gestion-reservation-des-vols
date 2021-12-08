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

    insertsql = "INSERT INTO personnes (id,LastName,FirstName,Email) values ('2','soufian','mettaji','huhuhu')"
    // console.log(insertsql);
    connection.query(insertsql, function(err, resultat){
        if(err){
            throw err;
        }
        console.log('table created !');
    })
});