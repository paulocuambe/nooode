const EventEmitter = require("events");
const emmitter = new EventEmitter();

emmitter.on("ping", (param) => {
  console.log(`Pong ${param} seconds`);
});

const INTERVAL_IN_MS = 2000;
let seconds = 0;

setInterval(() => {
  seconds += INTERVAL_IN_MS / 1000;
  emmitter.emit("ping", seconds);
}, INTERVAL_IN_MS);
