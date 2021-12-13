const Vols = require('../model/volsModel.js');

function getVols() {
    try {
        const vols = Vols.findAll();
        return vols;
    } catch (error) {
        console.log(error)
    }
}

function insertReservation(id) {
    try {
        const vols = Vols.insertReservation(id);
        console.log(id);
        return vols;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getVols,
    insertReservation
}