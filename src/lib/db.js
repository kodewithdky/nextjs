import mongoose from "mongoose";
import { Color } from "colors";

const { USER_NAME, PASSWORD } = process.env;

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER_NAME}:${PASSWORD}@mycluster.tuhi9ac.mongodb.net/nextjs`
    );
    console.log("Database Connected successfully".bgWhite.green);
  } catch (error) {
    console.warn(error);
    console.log("Error while connecting database".bgWhite.red);
  }
};
