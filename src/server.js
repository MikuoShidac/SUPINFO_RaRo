import "./mongo.js";
import app from "./app.js";
import cors from "cors"

const port = 8000;

app.use(cors());
app.listen(port, () => {
  console.log(`Your train app is listening at http://localhost:${port}`);
});