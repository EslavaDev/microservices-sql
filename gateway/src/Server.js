const hapi = require('hapi');
const chairo = require('chairo');
const path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Jwt = require('hapi-auth-jwt2');
const Boom = require('boom');
const HapiSwagger = require('hapi-swagger');
const { promisify, format  } = require('util');
const fs = require('fs');
const readDirAsync = promisify(fs.readdir);
const Swagger = require('./Swagger');
module.exports.Init = async function(config){

    const server = new hapi.Server({
      port: config.port,
      host: config.host,
      routes:{
        cors:{
          origin: ["*"],
          headers: ["Accept", "Content-Type"],
          additionalHeaders: ["X-Requested-With"]
        }
      }
    });
    await server.register([
      Vision,
      Inert,
      Jwt
    ]);
  
    await server.register({
      plugin: HapiSwagger,
      options: Swagger
    })
    await server.register(chairo);
    server.seneca.
    client({
      port: 4100,
      host: '192.168.0.14',
      type: "tcp",
      pin: "role:Soporte"
    }) //conecction why microservice profiles

  
    /*server.auth.strategy('jwt', 'jwt', {
      key: config.jwtSecret,
      validate: validatefn,
      verifyOptions:{
          //ignoreExpiration: true,
          algorithms:['HS256'] 
      }
  });*/
  

  
  let modulesPath = path.join(__dirname, "modules");
  let directories =  await readDirAsync(modulesPath);
  directories.forEach((dirName, index)=>{
      let dirPath = path.join(modulesPath,dirName);
          if(fs.statSync(dirPath).isDirectory()){
              require(dirPath).Init(server, config);
          }
  })
    await server.start();
    
    console.log(`the server is runing at ${server.info.port}`)
  
  };