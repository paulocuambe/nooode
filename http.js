const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.write("<h1>Hello fellas</h1>");
  setTimeout(() => {
    res.end("<p>Finish</p>");
  }, 10000);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
