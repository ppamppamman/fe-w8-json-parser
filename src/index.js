const tokenize = require('./util/tokenizer.js');
const lexicalize = require('./util/lexer.js');
const generate = require('./util/treeGenerator.js');

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



const parsing = (me) => {

  if (me.type === "Separator" && me.data === "[") {}

  if (me.constructor.name === "Branch") {
    me.getLeafNodes().forEach((node) => {
      parsing(node)
    })
  } else {
    console.log(me);
    return me;
  }
}
parsing(lexicalizedTree.getRoot());
