const util = require('util');

const ParseTree = require('./ParseTree.js');
const Branch = require('./Branch.js');
const Node = require('./Node.js');

const tree = new ParseTree();

const tokens = [
  '{',       '"easy"',  ':',
  '[',       '"hello"', ',',
  '{',       '"a"',     ':',
  '"a"',     '}',       ',',
  '"world"', ']',       ',',
  '"hard"',  ':',       '"hi"',
  '}'
]

tokens.forEach((each) => {
  // console.log(each)
  if (each === "{" || each === "[" ) {
    // child 추가
    const branch = new Branch();
    const node = new Node(each);
    branch.setLeafNode(node);
    
    tree.current.setLeafNode(branch);
    // tree.current.childBranches.push(branch)
    const parentBranch = tree.current;
    tree.current = branch;
    tree.current.setParentBranch(parentBranch);

  } else if (each === "}" || each === "]") {
    const node = new Node(each);
    tree.current.setLeafNode(node);
    tree.current = tree.current.getParentBranch();
  } else {
    const node = new Node(each);
    tree.current.setLeafNode(node);
  }
  
})
// console.log(tree)
// console.log(util.inspect(tree, true, null, true /* enable colors */))

// console.log(tree)

// console.log(tree.root.leafNodes);
tree.root.leafNodes.forEach(each => {
  console.log(each.leafNodes)
})



/*

  '{',       '"easy"',  ':',
  '[',       '"hello"', ',',
  '{',       '"a"',     ':',
  '"a"',     '}',       ',',
  '"world"', ']',       ',',
  '"hard"',  ':',       '"hi"',
  '}'


*/