let promise = {};
let xlsx = require("xlsx-to-json");
let xls = require("xls-to-json");
const fs = require('fs');
const path = require('path');
const mongo = require('../services/mongo');
promise.addDocument = function (db, dataFile, name) {
  return new Promise(function (resolve, reject) {
    let extension = name.split('.');
    let file_name = Math.random().toString(30).replace(/[^a-z]+/, '');
    let file_path = path.join(__dirname,'..','..','..',`uploads/${file_name}.${extension[1]}`);
    let file_json = path.join(__dirname,'..','..','..',`uploads/${file_name}.json`);
    try {
      console.log(file_path)
      //console.log(file_path, dataFile)
      fs.writeFile(file_path, dataFile, err => {
        if (err) {
          throw new Error(`error al crear el archivo: ${err}`);
        }
         if (extension[1] == 'xlsx') {
          xlsx({
            input: file_path,  // input xls 
            output: file_json, // output json 
            lowerCaseHeaders: true
          }, function (err, result) {
            if (err) {
              throw new Error(err);
            } else {
              //return resolve(result)
              return mongo.mongoSave(db, result, resolve, file_path, file_json);
            }
          });
        } else {
          xls({
            input: file_path,  // input xls 
            output: file_json, // output json 
            lowerCaseHeaders: true
          }, function (err, result) {
            if (err) {
              throw new Error(err);
            } else {
              return mongo.mongoSave(db, result, resolve, file_path, file_json);
            }
          });
        } 
      })

    } catch (err) {
      reject(`error tipo: ${err}`);
    }
  })
}
module.exports = promise;