const {
  getPatientById,
  fillJADAS,
  fillJSPADA,
  fillCHAQ
} = require("../queries/patientQueries");
const express = require("express");
const patientRoutes = express.Router();


patientRoutes.route("/:id").get((req, res) => {
  getPatientById(req, res);
});


patientRoutes.route("/fillJADAS/:idp/:idj").post((req,res)=>{
  fillJADAS(
      req,
      res
      );
});

patientRoutes.route("/fillJSPADA/:idp/:idj").post((req,res)=>{
  fillJSPADA(
      req,
      res
      );
});

patientRoutes.route("/fillCHAQ/:idp/:idj").post((req,res)=>{
  fillCHAQ(
      req,
      res
      );
});



module.exports = patientRoutes;
