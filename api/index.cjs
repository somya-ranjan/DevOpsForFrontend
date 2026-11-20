const http = require("http");

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(4500, () => {
  console.log("Server running on port 4500");
});
