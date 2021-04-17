const mongoose = require("mongoose");
const validator = require("validator");

const doctorSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  cin: {
    type: String,
    required: true,
    unique: true,
    maxlength: 8,
    minlength: 8,
  },
  mail: {
    type: String,
    validate: validator.isEmail,
    unique: true,
    lowercase: true,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  hopital: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

/* this is an instance method : an instance method in a 
method which is available for each document in a certain collection */
doctorSchema.methods.correctCin = async function (candidatecin, doctorcin) {
  return await (candidatecin === doctorcin);
};

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
