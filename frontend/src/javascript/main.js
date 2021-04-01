const tokenizer = require("../util/tokenizer.js");

const jsonInput = document.querySelector(".jsonData__input");
const parseButton = document.querySelector(".jsonData__button");
const output = document.querySelector(".parsedData_output");

parseButton.addEventListener("click", () => {
  output.innerHTML = jsonInput.value;
});
