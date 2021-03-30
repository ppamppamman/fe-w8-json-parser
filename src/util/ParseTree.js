const Branch = require('./Branch');

class ParseTree {
  constructor(){
    this.root = new Branch();
    this.current = this.root;
  }
  setRoot(branch) {
    this.root = branch;
  }
}

module.exports = ParseTree;