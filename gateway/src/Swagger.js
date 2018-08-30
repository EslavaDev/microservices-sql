const pkg = require('../package.json');
let ip = {"ip":"10.75.58.6", externa:'190.85.249.87:8080', local: '192.168.0.115:8080'}
module.exports= {
    documentationPath: '/docs',
    basePath: '/api/',
    host:ip.local, 
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