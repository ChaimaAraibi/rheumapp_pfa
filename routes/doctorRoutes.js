const express = require("express");
const doctorQueries = require("./../queries/doctorQueries");
const {
  getAllPatients,
  getPatientById,
  addPatient,
  updateOrdonnance,
  askforJADAS,
  validateJADAS,
  //fillJADAS,
  askforBILAN,
  //fillBILAN,
} = require("../queries/patientQueries");

const doctorRoutes = express.Router();

/* ************************************************************************************************* */
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFileter: fileFilter,
});

/* ************************************************************************************************ */

doctorRoutes.route("/myPatients").get((req, res) => {
  getAllPatients(req, res);
});

doctorRoutes.route("/:id").get((req, res) => {
  getPatientById(req.params.id, res);
});

doctorRoutes.route("/add").post((req, res) => {
  addPatient(
    req.query.nom,
    req.query.prenom,
    req.query.date_naissance,
    req.query.telephone,
    req.query.num_dossier,
    req.query.diagnostic,
    req.query.ordonnance,
    res
  );
});

doctorRoutes.route("/updateOrdonnance/:id").post((req, res) => {
  updateOrdonnance(req.params.id, req.query.ordonnance, res);
});

doctorRoutes.route("/newJADAS/:id").post((req, res) => {
  askforJADAS(req.params.id, req.query.date, res);
});

doctorRoutes.route("/validJADAS/:idp/:idj").post((req, res) => {
  validateJADAS(req.params.idp, req.params.idj, res);
});

doctorRoutes.route("/newBilan/:id").post((req, res) => {
  askforBILAN(req.params.id, req.query.type, req.query.date, res);
});

doctorRoutes.post("/signup", doctorQueries.signup);
doctorRoutes.post("/login", doctorQueries.login);

module.exports = doctorRoutes;
