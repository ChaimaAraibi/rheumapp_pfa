const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Patient = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    telephone: {
        type: Number
    },
    num_dossier: {
        type: Number,
        required: true
    },
    diagnostic: {
        type: String,
        required: true
    },
    ordonnance: {
        type: String,
        required: true
    },
    JADAS: [{
        score: Number,
        dateDemande: Date,
        dateCalcul: Date,
        dateValidation: Date,
        state: Number // 0: demandé, 1: rempli, 2: validé
    }],
    Bilan: [{
        type: String, // Hémoglobine , VGM , TCMH , Globules blancs , Polynucléaires neutrophiles , Lymphocyte  , Plaquettes , Vitesse de sédimentation , Protéine C réactive , ASAT , ALAT , GGT , PAL , Créatinine , Ferritinémie , ECBU , Sérologie hépatite C , Sérologie hépatite B 
        dateDemande: Date,
        dateSaisie: Date,
        state: Number // 0: demandé, 1: done
    }],

});
module.exports = mongoose.model('Patient', Patient);