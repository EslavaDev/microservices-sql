//const Controllers = require('./controllers');
//const {EventEmitter} =require('events')
let Data = require('../models/Data');
//const Engine = Engine.listen(4000);
module.exports = function Controller(options) {
  //let urgentesControllers = new Controllers();
  //let emiter = new EventEmitter()
  this.add("role:Soporte, cmd:fetchAll", async (msg, reply) => {
    try {
      //emiter.on('newData', val => {

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



      //})

      //let urgentes = await urgentesControllers.fetchAll();
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
      }, async (err, albums) => {
        if (err) {
          reply(null, {
            message: 'Error en la peticion'
          });
        } else {
          if (!albums) {
            console.log('vacio papa')
            return albums
          } else {
            console.log(albums);
            if(albums.length > 0){
              console.log('entro aca nene')
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
            console.log(updates)
           return reply(null, {
              update: updates
            });
          }
        });
            }else{

              //console.log(albums[0].Db)

        container = new Data();
        //console.log('micro', msg.payload);
        container.Db = msg.payload.Db;
        container.Data = msg.payload.Data;
        container.Atto = msg.payload.Atto;
        await container.save((err, albumRemove) => {
          if (err) {
            reply(err);
          } else {
            //emiter.emit('newData','ok')
            //console.log(albumRemove)
            return reply(null, {
              response: albumRemove
            });

          }
        });
              console.log('entro aca')
            }
          }
        }
      });
      //console.log(data)
      
      /*if (data.length > 0) {
        
      } else {

      }*/
    } catch (err) {
      //console.log("entro al error")
      reply(err);
    }
  })
}