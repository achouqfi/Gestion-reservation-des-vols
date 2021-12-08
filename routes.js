const http = require("http");
const ejs = require("ejs");

const server = http.createServer((req, res) => {
  //set header content type

    res.setHeader("Content-Type", "text/html");

    let path = "./view/";
    switch (req.url) {
        case "/":
        path += "index.ejs";
        res.statusCode = 200;
        break;
        // case "/about":
        //     path += "about.ejs";
        // res.statusCode = 200;
        // break;
        // case "/checkout":
        // path += "checkout.ejs";
        // res.statusCode = 200;
        // break;
        // case "/check-out":
        // res.statusCode = 301;
        // res.setHeader("Location", "/checkout");
        // res.end();
        // break;
        // default:
        // path += "404.ejs";
        // res.statusCode = 404;
        // break;
    }

    ejs.renderFile(path, {}, {}, function(err, str){
        // str => Rendered HTML string
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(str);
        }
    });
});

server.listen(3000, "localhost", () => {
  console.info("listening for request on port 3000");
});