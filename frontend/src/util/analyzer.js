import tokenize from "./tokenizer/tokenizer.js";
import lexicalize from "./lexer/lexer.js";
import generate from "./parseTreeGenerator/generator.js";
import parsing from "./parser/parser.js";

const analyze = (data) => {
  const splitData = data.replace(/(\r\n\t|\n|\r\t)|\s/g, "");
  const tokenArray = tokenize(splitData);
  const lexicalizedTokens = lexicalize(tokenArray);
  const lexicalizedTree = generate(lexicalizedTokens);

  const rootBranch = lexicalizedTree.getRoot().getLeafNodes()[0];
  const parsedResult = parsing(rootBranch.getLeafNodes());

  return JSON.stringify(parsedResult, null, "\t");
};

export default analyze;
