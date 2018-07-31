
const Request = require('request');
const Boom = require('boom');

async function upload(
  request,
  reply
){
  try{
    return await Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:3700/upload/5",
      "body": JSON.stringify({
          "firstname": "Nic",
          "lastname": "Raboy"
      })
  }, async (error, response, body) => {
      if(error) {
          return console.dir(error, 'hola error');
      }
      //console.log('data:   ', response)
      console.log('body          ',JSON.parse(body))
      return await JSON.parse(body)
  }).toJSON();

  }catch(err){
    return Boom.badRequest();
  }
}

module.exports = {
  upload
}