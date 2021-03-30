const tokenize = require('./util/tokenizer.js');
const lexicalize = require('./util/lexer.js');
const generate = require('./util/treeGenerator.js');

const data1 = `["la3", [null, false, ["11", [112233], { easy: ["hello", { a: "a" }, "world"] }, 112], 55, "99"], 
  { a: "str", b: [912, [5656, 33], { key: "innervalue", newkeys: [1, 2, 3, 4, 5] }] }, true]`;
const splitData = data1.replace(/(\r\n\t|\n|\r\t)|\s/g, "");

const tokenArray = tokenize(splitData);
const lexicalizedTokens = lexicalize(tokenArray);

const tokens = [
  '{',       '"easy"',  ':',
  '[',       '"hello"', ',',
  '{',       '"a"',     ':',
  '"a"',     '}',       ',',
  '"world"', ']',       ',',
  '"hard"',  ':',       '"hi"',
  '}'
]

const parsedTree = generate(tokens);

console.log(lexicalizedTokens)

