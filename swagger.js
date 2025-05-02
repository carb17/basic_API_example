import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger.json";
const endPointsFiles = ["./app.js"];

const doc = {
  info: {
    title: "API de usuarios",
    description: "Esta API permite gestionar usuarios",
  },
  host: "localhost:5100",
  schemes: ["http"],
};

swaggerAutogen()(outputFile, endPointsFiles, doc);
