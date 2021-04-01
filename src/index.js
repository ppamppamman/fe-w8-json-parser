const tokenize = require('./util/tokenizer/tokenizer.js');
const lexicalize = require('./util/lexer/lexer.js');
const generate = require('./util/parseTreeGenerator/generator.js');
const parsing = require('./util/parser/parser.js');
const util = require('util');

const data = `
[
  "la3"
  ,
   [null, false, ["11", [112233], { easy: ["hello", { a: "a" }, "world"] }, 112], 55, "99"]
   , 
  { a: "str", b: [912, [5656, 33], { key: "innervalue", newkeys: [1, 2, 3, 4, 5] }] }
  ,
  true  
]
`;

const splitData = data.replace(/(\r\n\t|\n|\r\t)|\s/g, "");
const tokenArray = tokenize(splitData);
const lexicalizedTokens = lexicalize(tokenArray);
const lexicalizedTree = generate(lexicalizedTokens);
// util.inspect(console.log(lexicalizedTree))
// console.log(util.inspect(lexicalizedTree, {showHidden: false, depth: 4}))


const rootBranch = lexicalizedTree.getRoot().getLeafNodes()[0];
const parsedResult = parsing(rootBranch.getLeafNodes())

console.log(JSON.stringify(parsedResult, null, "\t"));