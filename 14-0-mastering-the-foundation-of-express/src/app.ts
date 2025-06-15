import express, { Application, Request, Response } from "express";
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

export default app;
