
//URGENTS

const {upload} = require('./Controller');
module.exports.Init = function(server, ...params){
    console.log(`the module reporting is loaded`);

    server.route({
        path: "/api/reporting", 
        method: "POST", 
        handler:  upload
        
    });




}