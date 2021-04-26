const express = require("express");
const doctorQueries = require("./../queries/doctorQueries");
const {
  getAllPatients,
  getPatientById,
  addPatient,
  updateOrdonnance,
  askforJADAS,
  validateJADAS,
  askforJSPADA,
  validateJSPADA,
  askforBILAN,
  validateBILAN,
  askforCHAQ,
  validateCHAQ
} = require("../queries/patientQueries");

const doctorRoutes = express.Router();

doctorRoutes.route("/myPatients/").get((req, res) => {
  getAllPatients(req, res);
});


doctorRoutes.route("/add").post((req, res) => {
  addPatient(req, res);
});

doctorRoutes.route("/updateOrdonnance/:id").post((req, res) => {
  updateOrdonnance(req, res);
});
doctorRoutes.route("/updateEvaluation/:id").post((req, res) => {
  updateOrdonnance(req, res);
});

doctorRoutes.route("/newJADAS/:id").post((req, res) => {
  askforJADAS(req, res);
});

doctorRoutes.route("/validJADAS/:idp/:idj").post((req, res) => {
  validateJADAS(req, res);
});

doctorRoutes.route("/newJSPADA/:id").post((req, res) => {
  askforJSPADA(req, res);
});

doctorRoutes.route("/validJSPADA/:idp/:idj").post((req, res) => {
  validateJSPADA(req, res);
});

doctorRoutes.route("/newBilan/:id").post((req, res) => {
  askforBILAN(req, res);
});

doctorRoutes.post("/signup", doctorQueries.signup);
doctorRoutes.post("/login", doctorQueries.login);

doctorRoutes.route("/").get((req, res)=>{
    getAllPatients(req,res)
    
});

doctorRoutes.route("/:id").get((req,res)=>{
    getPatientById(req,res);
});

doctorRoutes.route("/add").post((req,res)=>{
    addPatient(req,res);
});

doctorRoutes.route("/updateOrdonnance/:id").post((req,res)=>{
    updateOrdonnance(req,res);
});

doctorRoutes.route("/newJADAS/:id").post((req,res)=>{
  askforJADAS(req,res);
});

doctorRoutes.route("/validJADAS/:idp/:idj").post((req,res)=>{
  validateJADAS(req,res);
});

doctorRoutes.route("/newJSPADA/:id").post((req,res)=>{
  askforJSPADA(req,res);
});

doctorRoutes.route("/validJSPADA/:idp/:idj").post((req,res)=>{
  validateJSPADA(req,res);
});

doctorRoutes.route("/newCHAQ/:id").post((req,res)=>{
  askforCHAQ(req,res);
});

doctorRoutes.route("/validCHAQ/:idp/:idj").post((req,res)=>{
  validateCHAQ(req,res);
});

doctorRoutes.route("/validateBILAN/:id/").post( (req, res) => {
  validateBILAN(req, res);
});

doctorRoutes.route("/newBILAN/:id").post((req,res)=>{
    askforBILAN(req,res);
});


module.exports = doctorRoutes;
