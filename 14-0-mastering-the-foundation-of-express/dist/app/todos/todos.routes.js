"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const clientDB_1 = require("../utils/clientDB");
exports.todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
console.log(filePath);
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.query);
    // res.json(data);
    res.send({ Message: "todos router", data });
});
exports.todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newTodo = {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        isCompleted: req.body.isCompleted,
        createdAt: new Date().toLocaleDateString(),
    };
    const result = yield clientDB_1.todoCollection.insertOne(req.body);
    res.send(result);
}));
exports.todosRouter.get("/:id", (req, res) => {
    const id = req.params.id;
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
