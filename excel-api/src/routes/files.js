// importaciones
const express = require('express');
const archivoController = require('../controller/FilesController');

// uso del Router de express para redirigir peticiones
const archivo = express.Router();

// rutas a las cuales se accederan para consumirse.
archivo.post('/upload/', archivoController.uploadImagen);
archivo.post('/get', archivoController.getData);

module.exports = archivo;
