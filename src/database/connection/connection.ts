import dotenv from "dotenv";
import mongoose from "mongoose";

const result = dotenv.config();

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/store?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  try {
    const client = await mongoose.connect(databaseURL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
}


