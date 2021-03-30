const { tokenize, isSeparator } = require("./tokenizer");

const data1 = `["la3", [null, false, ["11", [112233], { easy: ["hello", { a: "a" }, "world"] }, 112], 55, "99"], 
  { a: "str", b: [912, [5656, 33], { key: "innervalue", newkeys: [1, 2, 3, 4, 5] }] }, true]`;

const splitData = data1.replace(/(\r\n\t|\n|\r\t)|\s/g, "");

const isString = (token) => `${token[0]}${token[token.length - 1]}` === '""';
const isNumber = (token) => isNaN(Number(token)) === false;
const isPrimitive = (token) =>
  ["null", "undefined", "true", "false"].includes(token);

const classifyPrimitive = (string) => {
  let obj;
  switch (string) {
    case "null":
      obj = { type: "null", value: null };
      break;
    case "undefined":
      obj = { type: "undefined", value: undefined };
      break;
    case "true":
      obj = { type: "true", value: true };
      break;
    case "false":
      obj = { type: "false", value: false };
      break;
  }
  return obj;
};

const classifyToken = (token) => {
  if (isString(token)) {
    return { type: "String", value: token };
  } else if (isSeparator(token)) {
    return { type: "Separator", value: token };
  } else if (isNumber(token)) {
    return { type: "Number", value: token };
  } else if (isPrimitive(token)) {
    return classifyPrimitive(token);
  } else {
    return { type: "Object Key", value: token };
  }
};

const lexer = (tokenArray) => {
  let lexerArray = [];
  tokenArray.forEach((token) => lexerArray.push(classifyToken(token)));
  return lexerArray;
};

console.log(lexer(tokenize(splitData)));
