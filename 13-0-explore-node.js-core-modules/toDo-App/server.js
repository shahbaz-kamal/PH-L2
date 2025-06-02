const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log({ req, res });
  res.end("Welcome to ToDo App");
});

server.listen(port, "127.0.0.1", () => {
  console.log("✅ Server is listening to port 5000");
});
