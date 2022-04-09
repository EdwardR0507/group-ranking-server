const GroupList = require("./group-list");
class Sockets {
  constructor(io) {
    this.io = io;
    this.groupList = new GroupList();
    this.socketEvents();
  }
  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("New client connected");
      // Emit all groups to client
      socket.emit("current-groups", this.groupList.getGroups());
    });
  }
}
module.exports = Sockets;
