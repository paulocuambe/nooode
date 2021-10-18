const http = require("http");

const urls = {
  url1: process.argv[2],
  url2: process.argv[3],
  url3: process.argv[4],
};

let order = 1;
function makeRequest(url) {
  http.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk.toString();
    });

    res.on("end", () => {
      console.log(data);
      order++;
      if (urls[`url${order}`]) {
        makeRequest(urls[`url${order}`]);
      }
    });
  });
}

makeRequest(urls.url1);
