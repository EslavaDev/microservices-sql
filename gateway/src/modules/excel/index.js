
//URGENTS
const {saveOptions, getDataOptions } = require('./Options')
const {upload, getData} = require('./Controller');
module.exports.Init = function(server, ...params){
    console.log(`the module excel is loaded`);

    server.route({
        config: saveOptions,
        path: "/api/excel/upload",
        
        method: "POST", 
        handler:  upload
        
    });

    server.route({
        options: getDataOptions,
        path: "/api/excel/get", 
        method: "POST", 
        handler:  getData
        
    });




}