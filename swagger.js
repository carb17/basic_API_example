import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./app.js'];

const doc = {
  info: {
    title: 'User API',
    description: 'This API allows you to manage users',
  },
  host: '"localhost:3000"',
  schemes: ['http'],
};

swaggerAutogen()(outputFile, endPointsFiles, doc);
