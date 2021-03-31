const tokenize = require('./util/tokenizer.js');
const lexicalize = require('./util/lexer.js');
const generate = require('./util/treeGenerator.js');

const util = require('util')

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
// console.log(tokenArray)

const lexicalizedTokens = lexicalize(tokenArray);
// console.log(lexicalizedTokens)

const lexicalizedTree = generate(lexicalizedTokens);
// console.log(lexicalizedTree.getRoot().leafNodes[0].parentBranch)
// console.log(util.inspect(lexicalizedTree.getRoot().leafNodes, false, 3, true))

const parsing = (leafNodes) => {
  let target;
  let targetType = null;
  let objectKey = null;

  leafNodes.map((me) => {
    // let childFlag = true;
    if (me.constructor.name === "Node") {
      console.log(me)
      if (me.type === "Separator-array-object" && me.data === "[") {
        target = [] // array를 만든다.
        targetType = "Array"
        return;
      } else if (me.type === "Separator-array-object" && me.data === "{") { 
        target = {} // 오브젝트를 만든다.
        targetType = "Object";
        return;
      }

      // 어레이의 역할 /////
      if (targetType === "Array" ) {
        if (me.data === ",") { // Separator-child, 
        } 
        else if (me.type === "Separator-array-object" && me.data === "]") { // array 끝
        } 
        else { // 전부 통과 하면 프리미티브 타입일 것.
          target.push(me);
        } 
      } 
      else if (targetType === "Object") {
        if (me.type === "Object Key") {
          objectKey = me.data;
          target[objectKey] = null;
        } else if (me.type === "Separator-key-value") {

        } else if (me.type === "Separator-array-object" && me.data === "}") {
        
        } else if (me.data === ",") {

        }
        else {
          target[objectKey] = me.data;
        }
      } 
      
    }

    else if (me.constructor.name === "Branch") {
      console.log("브랜치 들어옴")
      // branch 가 array
      console.log("브랜치 일 때 타겟,", target)
      if (targetType === "Array" ) {
        target.push(
          parsing(me.leafNodes)
        );
      } else if (targetType === "Object") {
        target[objectKey] = parsing(me.leafNodes);
      }
      
    } 

  })

  
  console.log("=== TARGET === ", target)
  return target;
  // if (me.constructor.name === "Branch") {
  //   // 재귀로 들어갈 부분
  //   for (const node of me.getLeafNodes()) {
  //     parsing(node);
  //   }
  // } else {
  //   // 재귀로 안들어가는 일반 객체
  //   // console.log(me);
  //   return me;
  // }

}

const result = parsing(lexicalizedTree.getRoot().leafNodes[0].leafNodes);
console.log("==== 카카오 간 제이슨 ===")
// console.log(JSON.stringify(result));
console.log(JSON.stringify(result, null, "\t"));