const util = require('util');

const ParseTree = require('./parseTree.js');
const Branch = require('./branch.js');
const Node = require('./node.js');

const generate = (tokens) => {
  const tree = new ParseTree();

  tokens.forEach((each) => {
    const node = new Node(each);
    
    if (each === "{" || each === "[" ) {
      const branch = new Branch();
      branch.setLeafNode(node);
      tree.current.setLeafNode(branch);
      
      const parentBranch = tree.current;
      tree.current = branch;
      tree.current.setParentBranch(parentBranch);
    } else if (each === "}" || each === "]") {
      tree.current.setLeafNode(node);
      tree.current = tree.current.getParentBranch();
    } else {
      tree.current.setLeafNode(node);
    }
  
  })

  return tree;
}


module.exports = generate ;