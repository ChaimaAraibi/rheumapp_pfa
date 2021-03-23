const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Doctor = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    hopital: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    
});
module.exports = mongoose.model('Doctor', Doctor);