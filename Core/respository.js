class Repository {
  constructor() {
    this.commits = [];
    this.currentBranch = 'main';
    this.workingDirectory = {};
    this.stagingArea = [];
  }

  createBranch(branchName) {
    console.log(`Created branch: ${branchName}`);
  }

  commit(author, message) {
    const commit = {
      branch: this.currentBranch,
      author: author,
      message: message,
      changes: { ...this.stagingArea },
      timestamp: new Date()
    };

    this.commits.push(commit);
    this.stagingArea = {};
    console.log(`Committed changes to ${this.currentBranch}`);
  }

  switchBranch(branchName) {
    this.currentBranch = branchName;
    console.log(`Switched to branch: ${branchName}`);
  }

  stage(changes) {
    this.stagingArea = { ...this.stagingArea, ...changes };
    console.log('Staged changes:', changes);
  }

  log() {
    console.log('Commit History:');
    this.commits.forEach((commit, index) => {
      console.log(`${index + 1}. Branch: ${commit.branch}, Author: ${commit.author}, Timestamp: ${commit.timestamp}, Message: ${commit.message}`);
    });
  }

  status() {
    console.log('Status:');
    console.log(`Current Branch: ${this.currentBranch}`);
    console.log('Staging Area:', this.stagingArea);
    console.log('Working Directory:', this.workingDirectory);
  }
}

// Example Usage:
const myRepository = new Repository();
myRepository.createBranch('feature-branch');
myRepository.stage({ file1: 'modified', file2: 'added' });
myRepository.commit('John Doe', 'Implement new feature');
myRepository.switchBranch('main');
myRepository.stage({ file3: 'modified' });
myRepository.commit('Jane Smith', 'Fix bug');
myRepository.log();
myRepository.status();
