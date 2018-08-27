let fs = require('fs')
const Boom = require('boom');
let connect = require('../../services/connect');
// let dataXL= require('../../Estructura CACERC Res 2463_2014.xlsx');
async function upload(
  req,
  reply
){
  try{
    var headers = {};
    const { payload } = req
    //console.log(payload.file)
    payload.name = payload.file.hapi.filename
    payload.file = JSON.stringify(payload.file._data)
    /*let temp = Buffer.from(JSON.parse(payload.file).data)
    console.log(temp)*/
   return connect.petition('POST','http://127.0.0.1:3770/api/excel/upload',payload,headers)
   .then(function(response){
       //console.log(response);
       return response
   })
   .catch(function(error){
       return {status: 404, message: error}
   })


  }catch(err){
    return Boom.badRequest();
  }
}

async function getData(
  req,
  reply
){
  try{
    var headers = {};
  var data = req.payload;
    //console.log(data)
  return connect.petition('POST','http://127.0.0.1:3770/api/excel/get',data,headers)
  .then(function(response){
      //console.log(response);
      return {status:200,response}
  })
  .catch(function(error){
      return {status: 404, message: error}
  })


  }catch(err){
    return Boom.badRequest();
  }
}


module.exports = {
  upload,
  getData
}