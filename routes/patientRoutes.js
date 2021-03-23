const { getAllPatients, getPatientById, addPatient, updateOrdonnance, askforJADAS, validateJADAS, fillJADAS, askforBILAN, fillBILAN } = require("../queries/patientQueries") 
const express = require('express')
const patientRoutes = express.Router();


/* ************************************************************************************************* */ 
const multer =  require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
 });

const fileFilter = (req, file, cb)=>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else {
        cb(null, false);
    }
}

const upload = multer ({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFileter: fileFilter
});

/* ************************************************************************************************ */


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
    askforJADAS(
        req.params.id,
        res
        );
});

patientRoutes.route("/fillJADAS/:idp/:idj").post((req,res)=>{
    fillJADAS(
        req.params.idp,
        req.params.idj,
        req.query.score,
        res
        );
});

patientRoutes.route("/validJADAS/:idp/:idj").post((req,res)=>{
    validateJADAS(
        req.params.idp,
        req.params.idj,
        res
        );
});

patientRoutes.route("/newBilan/:id").post((req,res)=>{
    askforBILAN(
        req.params.id,
        req.query.type,
        res
        );
});

patientRoutes.route("/fillBILAN/:idp/:idb").post(upload.single('bilan'),(req,res)=>{
    fillBILAN(
        req.params.idp,
        req.params.idb,
        req.file.path,
        res
        );
});


module.exports = patientRoutes;
