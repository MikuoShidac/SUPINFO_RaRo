import express from "express";
import UserRouter from "./routers/UserRouter.js";
import TrainRouter from "./routers/TrainRouter.js";
//import TicketRouter from "./routers/TicketRouter.js";
//import StationRouter from "./routers/StationRouter.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./passport.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors({}));
app.use(passport.initialize());
app.use(passport.session());

app.use(async function logRequest(req, res, next) {
    next();
});

//app.use("/station", StationRouter);
app.use("/train", TrainRouter);
app.use("/user", UserRouter);

export default app;