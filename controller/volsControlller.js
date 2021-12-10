const Vols = require('../model/volsModel.js')

async function getVols(req, res) {
    try {
        const vols = await Vols.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(vols))
        // console.log(products);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getVols
}