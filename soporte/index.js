const seneca = require("seneca")();

seneca.use(require('./src/actions'));

//correr por socket
let mongoose = require('mongoose');

mongoose.connect('mongodb://31.220.55.37:27017/sql', (err, res) =>{
	if(err){
		throw err;
	}else{
		console.log("Base de datos Conectada Correctamente");
        seneca.listen({port: 10002, type: "tcp", pin:"role:Soporte"});
	}
});

