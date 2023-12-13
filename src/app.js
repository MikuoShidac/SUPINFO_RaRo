import express from "express";



const app = express();

app.use(express.json());

app.use("/station", exercisesRouter);
app.use("/train", exercisesRouter);
app.use("/user", usersRouter);

export default app;