const patient = require('../models/patientModel');


function getAllPatients (req,res){
    patient.find(function(err, patient) {
        if (err) {
            console.log(err);
        } else {
            res.json(patient);
        }
    });
}

function getPatientById (id,res){
    patient.findById(id,function(err, patient) {
        if (err) {
            console.log(err);
        } else {
            res.json(patient);
        }
    });
}

function addPatient (
    nom,
    prenom,
    telephone,
    num_dossier,
    diagnostic,
    ordonnance,
    res
){
    let newpatient = new patient ({
        nom: nom,
        prenom: prenom, 
        telephone: telephone,
        num_dossier: num_dossier, 
        diagnostic: diagnostic, 
        ordonnance: ordonnance
    })
    newpatient.save( 
        function(err,patient){
            if (err) {
                console.log(err);
            } else {
                res.json(patient);
            }
        })
}

function updateOrdonnance(
    id,
    ordonnance,
    res
){
    patient.findById(id, function(err,patient){
        if (err) {
            console.log(err);
        } else {
            patient.ordonnance = ordonnance;
            res.json(patient);
        }
    })
}

function addJADAS(
    id,
    score,
    res
){
    
    patient.updateOne(
        {_id: id},
        {$push: {
            JADAS: {
                score: score, 
                date: new Date(), 
                state: 0
            }
        }}, (err)=>{
            if (err) {
                console.log(err);
            } else {
                res.json(patient);
            }
        }
    )
}


module.exports.getAllPatients = getAllPatients
module.exports.getPatientById = getPatientById
module.exports.addPatient = addPatient
module.exports.updateOrdonnance = updateOrdonnance
module.exports.addJADAS = addJADAS