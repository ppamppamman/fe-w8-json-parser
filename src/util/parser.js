const isSeparatorArray = (node) => {
  return node.getType() === "Separator-array-object" 
}

const isSeparatorObject = (node) => {
  return node.getType() === "Separator-array-object"
}
const isOpenable = (node) => {
  return node.getData() === "[" || node.getData() === "{";
}

const isNotSeparator = (node) => {
  return !["Separator-key-value", "Separator-child", "Separator-array-object"].includes(node.getType());
}

const isObjectKey = (node) => {
  return node.getType() === "Object Key";
}

const dataInitializer = (node) => {
  if (isSeparatorArray(node) && isOpenable(node)) 
    return { target: [], targetType: "Array" }
  else if (isSeparatorObject(node) && isOpenable(node)) 
    return { target: {}, targetType: "Object"}
  else 
    return false;
}


const parsing = (leafNodes) => {
  let target;
  let targetType = null;
  let objectKey = null;

  leafNodes.map((node) => {
    // 일반 토큰일 때
    if (node.constructor.name === "Node") {
      const isInitializable = dataInitializer(node);
      if (isInitializable) {
        target = isInitializable.target;
        targetType = isInitializable.targetType;
        return;
      }

      if (targetType === "Array" ) {
        if (isNotSeparator(node)) {
          target.push(node);
        }
      } 
      else if (targetType === "Object") {
        if (isObjectKey(node)) {
          objectKey = node.getData();
          target[objectKey] = null;
        } 
        else if (isNotSeparator(node)) {
          target[objectKey] = node.getData();
        }
      } 
    }

    // 재귀 진행 가능한 토큰일 때
    else { // node.constructor.name === "Branch"
      if (targetType === "Array" ) {
        target.push(parsing(node.getLeafNodes()));
      }
      else if (targetType === "Object") {
        target[objectKey] = parsing(node.getLeafNodes());
      }
    } 
  });

  return target;  
}

module.exports = parsing;