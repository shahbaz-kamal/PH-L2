"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
exports.todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
console.log(filePath);
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.query);
    // res.json(data);
    res.send({ Message: "todos router", data });
});
exports.todosRouter.post("/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send({ message: "todo created", title, body });
});
exports.todosRouter.get("/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send({ message: "todo created", title, body });
});
exports.todosRouter.put("/updated-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send({ message: "todo created", title, body });
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send({ message: "todo created", title, body });
});
