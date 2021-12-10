const http = require('http')
const { getVols } = require('./controller/volsControlller.js')
const url = require("url");
const ejs = require("ejs");

const server = http.createServer((req, res) => {

    //method routes
    if(req.url === '/' && req.method === 'GET') {
        getVols(req, res)
    } 
    // else if(req.url=== '/vol/' && req.method === 'GET') {
    //     const id = req.url.split('/')[3]
    //     getProduct(req, res, id)
    // } 
    // else if(req.url === '/vols/add' && req.method === 'POST') {
    //     createProduct(req, res)
    // }
    //  else if(req.url==='/vol/update' && req.method === 'PUT') {
    //     const id = req.url.split('/')[3]
    //     updateProduct(req, res, id)
    // } else if(req.url==='/vol/delete' && req.method === 'DELETE') {
    //     const id = req.url.split('/')[3]
    //     deleteProduct(req, res, id)
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'application/json' })
    //     res.end({ message: 'Route Not Found' })
    // }
})

const PORT =  process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;
