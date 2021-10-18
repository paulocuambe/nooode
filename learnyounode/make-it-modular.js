const filteredLs = require("./mymodule.js");

const directory = process.argv[2];
const fileExt = process.argv[3];

filteredLs(directory, fileExt, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
