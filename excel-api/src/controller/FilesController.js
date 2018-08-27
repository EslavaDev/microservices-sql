'use strict';

const promise = require('../services/promises');
const mongo = require('../services/mongo');

class FileController {


  async uploadImagen(req, res, next) {
    let {file, db, name} = req.body;
    //return res.send(req.body);
     file = Buffer.from(JSON.parse(file).data);  

    //console.log(file, db, name)
    promise.addDocument(db,file,name).then(function(result){
      res.status(200).send(result);
    })
    .catch(function(err){
      res.status(404).send(err);
    }) 
    
  
  }

  async getData(req,res){
    console.log(req.body)
    const {data,db} = req.body
    try {
      return (data && db ) && mongo.mongoGetId(db,data,res)
      //throw new Error('no data')
      
    } catch (error) {
      res.status(404).send(error)  
    }
  }
  
}


module.exports.FileController = FileController;