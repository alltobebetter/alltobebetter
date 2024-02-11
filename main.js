// main.js
const Repository = require('./repository');
const Branch = require('./branch');
const Commit = require('./commit');
const Status = require('./status');

// use
const myRepository = new Repository();
const featureBranch = new Branch(myRepository, 'feature-branch');
featureBranch.create();

const myCommit = new Commit(myRepository, 'John Doe', 'Implement new feature');
myCommit.stage({ file1: 'modified', file2: 'added' });
myCommit.commit();

const mainBranch = new Branch(myRepository, 'main');
mainBranch.switchBranch();

const anotherCommit = new Commit(myRepository, 'Jane Smith', 'Fix bug');
anotherCommit.stage({ file3: 'modified' });
anotherCommit.commit();

const myStatus = new Status(myRepository);
myStatus.display();
