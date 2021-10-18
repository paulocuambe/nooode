const http = require("http");
const URL = require("url").URL;
const port = process.argv[2];

const server = http.createServer((req, res) => {
  let myUrl = new URL(req.headers.host + req.url);

  if (myUrl.searchParams.get("iso")) {
    let date = new Date(myUrl.searchParams.get("iso"));
    let result = {};

    if (myUrl.pathname === port + "/api/parsetime") {
      result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
    } else if (myUrl.pathname === port + "/api/unixtime") {
      result = {
        unixtime: date.getTime(),
      };
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result));
  } else {
    res.end("You must include the ISO param");
  }
});

server.listen(port);
