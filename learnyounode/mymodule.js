const fs = require("fs");
const path = require("path");

module.exports = function (directory, fileExt, callback) {
  fileExt = "." + fileExt;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    const validFiles = [];

    files.forEach((file) => {
      if (path.extname(file) === fileExt) {
        validFiles.push(file);
      }
    });
    
    callback(null, validFiles);
  });
};
