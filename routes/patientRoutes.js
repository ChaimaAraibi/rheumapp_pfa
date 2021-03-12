const getAllPatients = require("../queries/patientQueries") 
const express = require('express')
const patientRoutes = express.Router();
patientRoutes.route("/", ()=>{
    getAllPatients();
});

module.exports = patientRoutes;
