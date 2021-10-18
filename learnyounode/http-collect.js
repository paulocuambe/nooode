const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk.toString();
  });

  res.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
});
