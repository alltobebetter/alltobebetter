// diff.js
class Diff {
  constructor(repository) {
    this.repository = repository;
  }

  showChanges(commitIndex) {
    const commit = this.repository.commits[commitIndex - 1];
    if (commit) {
      console.log(`Changes in commit ${commitIndex}:`);
      console.log(commit.changes);
    } else {
      console.log(`Commit ${commitIndex} not found.`);
    }
  }
}

module.exports = Diff;
