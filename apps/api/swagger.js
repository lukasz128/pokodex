const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'External API',
    description: 'Description',
    externalDocs: {
      url: 'api.json',
    },
  },
  host: 'localhost:3333',
};

const outputFile = './openapiv3.json'; // This is the outfile
const routes = [
  './src/main.ts',
  './src/routes.ts',
  './src/app/domains/**/*.ts',
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
