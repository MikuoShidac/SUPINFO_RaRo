import "./mongo.js";
import app from "./app.js";
//import cors from "cors"

const port = 3000;

//app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});