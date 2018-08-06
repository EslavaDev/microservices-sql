
const Joi = require('joi');


 const findByIdOption= {
  
    auth: false,
    cors: true,
    notes: ` se debe enviar en el body la 'Db' y/o 'Atto, este metodo retorna un objeto o varios objetos que contengan dicho id's \n
    ejemplo:{
              "Db": "bdSHealth",
              "Atto": "71247"
            }
    `,
    description: "Use this method to find a movie by id",
    validate:{
        payload:Joi.object().keys({
            Db: Joi.string().max(30).optional()
            .description("name of the databases of the eps")
            .label('Db'),
            Atto: Joi.string().trim().max(40).optional()
            .description("id of the care treatment").label('Atto')
        }).label('payload')
    },
    plugins:{
        'hapi-swagger':{
            payloadType: 'form',
    }
},
    tags:["api","support"]

}

 const fetchAllOptions={
  
    auth: false,
    cors:true,
    notes: ` este metodo trae todos lo datos guardados en un array de json \n
    ejemplo: {
        response:[
            {
                "_id": "5b61e1455955453371a231fd",
                "Db": "bdSHealth",
                "Data": "data data data data",
                "Atto": "71247",
                "__v": 0
            }
        ]
    }
    `,
    description: "Use this method to get list of support",
    tags:["api","support"]

}

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
            Db: Joi.string().max(30).required()
            .description("name of the databases of eps")
            .label("Db"),
            Data: Joi.any().required()
            .description('data of the nodes of java server')
            .label('Data'),
            /*test:Joi.any()
            .meta({ swaggerType: 'file' })
            .description('json file'),*/
            Atto: Joi.string().trim().max(40).required()
            .description("A la Verga no se que es")
            .label("Atto")
        }).label("payload")
    },
    plugins:{
        'hapi-swagger':{
            payloadType: 'form',
    }
    },
    tags:["api","support"]

}

module.exports = {
    findByIdOption,
    fetchAllOptions,
    saveOptions 
}