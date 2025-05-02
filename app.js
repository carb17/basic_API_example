import "dotenv/config";
import express from "express";
import routesUsers from "./routes/users.js";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocumentation from "./swagger.json" assert { type: "json" };

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", routesUsers);
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Servidor activo en el puerto: " + PORT));
} catch (e) {
  console.log(e);
}

process.on("SIGINT", async () => {
  dbClient.closeConnection();
  process.exit(0);
});
