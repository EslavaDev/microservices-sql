'use strict'
var request = require('request');

exports.petition = function(type,url,data,headers){
  return new Promise(function(resolve, reject){
    var options = { 
        method: type,
        //url: process.env.LOCALHOST+':'+port+path,
        url,
        form:data,
        headers:{
           'Content-Type' :'application/x-www-form-urlencoded',
          },
          rejectUnauthorized:false };
        request(options, function (error, response, body) {
          if (error) {
            console.log('soy un error',error);
            return reject(error);
          }
          else{
            //console.log(response);
            console.log("-------------------------------");
            //console.log(body);
            return resolve(body);      
          }
        });
  });
};
