// commit.js
class Commit {
  constructor(repository, author, message) {
    this.repository = repository;
    this.author = author;
    this.message = message;
    this.changes = {};
    this.timestamp = new Date();
  }

  commit() {
    const commit = {
      branch: this.repository.currentBranch,
      author: this.author,
      message: this.message,
      changes: { ...this.changes },
      timestamp: this.timestamp
    };

    this.repository.commits.push(commit);
    this.changes = {};
    console.log(`Committed changes to ${this.repository.currentBranch}`);
  }

  stage(changes) {
    this.changes = { ...this.changes, ...changes };
    console.log('Staged changes:', changes);
  }
}

module.exports = Commit;
