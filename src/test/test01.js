// const data = `[1,["3"]]`;
const data = `[ [ [ 1 ] ],[ 2 ] ]`;

const splitData = data.split("");

let children = [];

let stack = [];
for (const char of splitData) {
  stack.push(char);

  if (char === "]") {
    let child
  
    while (child !== "[" ) {
      child = stack.pop();
      children.unshift(child);
    }
    // child가 "[" 일 때
    child = stack.pop();
    children.unshift(child);
    
    // 리턴(프린트) 후 초기화
    console.log(children.join(""));
    children = [];
  }
}


// 

// flag쓰는이유? "["" 이게 열렸으니까 flag=true 
// 다음 for문돌릴때? flag를검사해서 child로 처리해줄지말지 결정하기위해

// let stack = []; 
// for (let char of splitData) {
    
//   stack.push(char);
    
//     if (char==="]") {
//         if(stack[length-1]==="["){
//           stack.pop();
//         }
//         stack.pop();
//     }
    
// }


/*  
[
  '[', '1', ',',
  '[', '"', '3',
  '"', ']', ']'
]

*/