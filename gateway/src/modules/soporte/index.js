
//URGENTS
const {fetchAllOptions, saveOptions} =require('./Options');
const {upload, save} = require('./Controller');
module.exports.Init = function(server, ...params){
    console.log(`the module Support is loaded`);

    server.route({
        options: fetchAllOptions,
        path: "/api/support", 
        method: "GET", 
        handler:  upload
        
    });
    server.route({
        options: saveOptions,
        path: "/api/support", 
        method: "POST", 
        handler:  save
        
    });




}