const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((request, response) => {
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port);
