const http = require("http");
const port = process.argv[2];
const inp = require("stream").Readable;

const server = http.createServer((request, response) => {
  if (request.method.toUpperCase() == "POST") {
    request.on("data", (chunk) => {
      response.write(chunk.toString().toUpperCase());
    });

    request.on("close", () => {
      response.end();
    });
  }
});

server.listen(port);
