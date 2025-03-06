// 컴퓨터: 휴지통, 내 PC, 계산기
// 아이폰: 설정, ...
// built-in Object:
// Number,String, Boolean,
// Array, Set, Object, Date,

const a = new Set(); // 중복 허용 안됨
a.add(1);
a.add(2);
a.add(3);
a.add(4);
a.add(1);

// 배열에서 중복제거 로직
const b = [...new Set(["아아", "라떼", "민트", "라떼"])];
console.log(b);
