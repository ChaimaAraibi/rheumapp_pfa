const patient = require("../models/patientModel");
const jwt_decode = require ("jwt-decode");


function getAuthorizedID (req){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  var decoded = jwt_decode(token);
  console.log(decoded)
  return decoded.id
}

function getAllPatients(req,res) {
  //patient.find({_id:getAuthorizedID(req)}, function (err, patient) {
  patient.find( function (err, patient) {
      if (err) {
      console.log(err);
    } else {
      res.json(patient);
    }
  });
}

function getPatientById(req, res) {
  patient.findById(req.params.id, function (err, patient) {
    if (err) {
      console.log(err);
    } else {
      res.json(patient);
    }
  });
}

function addPatient(
  req,
  res
) {
  let newpatient = new patient({
    nom: req.body.nom,
    prenom: req.body.prenom,
    date_naissance: req.body.date_naissance,
    telephone: req.body.telephone,
    num_dossier: req.body.num_dossier,
    diagnostic: req.body.diagnostic,
    ordonnance: req.body.ordonnance,
    evaluation: req.body.evaluation,
    //doctorID: getAuthorizedID(req),

  });
  newpatient.save(function (err, patient) {
    if (err) {
      console.log(err);
    } else {
      res.json(patient);
    }
  });
}

/*******************evaluation-ordonnance**************/

function updateOrdonnance(req, res) {
  patient.findById(req.params.id, function (err, patient) {
    if (err) {
      console.log(err);
    } else {
      patient.ordonnance = req.body.ordonnance;
      res.json(patient);
    }
  });
}


function updateEvaluation(req, res) {
  patient.findById(req.params.id, function (err, patient) {
    if (err) {
      console.log(err);
    } else {
      patient.evaluation = req.body.evaluation;
      res.json(patient);
    }
  });
}

/***************scores************/

function askforJADAS(req, res) {
  patient.updateOne(
    { _id: req.params.id },
    {
      $push: {
        JADAS: {
          dateDemande: new Date (),
          state: 0,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function askforJSPADA(req, res) {
  patient.updateOne(
    { _id: req.params.id },
    {
      $push: {
        JSPADA: {
          dateDemande: req.body.dateDemande,
          state: 0,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function askforCHAQ(req, res) {
  patient.updateOne(
    { _id: req.params.id },
    {
      $push: {
        CHAQ: {
          dateDemande: req.body.dateDemande,
          state: 0,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function fillJADAS(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "JADAS._id": req.params.idj },
    {
      $set: {
        JADAS: {
          score: req.body.score,
          dateCalcul: new Date(),
          state: 1,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function fillJSPADA(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "JSPADA._id": req.params.idj },
    {
      $set: {
        JSPADA: {
          score: req.body.score,
          dateCalcul: new Date(),
          state: 1,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}
function fillCHAQ(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "CHAQ._id": req.params.idj },
    {
      $set: {
        CHAQ: {
          score: req.body.score,
          douleurs:req.body.douleurs,
          dateCalcul: new Date(),
          state: 1,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function validateJADAS(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "JADAS._id": req.params.idj },
    {
      $set: {
        JADAS: {
          dateValidation: new Date(),
          state: 2,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function validateJSPADA(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "JSPADA._id": req.params.idj },
    {
      $set: {
        JSPADA: {
          dateValidation: new Date(),
          state: 2,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}
function validateCHAQ(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "CHAQ._id": req.params.idj },
    {
      $set: {
        CHAQ: {
          evaluation:req.body.evaluation,
          dateValidation: new Date(),
          state: 2,
        },
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

/*************bilan**************/

function askforBILAN(req, res) {
  patient.updateOne(
    { _id: req.params.id },
    {
        Bilan: {
          type_bilan: req.body.type,
          dateDemande: new Date(),
          state: 0,
        },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

function validateBILAN(req, res) {
  patient.updateOne(
    { _id: req.params.idp, "JADAS._id": req.params.idj },
    { Bilan: {
          dateSaisie: new Date(),
          state: 1,
        },
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(patient);
      }
    }
  );
}

module.exports.getPatientById = getPatientById
module.exports.addPatient = addPatient
module.exports.updateOrdonnance = updateOrdonnance
module.exports.fillJADAS = fillJADAS
module.exports.askforJADAS = askforJADAS
module.exports.validateJADAS = validateJADAS
module.exports.askforBILAN = askforBILAN;
module.exports.validateBILAN = validateBILAN;
module.exports.getAllPatients = getAllPatients;
module.exports.updateEvaluation = updateEvaluation;
module.exports.fillJSPADA = fillJSPADA
module.exports.askforJSPADA = askforJSPADA
module.exports.validateJSPADA = validateJSPADA
module.exports.fillCHAQ = fillCHAQ
module.exports.askforCHAQ = askforCHAQ
module.exports.validateCHAQ = validateCHAQ