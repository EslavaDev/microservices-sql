
const Joi = require('joi');

const saveOptions={
  
    auth: false,
    cors:true,
    description: "Use this method to save and update of support",
    notes: ` este metodo guarda los datos en la base de datos en formato json, si existe algun
            dato con el mismo id de Db y Atto se actualiza su campo \n
    ejemplo: {
                "Db": "bdSHealth",
                "Data": "data data data data",
                "Atto": "71247",
    }
    `,
    validate:{
        payload:Joi.object().keys({
            db: Joi.string().max(30).required()
            .description("name of the databases of eps")
            .label("db"),
            file:Joi.any()
            .meta({ swaggerType: 'file' })
            .description('json file').label("file"),
        }).label("payload")
    },
    plugins:{
        'hapi-swagger':{
            payloadType: 'form',
    },
},
    payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
    },
    
    tags:["api","excel"]
}
const getDataOptions={
  
    auth: false,
    cors:true,
    description: "Use this method to save and update of support",
    notes: ` este metodo guarda los datos en la base de datos en formato json, si existe algun
            dato con el mismo id de Db y Atto se actualiza su campo \n
    ejemplo: {
                "Db": "bdSHealth",
                "Data": "data data data data",
                "Atto": "71247",
    }
    `,
    validate:{
        payload:Joi.object().keys({
            db: Joi.string().max(30).required()
            .description("name of the databases of eps")
            .label("db"),
            data: Joi.string().max(30).required()
            .description("name of the databases of eps")
            .label("data"),
        }).label("payload")
    },
    plugins:{
        'hapi-swagger':{
            payloadType: 'form',
    }
    },
    tags:["api","excel"]
}

module.exports = {
    saveOptions,
    getDataOptions
}
