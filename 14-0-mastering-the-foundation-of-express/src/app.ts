import express, { Application, NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./app/todos/todos.routes";
import { logger } from "./app/utils/logger";

const app: Application = express();

app.use(express.json());
app.use(logger);

const filePath = path.join(__dirname, "../db/todo.json");
console.log(filePath);

app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("To do app is running asdfadfg");
});

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("hello");
    res.send("welcome to error er duniya");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).send({ message: "Route not found" });
}); // Handle 404 errors

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("eroor", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default app;
