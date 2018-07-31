let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DataSchema = Schema({
  Db: String,
  Data: String,
  Atto: String
});

module.exports= mongoose.model('Data', DataSchema);