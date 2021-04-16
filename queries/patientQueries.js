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
    date_naissance,
    telephone,
    num_dossier,
    diagnostic,
    ordonnance,
    res
){
    let newpatient = new patient ({
        nom: nom,
        prenom: prenom, 
        date_naissance: date_naissance,
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

function askforJADAS(
    id,
    date,
    res
){
    
    patient.updateOne(
        {_id: id},
        {$push: {
            JADAS: { 
                dateDemande: date, 
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

function fillJADAS(
    idp,
    idj,
    score,
    res
){
    
    patient.updateOne(
        {_id: idp,"JADAS._id": idj},
        {$set: {
            JADAS: {
                score: score, 
                dateCalcul: new Date(), 
                state: 1
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

function validateJADAS(
    id,
    idj,
    res
){
    
    patient.updateOne(
        {_id: id, "JADAS._id": idj},
        {$set: {
            JADAS: { 
                dateValidation: new Date(), 
                state: 2
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

function askforBILAN(
    id,
    type,
    date,
    res
){
    
    patient.updateOne(
        {_id: id},
        {$push: {
            Bilan: { 
                type_bilan: type,
                dateDemande: date, 
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

function fillBILAN(
    idp,
    idj,
    path,
    res
){
    
    patient.updateOne(
        {_id: idp,"JADAS._id": idj},
        {$set: {
            JADAS: { 
                dateSaisie: new Date(), 
                state: 1,
                bilan:path
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

module.exports.getAllPatients = getAllPatients,
module.exports.getPatientById = getPatientById,
module.exports.addPatient = addPatient,
module.exports.updateOrdonnance = updateOrdonnance,
module.exports.fillJADAS = fillJADAS,
module.exports.askforJADAS = askforJADAS,
module.exports.validateJADAS = validateJADAS
module.exports.askforBILAN = askforBILAN
module.exports.fillBILAN = fillBILAN


