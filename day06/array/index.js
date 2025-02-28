// object paradigm
// 기본:str,num,bool,un,nu
// 참조:arr,obj,func,window
const menu = ["americano", "latte", "mint"];
menu.push("cocoa"); // 역할:맨뒤 추가하기
menu.pop(); // 역할:맨뒤 삭제하기
menu.slice(0, 2); // 역할: 0~1까지 배열 잘라서 돌려줌

const num = [2, 4, 6, 8, 10];
num.map((x) => {
  return x * 2;
}); // 역할: 요소 바꾸기
const a2 = num
  .filter((x) => {
    return 5 < x;
  }) // 역할: 조건에 부합하는 요소만 살리기
  .map((x) => {
    return x + 10;
  });
console.log(a2);
