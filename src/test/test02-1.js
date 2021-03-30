const data = `{ 
  key1: [1],
  key2: [1, 2]
}`;

const isKeyValueSeparator = (char) => {
  if (char === ":") {
    return true;
  }
  return false;
}

const isChildSeparator = (char) => {
  if (char === ",") {
    return true;
  }
  return false;
}

const tokenMaker = () => {

}

const state = {
  key: [],
  value: [],
  token: [],
}

for (const char of data) {
  stack.push(char);
  if (char === "{") {
    childCheckable = true;
  }
  
  if (char === "}") {
    if (isKeyValueSeparator(char)) {

    } else if (isChildSeparator(char)) {

    }
  }
}

/*
key 등장 key1
key1의 children [1]
key 등장 key2
key2의 children [1, 2]

console.log(`key 등장 ${keyname}`)
*/





