const patient = require('../models/patientModel');


function getAllpatient (){
    patient.find(function(err, artisan) {
        if (err) {
            console.log(err);
        } else {
            res.json(article);
        }
    });
}

