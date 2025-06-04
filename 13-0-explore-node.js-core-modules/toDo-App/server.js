const http = require("http");
const port = 5000;

const data = [
  { "title": "prisma", "body": "learning node", "createdAt": "5/18/2025,1:25:12 AM" },
  { "title": "typescript", "body": "learning node", "createdAt": "5/18/2025,1:25:02 AM" },
];

const server = http.createServer((req, res) => {
  //   console.log( req.url, req.method );
  //   res.end("Welcome to ToDo App");

  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(201, {
      "content-type": "text/html",
      email: "a@b.com",
    });
    // res.setHeader("contemt-type","text/plain")
    // res.setHeader("email","t@p.com")
    // res.statusCode=200
    res.end(`<h1>Hello World</h1>`);
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
