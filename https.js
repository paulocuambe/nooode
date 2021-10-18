const https = require("https");

const get = https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  console.log(res.statusCode);
  res.on("data", (data) => {
    // process.stdout.write(data);
    console.log(data.toString());
  });
});
