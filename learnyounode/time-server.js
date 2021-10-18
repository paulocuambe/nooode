const net = require("net");
const port = process.argv[2];

const server = net.createServer((socket) => {
  socket.end(formatedDate(new Date()) + "\n");
});

server.listen(port);

function formatedDate(date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1 + "").padStart(2, 0)}-${(date.getDate() + "").padStart(2, 0)} ${(
    date.getHours() + ""
  ).padStart(2, 0)}:${(date.getMinutes() + "").padStart(2, 0)}`;
}
