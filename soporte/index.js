const seneca = require("seneca")();

seneca.use(require('./src/actions'));

//correr por socket
let mongoose = require('mongoose');

try{
	mongoose.connect('mongodb://localhost:27017/sql', async (err, res) =>{
		if(err){
			throw err;
		}else{
			console.log("Base de datos Conectada Correctamente");
			await seneca.listen({port: 4100, type: "tcp", pin:"role:Soporte"});
		}
	});

}catch(err){
	console.error(err);
}

