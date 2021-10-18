const ProgressBar = require("progress");
const bar = new ProgressBar("[:bar :percent]", { total: 100 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 50);
