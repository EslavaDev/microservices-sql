const pkg = require('../package.json');
module.exports= {
    documentationPath: '/',
    basePath: '/api/',
    host:'190.85.249.87:10001', 
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