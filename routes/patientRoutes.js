const { getAllPatients, getPatientById, addPatient, updateOrdonnance, addJADAS } = require("../queries/patientQueries") 
const express = require('express')
const patientRoutes = express.Router();


patientRoutes.route("/").get((req, res)=>{
    getAllPatients(req,res)
    
});

patientRoutes.route("/:id").get((req,res)=>{
    getPatientById(req.params.id,res);
});

patientRoutes.route("/add").post((req,res)=>{
    addPatient(
        req.query.nom,
        req.query.prenom,
        req.query.telephone,
        req.query.num_dossier,
        req.query.diagnostic,
        req.query.ordonnance,
        res
    );
});

patientRoutes.route("/updateOrdonnance/:id").post((req,res)=>{
    updateOrdonnance(
        req.params.id,
        req.query.ordonnance,
        res);
});

patientRoutes.route("/newJADAS/:id").post((req,res)=>{
    addJADAS(
        req.params.id,
        req.query.score,
        res
        );
});


module.exports = patientRoutes;
