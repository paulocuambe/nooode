const fs = require("fs");
const path = require("path");

const directory = process.argv[2];
const fileExt = "." + process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === fileExt) {
      console.log(file);
    }
  });
});
