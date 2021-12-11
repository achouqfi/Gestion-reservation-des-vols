const http = require('http')
const { getVols } = require('./controller/volsControlller.js')
const url = require("url");
const ejs = require("ejs");
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    
    // if('http://localhost:3000/api/home' && req.method === 'GET') {
    // }

    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  
    if (path == "") {
      path = "index.ejs";
    }
    
    let array =await getVols();
    // let newarray =["khh","khh","khh","khh","khh"]
    let file = __dirname + "/view/" + path;
    fs.readFile(file,'utf-8',function(err, content){
        if (err){
            console.log(`File Not Found ${file}`);
            res.writeHead(404);
            res.end();
        } else {
            res.setHeader("Content-Type", "text/html");
            // switch (path){
            // case "css/main.css":
            //     res.writeHead(200, { "Content-type": "text/css" });
            //     break;
            // case "js/main.js":
            //     res.writeHead(200, { "Content-type": "application/javascript" });
            //     break;
            // case "index.ejs":
            //     res.writeHead(200, { "Content-type": "text/html" });
            // }
            let dataRender = ejs.render(content , {dataArray: array});
            res.end(dataRender);
        }
    });
})

const PORT =  process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;
