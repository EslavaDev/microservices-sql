let mongoose = require('mongoose');
let Excel = require('../models/files');
let fs = require('fs')
const mongoSave = async (bd, data, resolve, path, json) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/' + bd);
        Excel.create(data,(err,cre)=>{
            if(err){
                reject(`error al crear el archivo en mongo: ${err}`);
            }else{
                return resolve(cre);
            }
        })
        setTimeout(async () => {
            await fs.unlink(path);
            await fs.unlink(json);
            await mongoose.connection.close();
        }, 2000)
        //return res.send(data);
    } catch (error) {
        throw new Error(error);
    }
}

const mongoGetId = async (bd, data, res) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/' + bd);
        await Excel.find({ "Número de Identificación del usuario": data }, (err, result) => {
            if (err)
                throw new Error(err);
            res.json(result);
        });
        await mongoose.connection.close();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { mongoSave, mongoGetId };