function isSeparator(char) {
  return ["[", "]", ",", "{", "}", ":"].includes(char);
}

function isQuote(char) {
  return ["'", '"'].includes(char);
}

function tokenize(splitData) {
  let stack = [];
  let tokenStack = [];
  let quoteStack = [];

  for (const char of splitData) {
    if (isQuote(char)) {
      //""안에 []가 들어있을때도 분석할수있으니, 따로 구분하기/?어떻게하지...ㅠㅠ
      quoteStack.length === 0 ? quoteStack.push(char) : quoteStack.pop();
    }

    if (isSeparator(char) && quoteStack.length !== 1) {
      let token = stack.join("").trim(); //특수문자가 아닐 때 누적해둔 letter들
      stack = [];
      if (token !== "") tokenStack.push(token); //초반에 token에 넣을때는 공백이 들어가기에, 공백인지 아닌지 보고 넣기
      tokenStack.push(char);
      continue;
    }
    stack.push(char);
  }
  return tokenStack;
}

const data1 = `["la3", [null, false, ["11", [112233], { easy: ["hello", { a: "a" }, "world"] }, 112], 55, "99"], 
  { a: "str", b: [912, [5656, 33], { key: "innervalue", newkeys: [1, 2, 3, 4, 5] }] }, true]`;
const splitData = data1.replace(/(\r\n\t|\n|\r\t)|\s/g, "");

const tokenArray = tokenize(splitData);

module.exports = tokenArray;