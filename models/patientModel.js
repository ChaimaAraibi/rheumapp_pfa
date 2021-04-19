const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Patient = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  date_naissance: {
    type: Date,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  num_dossier: {
    type: Number,
    required: true,
  },
  diagnostic: {
    type: String,
    required: true,
  },
  ordonnance: {
    type: [String],
    required: true,
    minItems: 0,
    maxItems: 5,
  },
  JADAS: [
    {
      score: String,
      dateDemande: Date,
      dateCalcul: Date,
      dateValidation: Date,
      state: Number, // 0: demandé, 1: rempli, 2: validé
    },
  ],
  JADAS: [
    {
      score: String,
      dateDemande: Date,
      dateCalcul: Date,
      dateValidation: Date,
      state: Number, // 0: demandé, 1: rempli, 2: validé
    },
  ],
  JSPADA: [
    {
      score: String,
      dateDemande: Date,
      dateCalcul: Date,
      dateValidation: Date,
      state: Number, // 0: demandé, 1: rempli, 2: validé
    },
  ],
  CHAQ: [
    {
      score: String,
      dateDemande: Date,
      dateCalcul: Date,
      dateValidation: Date,
      state: Number, // 0: demandé, 1: rempli, 2: validé
    },
  ],
  JAMAR: [
    {
      score: String,
      dateDemande: Date,
      dateCalcul: Date,
      dateValidation: Date,
      state: Number, // 0: demandé, 1: rempli, 2: validé
    },
  ],
  Bilan: {
    // type_bilan: String, // Hémoglobine , VGM , TCMH , Globules blancs , Polynucléaires neutrophiles , Lymphocyte  , Plaquettes , Vitesse de sédimentation , Protéine C réactive , ASAT , ALAT , GGT , PAL , Créatinine , Ferritinémie , ECBU , Sérologie hépatite C , Sérologie hépatite B
    // dateDemande: Date,
    // dateSaisie: Date,
    // state: Number, // 0: demandé, 1: done
    // bilan: String,
    type_bilan: [String],
    dateDemande: {
      type: Date,
      default: Date.now(),
    },
    state: Number, // 0: demandé, 1: done
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Patient", Patient);
