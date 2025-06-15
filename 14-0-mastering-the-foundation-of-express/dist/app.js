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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./app/todos/todos.routes");
const logger_1 = require("./app/utils/logger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logger_1.logger);
const filePath = path_1.default.join(__dirname, "../db/todo.json");
console.log(filePath);
app.use("/todos", todos_routes_1.todosRouter);
app.get("/", (req, res) => {
    res.send("To do app is running asdfadfg");
});
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hello");
        res.send("welcome to error er duniya");
    }
    catch (error) {
        next(error);
    }
}));
app.use((req, res) => {
    res.status(404).send({ message: "Route not found" });
}); // Handle 404 errors
app.use((error, req, res, next) => {
    if (error) {
        console.log("eroor", error);
        res
            .status(500)
            .json({ message: "Internal server error", error: error.message });
    }
});
exports.default = app;
