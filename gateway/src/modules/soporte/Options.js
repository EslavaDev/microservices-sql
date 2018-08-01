
const Joi = require('joi');


 const findByIdOption= {
  
    auth: "jwt",
    cors: true,
    description: "Use this method to find a movie by id",
    validate:{
        params:{
            id: Joi.number().integer().description("this is the id of the movie").required()
        }
    },
    tags:["api","films"]

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
    validate:{
        payload:Joi.object().keys({
            Db: Joi.string().max(30).required()
            .description("name of the databases of eps")
            .label("Db"),
            Data: Joi.string().required()
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
    fetchAllOptions,
    saveOptions 
}