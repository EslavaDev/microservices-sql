//const Controllers = require('./controllers');

let Data = require('../models/Data');
module.exports = function Controller(options){
  //let urgentesControllers = new Controllers();
  this.add("role:Soporte, cmd:fetchAll", async(msg,reply) =>{
    try{
      Data.find({Db: '12'}, (err, albums)=>{
        if(err){
          reply(null,{message: 'Error en la peticion'});
        }else{
          if(!albums){
            reply(null,{message: 'No hay Container!!'});
          }else{
            console.log(albums);
            reply(null,{response: albums});
          }
        }
      });
      //let urgentes = await urgentesControllers.fetchAll();
    }catch(err){
      reply(err);
    }
  })
  this.add("role:Soporte, cmd:save", async(msg,reply) =>{
    try{
      let container = new Data();
      console.log('micro', msg.payload);
      container.Db = msg.payload.Db;
      container.Data = msg.payload.Data;
      container.Atto = msg.payload.Atto;
      await container.save((err, albumRemove) =>{
        if(err){
          reply(err);
        }else{
            console.log(albumRemove)
            reply(null,{response:albumRemove});

        }
      }); 
    }catch(err){
      //console.log("entro al error")
      reply(err);
    }
  })
}