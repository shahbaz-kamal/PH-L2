const http = require("http");
const path = require("path");
const fs = require("fs");
const { url } = require("inspector");
const port = 5000;

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  // console.log( req.url, req.method );
  //   res.end("Welcome to ToDo App");
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  console.log(url.pathname);

  // console.log(`The requested urll is ${req.url}`)
  // console.log(`The HTTP URL IS ${req.headers.host}`)
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  if (pathname === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    // res.setHeader("contemt-type","text/plain")
    // res.setHeader("email","t@p.com")
    // res.statusCode=200
    res.end(data);
  }
  // createing todo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      console.log({ title, body });
      const createdAt = new Date().toLocaleString();
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      console.log(allTodos);
      const parsedTodos = JSON.parse(allTodos);
      parsedTodos.push({ title, body, createdAt });
      fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
    // const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
  } else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    console.log(title);
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);
    const todo = parsedData.find((todo) => todo.title === title);
    const stringifiedTodo = JSON.stringify(todo);
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(stringifiedTodo);
  } else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });

      const parsedTodos = JSON.parse(allTodos);
      const todoIndex = parsedTodos.findIndex((todo) => todo.title === title);
      parsedTodos[todoIndex].body = body;
      fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(
        JSON.stringify(
          { title, body, createdAt: parsedTodos[todoIndex].createdAt },
          null,
          2
        )
      );
    });
    // const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
  } else {
    res.end("Route NOT Found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("✅ Server is listening to port 5000");
  // console.log(filePath)
});

/**
 * /todos - GET -All todos
 * /todos/create-todo Post create to
 *
 *
 */
