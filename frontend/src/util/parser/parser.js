const isSeparatorArray = (node) => {
  return node.getType() === "Separator-array-object" && node.getData() === "[" 
}

const isSeparatorObject = (node) => {
  return node.getType() === "Separator-array-object" && node.getData() === "{";
}

const isNotSeparator = (node) => {
  return !["Separator-key-value", "Separator-child", "Separator-array-object"].includes(node.getType());
}

const isObjectKey = (node) => {
  return node.getType() === "Object Key";
}

const dataInitializer = (node) => {
  if (isSeparatorArray(node)) 
    return {type: "Array", child: [], value: "arrayObject" }
  else if (isSeparatorObject(node)) 
    return {type: "Object", child: [{value: {propKey: {}, propValue: {}, type:"obejctProperty" }}] }
  else 
    return false;
}

const parsing = (leafNodes) => {
  let target;
  
  leafNodes.map((node) => {

    if (node.constructor.name === "Node") { // 일반 토큰일 때
      
      const isInitializable = dataInitializer(node); // 클로저 데이터 활용을 위한 initialize
      if (isInitializable) {
        target = isInitializable;
        return;
      }
      
      // initialize가 진행되어 토큰을 처리
      switch (target.type) {
        case "Array":
          if (isNotSeparator(node)) target.child.push(node);
          break;
        case "Object":
          if (isObjectKey(node)) {
            target.child[0].value.propKey = { value: node.getData(), type: "String" }
          } 
          else if (isNotSeparator(node)) target.child[0].value.propValue = node
          break;
      }
    }

    else { // 재귀 진행 가능한 토큰일 때 // node.constructor.name === "Branch"
      switch (target.type) {
        case "Array":
          target.child.push(parsing(node.getLeafNodes()));
          break;
        case "Object":
          target.child[0].value.propValue = parsing(node.getLeafNodes());
          break;
      }
    } 
  });

  return target;  
}

export default parsing;