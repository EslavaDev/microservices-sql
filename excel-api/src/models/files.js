// importacion de mongo
const mongoose = require('mongoose');

// declaracion de variables usando la metodologia destructuring
const { Schema } = mongoose;

// creacion del schema de MongoDB
const feedSchema = new Schema({
  Estado: String,
}, { strict: false }); // el strict:false es para hacer dinamica la collection de mongo

// exportacion del modelo de MongoDB
module.exports = mongoose.model('Excel', feedSchema);
