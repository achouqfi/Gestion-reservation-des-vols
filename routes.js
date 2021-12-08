const http = require('http');
const fs = require('fs');
// var ejs = require('ejs');


const server = http.createServer((req, res) =>{
    //lodash
    // const num = _.random(0, 20);
    // console.log(num);
    // console.log(req.url , req.method);
    // var path = require('path');
    res.setHeader('Content-Type', 'text-html');
    // var filename = path.basename('/Users/Refsnes/demo_path.js');

    // console.log(filename);
    let path = './view/pages/';

    switch(req.url){
        case '/':
            path +='index.ejs';
            res.statusCode='200';
            // console.log(path);
            break;
        case '/about':
            path += 'about.html';
            res.statusCode='200';
            break;
        case '/about-blah':
            res.statusCode='301';
            res.setHeader('location', '/about')
            res.end();
        default :
            path += '404.html';
            res.statusCode='404';
            break;
    }
    
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
        }
        res.end(data);
    })
})

server.listen(3000, 'localhost',()=>{
    console.log('listen to localhost port 3000');

})