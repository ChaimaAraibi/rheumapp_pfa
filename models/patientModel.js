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
        date: Date,
        state: Number //state is initially 0 then becomes 1 when doctor sees and validates the score
    }],

});
module.exports = mongoose.model('Patient', Patient);