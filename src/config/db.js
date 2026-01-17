import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://nikitasen664_db_user:W0bk7qjkmfjVVDG3@cluster0.eq9obrj.mongodb.net/Team-management?appName=Cluster0";

const dbConnection = async () => {
  try {
    const con = await mongoose.connect(MONGO_URI);
    console.log("Db Connected Successfully");
  } catch (error) {
    console.log("Error in connecting the database", error);
  }
};

export default dbConnection;
