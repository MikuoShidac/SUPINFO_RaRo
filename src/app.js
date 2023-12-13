import express from "express";
import UserRouter from "./routers/UserRouter.js";
import TrainRouter from "./routers/TrainRouter.js";
import TicketRouter from "./routers/TicketRouter.js";
import StationRouter from "./routers/StationRouter.js";

const app = express();

app.use(express.json());

/*app.use("/station", StationRouter);
app.use("/train", TrainRouter);*/
app.use("/user", UserRouter);

export default app;