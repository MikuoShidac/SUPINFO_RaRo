import express from "express";
import UserRouter from "./routers/UserRouter.js";



const app = express();

app.use(express.json());

/*app.use("/station", StationRouter);
app.use("/train", TrainRouter);*/
app.use("/user", UserRouter);

export default app;