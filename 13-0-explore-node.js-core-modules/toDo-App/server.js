const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  //   console.log( req.url, req.method );
  //   res.end("Welcome to ToDo App");

  if (req.url === "/todos" && req.method === "GET") {
    res.end("ToDO got");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("ToDo created");
  } else {
    res.end("Route NOT Found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("✅ Server is listening to port 5000");
});

/**
 * /todos - GET -All todos
 * /todos/create-todo Post create to
 *
 *
 */
