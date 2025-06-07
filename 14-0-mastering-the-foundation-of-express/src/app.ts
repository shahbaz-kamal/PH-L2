import express, { Application, Request, Response } from "express";

const app: Application = express();


app.get("/", (req: Request, res: Response) => {
  res.send("To do app is running");
});



export default app;
