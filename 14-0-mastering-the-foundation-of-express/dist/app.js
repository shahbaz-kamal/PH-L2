"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const todosRouter = express_1.default.Router();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../db/todo.json");
console.log(filePath);
app.use("/todos", todosRouter);
todosRouter.get("/alltodos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.query);
    // res.json(data);
    res.send("todos router");
});
app.get("/", (req, res) => {
    res.send("To do app is running asdfadfg");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.query);
    // res.json(data);
    res.send("query recieved");
});
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
});
exports.default = app;
