'use strict'

let express = require('express');
const {FileController} = require('../controller/FilesController');
const archivoController = new FileController();
const archivo = express.Router();

archivo.post('/upload/', archivoController.uploadImagen);
archivo.post('/get', archivoController.getData);

module.exports = archivo;
