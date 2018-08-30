const promise = require('../services/promises');
const mongo = require('../services/mongo');

// metodo para cargar el archivo (este metodo es asyncrono)
const uploadImagen = async (req, res) => {
  // declaracion de variables usando la metodologia destructuring
  const {
    db,
    name,
  } = req.body;
  let {
    file,
  } = req.body;

  // se toma la data que trae el archivo file y se convierte en un Buffer
  file = Buffer.from(JSON.parse(file).data);

  // uso de la promesa para crear el documento y transformarlo a json
  promise.addDocument(db, file, name).then((result) => {
    // si la promesa se resuelve devuelve el result
    res.status(200).send(result);
  }).catch((err) => {
    res.status(404).send(err);
  });
};

// metodo para traer los datos de la BD de mongo
const getData = async (req, res) => {
  // declaracion de variables usando la metodologia destructuring
  const {
    data,
    db,
  } = req.body;
  // si la data y la db existen consulta a mongo
  return (data && db) && mongo.mongoGetId(db, data, res);
};

// exportacion de los metodos.
module.exports = {
  uploadImagen,
  getData,
};
