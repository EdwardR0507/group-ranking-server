const { v4: uuidv4 } = require("uuid");

class Group {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.votes = 0;
  }
}
module.exports = Group;
