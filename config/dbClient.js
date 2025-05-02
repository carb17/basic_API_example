import "dotenv/config";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
class dbClient {
  constructor() {
    this.connect();
  }
  async connect() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/Registro?retryWrites=true&w=majority`;
    // this.client = new MongoClient(queryString);
    try {
      await mongoose.connect(queryString);
      console.log("Servidor conectado a la base de datos");
    } catch (e) {
      console.error("Error al conectar con la base de datos: ", e);
    }

    // this.conectarDB();
  }

  // async conectarDB() {
  //   try {
  //     await this.client.connect();
  //     this.db = this.client.db("Registro");
  //     console.log("Conectado al servidor de la base de datos.");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async closeConnection() {
    try {
      await mongoose.disconnect();
      // await this.client.close();
      console.log("Conexión a la base de datos cerrada");
    } catch (e) {
      console.error("Error al cerrar la conexión: ", e);
    }
  }
}

export default new dbClient();
