let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let feedSchema = new Schema({
    "Estado": String,
    "Primer nombre del usuario": String
}, { strict: false });

module.exports= mongoose.model('Excel', feedSchema);