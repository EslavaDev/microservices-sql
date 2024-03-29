let Data = require('../models/Data');

module.exports = function Controller(options) {

  this.add("role:Soporte, cmd:fetchAll", async (msg, reply) => {
    try {
      Data.find({}, (err, albums) => {
        if (err) {
          reply(null, {
            message: 'Error en la peticion'
          });
        } else {
          if (albums.length <= 0) {
            reply(null, {
              message: 'No hay Container!!'
            });
          } else {
            console.log(albums);

            reply(null, {
              response: albums
            });
          }
        }
      });
    } catch (err) {
      reply(err);
    }
  })
  this.add("role:Soporte, cmd:save", async (msg, reply) => {
    try {

      let container;
      Data.find({
        "Db": msg.payload.Db,
        "Atto": msg.payload.Atto
      }, async (err, payload) => {
        if (err) {
          reply(null, {
            message: 'Error en la peticion'
          });
        } else {
          if (!payload) {
            return payload
          } else {
            if(payload.length > 0){
              container = {};
        container.Db = msg.payload.Db;
        container.Data = msg.payload.Data;
        container.Atto = msg.payload.Atto;
        await Data.update({
          "Db": msg.payload.Db,
          "Atto": msg.payload.Atto
        }, container, (err, updates) => {
          if (err) {
            reply(err, 'no hay data');
          } else {
           return reply(null, {
              update: updates
            });
          }
        });
            }else{

        container = new Data();
        container.Db = msg.payload.Db;
        container.Data = msg.payload.Data;
        container.Atto = msg.payload.Atto;
        await container.save((err, save) => {
          if (err) {
            reply(err);
          } else {
            return reply(null, {
              response: save
            });

          }
        });
              console.log('entro aca')
            }
          }
        }
      });
    } catch (err) {
      reply(err);
    }
  })

  this.add("role:Soporte, cmd:fetchDb", async (msg, reply) => {
    try {

      let container ={};
      let data = msg.payload;
      if(data.Db){
        container.Db = data.Db
      }
      if(data.Atto){
        container.Atto = data.Atto
      }

      Data.find(container, async (err, payload) => {
        if (err) {
          reply(null, {
            message: 'Error en la peticion'
          });
        } else {
          if (!payload) {
            console.log('vacio papa')
            return payload
          } else {
            //console.log(payload);
            if(payload.length > 0){
              console.log('entro aca nene')
              console.log(payload)
              reply(null, payload)
            }else{
              console.log('entro aca')
              reply(null,null)
            }
          }
        }
      });
    } catch (err) {
      reply(err);
    }
  })
}