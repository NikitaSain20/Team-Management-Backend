import app from "./src/app.js";
import dbConnection from "./src/config/db.js";
const PORT = 8000;
dbConnection();
app.listen(PORT, () => {
  console.log(`Server Started Successfully at ${PORT}`);
});
