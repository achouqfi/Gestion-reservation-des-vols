const http = require('http')
const { getVols,insertReservation } = require('./controller/volsControlller.js')
const url = require("url");
const ejs = require("ejs");
const fs = require('fs');
const qs = require('querystring');
const nodemailer = require('nodemailer');

const server = http.createServer(async (req, res) => {
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  
    if (path == "") {
      path = "index.ejs";
    }else if(path == "insertdata"){
        var form = '';
        req.on('data', function(chunk) {
          form += chunk;
        });
        req.on('end', function() {
          var post = qs.parse(form);
          insertReservation(post.nom,post.nombrePer,post.volID,post.email,post.numeroTel,post.passport,post.dateNaissance,post.repas,post.assurance);
        });
        path = "paiment.ejs";
    }else if(path == "payment"){
      path = "paiment.ejs";
    }
    let array =await getVols();
    let file = __dirname + "/view/" + path;
    fs.readFile(file,'utf-8',function(err, content){
        if (err){
            console.log(`File Not Found ${file}`);
            res.writeHead(404);
            res.end();
        } else {
            res.setHeader("Content-Type", "text/html");
            let dataRender = ejs.render(content , {dataArray: array});
            res.end(dataRender);
        }
    });
})

const PORT =  process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;