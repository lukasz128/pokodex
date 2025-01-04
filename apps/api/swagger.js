const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'External API',
    description: 'Description',
    externalDocs: {
      url: 'api.json',
    },
  },
  // servers: [
  //   {
  //     url: 'http://localhost:3000/api/ai',
  //     description: 'Sample Project - Local',
  //   },
  //   {
  //     url: 'https://DEVserver.com/api/ai',
  //     description: 'Sample Project - DEV',
  //   },
  // ],
  // security: [
  //   {
  //     oauth2: [],
  //   },
  // ],
  // components: {
  //   securitySchemes: {
  //     oauth2: {
  //       type: 'oauth2',
  //       flows: {
  //         implicit: {
  //           authorizationUrl:
  //             'https://<AUTHSERVERURL>/protocol/openid-connect/auth',
  //           scopes: {
  //             roles: 'roles',
  //             read: 'read',
  //             write: 'write',
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};

const outputFile = './openapiv3.json'; // This is the outfile
const routes = [
  './src/main.ts',
  './src/routes.ts',
  './src/app/domains/auth/index.ts',
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
