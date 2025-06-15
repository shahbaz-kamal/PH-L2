import fs from "fs";
import express, { Request, Response } from "express";
import path from "path";

export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");
console.log(filePath);

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(req.query);
  // res.json(data);
  res.send({ Message: "todos router", data });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send({ message: "todo created", title, body });
});

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send({ message: "todo created", title, body });
});

todosRouter.put("/updated-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send({ message: "todo created", title, body });
});
todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send({ message: "todo created", title, body });
});
