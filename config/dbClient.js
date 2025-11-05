import 'dotenv/config';
// import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
class dbClient {
  constructor() {
    this.connect();
  }
  async connect() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/register?retryWrites=true&w=majority`;

    try {
      await mongoose.connect(queryString);
      console.log('Server CONNECTED to the database');
    } catch (e) {
      console.error('ERROR connecting to the database: ', e);
    }
  }

  async closeConnection() {
    try {
      await mongoose.disconnect();
      console.log('Connection to the CLOSED database');
    } catch (e) {
      console.error('ERROR closing the connection: ', e);
    }
  }
}

export default new dbClient();
