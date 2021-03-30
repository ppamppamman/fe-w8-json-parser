const data = `{ 
  "key1": 1,
  "key2": [1, 2]
}`;

const data1 = `["la3", [null, false, ["11", [112233], { easy: ["hello", { a: "a" }, "world"] }, 112], 55, "99"], 
{ a: "str", b: [912, [5656, 33], { key: "innervalue", newkeys: [1, 2, 3, 4, 5] }] }, true]`;
const data2 = `{"easy" : ["hello", {"a":"a"}, "world"], "hard":"hi"}`;
const testQuote = `[a,"b",[c],"d[a]"]`;

const splitData = data2.replace(/(\r\n\t|\n|\r\t)|\s/g, "");

function isSeparator(char) {
  return ["[", "]", ",", "{", "}", ":"].includes(char);
}

function isQuote(char) {
  return ["'", '"'].includes(char);
}

let stack = [];
let tempStack = [];
let quoteStack = [];

function tokenize(splitData) {
  for (const char of splitData) {
    if (isQuote(char)) {
      //""안에 []가 들어있을때도 분석할수있으니, 따로 구분하기/?어떻게하지...ㅠㅠ
      quoteStack.length === 0 ? quoteStack.push(char) : quoteStack.pop();
    }

    if (isSeparator(char) && quoteStack.length !== 1) {
      let token = stack.join("").trim(); //특수문자가 아닐 때 누적해둔 letter들
      stack = [];
      if (token !== "") tempStack.push(token); //초반에 token에 넣을때는 공백이 들어가기에, 공백인지 아닌지 보고 넣기
      tempStack.push(char);
      continue;
    }
    stack.push(char);
  }
  return tempStack;
}

console.log(tokenize(splitData));

// export default tokenize;