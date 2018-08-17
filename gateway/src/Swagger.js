const pkg = require('../package.json');
module.exports= {
    documentationPath: '/',
    basePath: '/api/',
    host:'10.75.58.6:8080', 
    info: {
      title: 'Sql Api',
      description: 'microservices Sql API',
      version: pkg.version,
      contact: {
        name: 'Daniel Eslava',
        email: 'danieleslava52@gmail.com'
      }
    },
    securityDefinitions: {
      'jwt': {
        'type': 'apiKey',
        'name': 'Authorization',
        'in': 'header'
      }
    },
    grouping: 'tags',
    sortEndpoints: 'ordered'
  }