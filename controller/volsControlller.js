const Vols = require('../model/volsModel.js');
const nodemailer = require('nodemailer');

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


function mailler(html, email) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testcoding975@gmail.com',
          pass: 'testCoding1998'
        }
      });

      var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: email,
        subject: 'reservation de vols',
        text: 'Bonjour! voila votre ticket',
        html:html
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' +mailOptions );
        }
      });
}

module.exports = {
    getVols,
    insertReservation,
    getReservation,
    mailler
}