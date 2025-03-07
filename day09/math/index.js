// arr, set, obj, date,math window, document
Math.abs(-10); // 10
Math.min(3, 1, 2, 3, 1, 512, 3, 2, 3, 0); // 0
Math.max(102, 1, 3, 1023, 120301, 12, 999999, 123); //999999
Math.random(); // 0 ~ 1

//min~max 정수 랜덤하게 뽑는 함수

// min = 4
// max = 20

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
