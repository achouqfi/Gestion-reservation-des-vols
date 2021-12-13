const Vols = require('../model/volsModel.js');

function getVols() {
    try {
        const vols = Vols.findAll();
        return vols;
    } catch (error) {
        console.log(error)
    }
}

function insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance) {
    console.log(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance);
    try {
        const vols = Vols.insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance);
        // console.log(id);
        return vols;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getVols,
    insertReservation
}