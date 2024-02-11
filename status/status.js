// status.js
class Status {
  constructor(repository) {
    this.repository = repository;
  }

  display() {
    console.log('Status:');
    console.log(`Current Branch: ${this.repository.currentBranch}`);
    console.log('Staging Area:', this.repository.stagingArea);
    console.log('Working Directory:', this.repository.workingDirectory);
  }
}

module.exports = Status;
