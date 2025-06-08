import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const todosRouter = express.Router();
app.use(express.json());

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("To do app is running asdfadfg");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(req.query);
  // res.json(data);
  res.send("query recieved");
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
});

export default app;
