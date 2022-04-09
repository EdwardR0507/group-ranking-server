const Group = require("./group");

class GroupList {
  constructor() {
    this.groups = [
      new Group("Dreamcatcher"),
      new Group("Aespa"),
      new Group("NMIXX"),
      new Group("IVE"),
    ];
  }

  addGroup(name) {
    const newGroup = new Group(name);
    this.groups.push(newGroup);
    return this.groups;
  }

  removeGroup(id) {
    this.groups = this.groups.filter((group) => group.id !== id);
  }

  getGroups() {
    return this.groups;
  }

  incrementVotes(id) {
    const group = this.groups.find((group) => group.id === id);
    group.votes++;
    return group;
  }

  updateName(id, name) {
    const group = this.groups.find((group) => group.id === id);
    group.name = name;
    return group;
  }
}
module.exports = GroupList;
