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
app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("La API está funcionando correctamente 🚀");
=======
  res.send("La API está funcionando correctamente.");
>>>>>>> 26d8cd4ab530de85c5f03e27c98524df795d52a0
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
