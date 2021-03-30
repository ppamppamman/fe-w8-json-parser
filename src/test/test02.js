const data = `{ 
  "key1": 1,
  "key2": [1, 2]
}`;

const data2=`{"easy" : ["hello", {"a":"a"}, "world"], "hard":"hi"}`;

/*
key 등장 key1
key1의 children [1]
key 등장 key2
key2의 children [1, 2]

console.log(`key 등장 ${keyname}`)
*/

const splitData=data.replace(/(\r\n\t|\n|\r\t)|\s/g,"");
console.log(splitData);
let stack=[];
let children=[];
let temp=[];
for(const char of splitData){
    if(char===":"){
        while(stack[stack.length-1]!=="{"){
            temp.unshift(stack.pop());
        }
        console.log(`key 등장 ${temp.join("").trim()}`);
        stack.push(char);
    }
    else if(char===","){
        // 콤마가 배열 안에 있을 땐 어떻게 해결하지?
  
        while(stack[stack.length-1]!==":"){
            children.unshift(stack.pop());
        }
       console.log(`${temp.join("").trim()} 의 children ${children.join("").trim()}`);
    }
    else{
        stack.push(char);
    }
    temp=[];
    children=[];
}





