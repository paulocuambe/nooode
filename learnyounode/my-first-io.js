const fs = require("fs");
const filePath = process.argv[2];

const data = fs.readFileSync(filePath);

console.log(data.toString().split("\n").length - 1);
