const Vols = require('../model/volsModel.js');

 function getVols() {
    try {
        const vols = Vols.findAll();
        //  vols.toString();
        return vols;
    } catch (error) {
        console.log(error)
    }
}

// async function CreateVol(req, res) {
//     try {
//         const body = await getPostData(req)
//         const { name, description, price } = JSON.parse(body)
//         const product = {
//             name,
//             description,
//             price
//         }
//         const newProduct = await Product.create(product)
//         res.writeHead(201, { 'Content-Type': 'application/json' })
//         return res.end(JSON.stringify(newProduct))  

//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = {
    getVols
}