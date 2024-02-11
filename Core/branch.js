// branch.js
class Branch {
  constructor(repository, name) {
    this.repository = repository;
    this.name = name;
  }

  switchBranch() {
    this.repository.switchBranch(this.name);
    console.log(`Switched to branch: ${this.name}`);
  }

  create() {
    console.log(`Created branch: ${this.name}`);
  }
}

module.exports = Branch;
