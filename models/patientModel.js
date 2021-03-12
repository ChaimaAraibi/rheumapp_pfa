const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Patient = new Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    num_dossier: {
        type: Number
    },
    diagnostic: {
        type: String
    },
    Ordonnance: {
        type: String
    }
});
module.exports = mongoose.model('Patient', Patient);