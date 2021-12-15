const Vols = require('../model/volsModel.js');

function getVols() {
    try {
        const vols = Vols.findAll();
        return vols;
    } catch (error) {
        console.log(error)
    }
}

function getReservation() {
    try {
        const Reservation = Vols.findReservation();
        return Reservation;
    } catch (error) {
        console.log(error)
    }
}

function insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance,assurance,repas) {
    if(assurance == undefined){
        assurance = "off"
    } 
    if (repas == undefined){
        repas = "off"
    }
    try {
        const vols = Vols.insertReservation(nom,nombrePer,volID,email,numeroTel,passport,dateNaissance,assurance,repas);
        return vols;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getVols,
    insertReservation,
    getReservation
}