const coffee = ["아메리카노", "라떼", "민트초코"];

coffee[2]; // 인덱싱(=꺼내기)
coffee[4] = "프라푸치노"; // 추가하기
coffee[1] = "바닐라라떼"; // 업데이트
delete coffee[0];

const fruits = ["사과", "바나나", "키위", "망고"];
const meats = ["닭고기", "돼지고기", "소고기"];

// rest 연산자
const [a, b] = fruits; // 사과 바나나
const [c, ...d] = fruits; // 사과 ["바나나","키위","망고"]
const [a1, ...b1] = meats; // 닭고기  ["돼지고기","소고기"]

// destructuring 연산자
const e = [...d, ...b1]; // ["바나나","키위","망고","돼지고기","소고기"]
