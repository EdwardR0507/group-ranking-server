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
      // Recieve votes
      socket.on("vote", (id) => {
        this.groupList.incrementVotes(id);
        this.io.emit("current-groups", this.groupList.getGroups());
      });
      // Add group
      socket.on("add-group", (name) => {
        this.groupList.addGroup(name);
        this.io.emit("current-groups", this.groupList.getGroups());
      });
      // Remove group
      socket.on("remove", (id) => {
        this.groupList.removeGroup(id);
        this.io.emit("current-groups", this.groupList.getGroups());
      });
      // Update name
      socket.on("update-name", ({ id, name }) => {
        this.groupList.updateName(id, name);
        this.io.emit("current-groups", this.groupList.getGroups());
      });
    });
  }
}
module.exports = Sockets;
