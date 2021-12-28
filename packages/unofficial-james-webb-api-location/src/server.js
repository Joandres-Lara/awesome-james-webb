const http = require("http");
const calculatePosition = require("./calculate-position");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  
  res.end(JSON.stringify(calculatePosition()));
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
