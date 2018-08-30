// importaciones
const mongoose = require('mongoose');
const fs = require('fs');
const Excel = require('../models/files');

// creacion del metodo de mongo db para el guardado de datos, esta funcion es asincrona
const mongoSave = async (bd, data, resolve, path, json) => {
  try {
    // conexion a mongo db
    await mongoose.connect(`mongodb://localhost:27017/${bd}`);
    // metodo definido en la libreria mongoose para crear un documento, recibe la data y un callback
    Excel.create(data, (err, cre) => {
      // si ocurre un error se lanza una excepcion la cual sera controlada mas arriba
      if (err) {
        throw new Error(`error al crear el archivo en mongo: ${err}`);
      } else {
        // si todo sale correcto se lanza el "resolve", para resolver la promesa de mas arriba
        return resolve(cre);
      }
    });
    // se crea una funcion asincrona que se ejecuta a los 2sg
    setTimeout(async () => {
      // metodo con el cual se elimine ciertos documentos es asincrono
      await fs.unlink(path);
      await fs.unlink(json);
      // metodo con el cual nos desconectamos de mongoDB
      await mongoose.connection.close();
    }, 2000);
  } catch (error) {
    throw new Error(error);
  }
};

// creacion del metodo de mongo db para la consulta de datos, esta funcion es asincrona
const mongoGetId = async (bd, data, res) => {
  try {
    // conexion a mongo db
    await mongoose.connect(`mongodb://localhost:27017/${bd}`);
    // metodo definido en mongoose para consultar un documento, recibe la data y un callback
    await Excel.find({ 'Número de Identificación del usuario': data }, (err, result) => {
      if (err) {
        // si ocurre un error se lanza una excepcion la cual sera controlada mas arriba
        throw new Error(err);
      }
      // si todo sale correcto se retorna el "result" en forma json
      res.json(result);
    });
    // metodo para desconectarse de MongoDB
    await mongoose.connection.close();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { mongoSave, mongoGetId };
