const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (request, response) => {
  response.send(
    `<h1>Welcome to ${process.env.APP_NAME}! 🥳🎊</h1>
    <p>This app was built by <b>${process.env.APP_AUTHOR}</b> just for you.</p>`
  );
});

const server = app.listen(3000, () => {
  console.log("Started my first node server....");
  console.log("App Name: ", process.env.APP_NAME);
  console.log("App Author: ", process.env.APP_AUTHOR);
});
