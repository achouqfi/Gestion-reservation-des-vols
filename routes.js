const http = require("http");
const url = require("url");
const ejs = require("ejs");
const connection = require("./view");

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  if (path == "") {
    path = "index.ejs";
  }else if(path == "reservation"){
    path = "reservation.ejs";
  }

  let file = __dirname + "/view/" + path;
  ejs.renderFile(file, function(err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      switch (path) {
        case "css/main.css":
          res.writeHead(200, { "Content-type": "text/css" });
          break;
        case "js/db.js":
          res.writeHead(200, { "Content-type": "application/javascript" });
          break;
        case "index.ejs":
          res.writeHead(200, { "Content-type": "text/html" });
          break;
        case "reservation.ejs":
          res.writeHead(200, { "Content-type": "text/html" });
          break;
      }
      res.end(content);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});

