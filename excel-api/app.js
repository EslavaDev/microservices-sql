const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const fileUpload = require('express-fileupload');

// cargar rutas
const file = require('./src/routes/files');

app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));

// configurar cabeceras
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Headers, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(fileUpload());
// rutas base
app.use('/api/excel', file);

module.exports = app;
