const promise = {};
const xlsx = require('xlsx-to-json');
const xls = require('xls-to-json');
const fs = require('fs');
const path = require('path');
const mongo = require('../services/mongo');

promise.addDocument = (db, dataFile, name) => new Promise((resolve, reject) => {
  const extension = name.split('.');
  const fileName = Math.random().toString(30).replace(/[^a-z]+/, '');
  const filePath = path.join(__dirname, '..', '..', '..', `uploads/${fileName}.${extension[1]}`);
  const fileJson = path.join(__dirname, '..', '..', '..', `uploads/${fileName}.json`);
  try {
    // console.log(file_path)
    // console.log(file_path, dataFile)
    fs.writeFile(filePath, dataFile, (err) => {
      if (err) {
        throw new Error(`error al crear el archivo: ${err}`);
      }
      if (extension[1] === 'xlsx') {
        xlsx({
          input: filePath, // input xls
          output: fileJson, // output json
          lowerCaseHeaders: true,
        }, (error, result) => {
          if (error) {
            throw new Error(err);
          } else {
            // return resolve(result)
            return mongo.mongoSave(db, result, resolve, filePath, fileJson);
          }
        });
      } else {
        xls({
          input: filePath, // input xls
          output: fileJson, // output json
          lowerCaseHeaders: true,
        }, (error, result) => {
          if (error) {
            throw new Error(err);
          } else {
            return mongo.mongoSave(db, result, resolve, filePath, fileJson);
          }
        });
      }
    });
  } catch (err) {
    reject(err);
  }
});
module.exports = promise;
