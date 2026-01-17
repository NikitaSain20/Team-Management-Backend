import app from "./src/app.js";
import dbConnection from "./src/config/db.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 8000;
dbConnection();
app.listen(PORT, () => {
  console.log(`Server Started Successfully at ${PORT}`);
});
