import "dotenv/config";
import express from "express";
import cors from "cors";
import routesUsers from "./routes/users.js";
import routesClients from "./routes/clients.js";
import routesBrands from "./routes/brands.js";
import routesProducts from "./routes/products.js";
import bodyParser from "body-parser";
import dbClient from "./config/dbClient.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocumentation from "./swagger.json" assert { type: "json" };

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", routesUsers);
app.use("/clients", routesClients);
app.use("/brands", routesBrands);
app.use("/products", routesProducts);

app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.get("/", (req, res) => {
  res.send("La API está funcionando correctamente.");
});

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
