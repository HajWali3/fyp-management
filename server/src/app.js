import express from "express";
const app = express();

//impoting routes
import userRouter from "./routes/user.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
