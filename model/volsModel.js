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
        // if(reject){
        //     throw err;
        // }
            resolve(res)
        })
    })
}


module.exports = {
    findAll
}