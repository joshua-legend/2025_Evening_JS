// 기본: number,string,boolean,null,undefined
// 참조: array, object
// string <-> array

//1. string -> array
const a = "ice americano".split("");
const b = [..."ice americano"]; //권장
const c = Array.from("ice americano");

//2. array -> string
const a1 = [1, 2, 3, 4, 5].map((v) => String(v)).reduce((a, c) => a + c);
const b1 = [1, 2, 3, 4, 5].join("");
