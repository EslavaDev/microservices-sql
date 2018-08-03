
//URGENTS
const {fetchAllOptions, saveOptions, findByIdOption} =require('./Options');
const {upload, fetchDb, save} = require('./Controller');
module.exports.Init = function(server, ...params){
    console.log(`the module Support is loaded`);

    server.route({
        options: fetchAllOptions,
        path: "/api/support", 
        method: "GET", 
        handler:  upload
        
    });

    server.route({
        options: findByIdOption,
        path: "/api/support/id", 
        method: "Post", 
        handler:  fetchDb
        
    });

    server.route({
        options: saveOptions,
        path: "/api/support", 
        method: "POST", 
        handler:  save
        
    });




}