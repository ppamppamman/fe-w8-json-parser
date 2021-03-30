const tokenArray = require('./tokenizer.js');

const isSeparator = (char) => {
  return ["[", "]", ",", "{", "}", ":"].includes(char);
}

const isString = (token) => {
  return `${token[0]}${token[token.length - 1]}` === '""';
}

const isNumber = (token) => { 
  return isNaN(Number(token)) === false;
}

const isPrimitive = (token) => {
  return ["null", "undefined", "true", "false"].includes(token);
}
  
const classifyPrimitive = (string) => {
  switch (string) {
    case "null":
      return { type: "null", value: null };
    case "undefined":
      return { type: "undefined", value: undefined };
    case "true":
      return { type: "boolean", value: true };
    case "false":
      return { type: "boolean", value: false };
  }
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
  const lexerArray = tokenArray.map((token) => {
    return classifyToken(token);
  });
  
  return lexerArray;
};

const lexerizedTokenArray = lexer(tokenArray);

module.exports = lexerizedTokenArray;