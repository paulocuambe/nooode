process.argv.slice(2).forEach((val, index) => {
  if (val.startsWith("file=")) {
    const fileName = val.split("=")[1];
    if (fileName) {
      console.log(`Created a new file named ${fileName}`);
    } else {
      console.error("Invalid filename");
    }
  }
  console.log(`Value at ${index}: ${val}`);
});
