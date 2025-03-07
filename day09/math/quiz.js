// 랜덤한 배경색상을 가진 버튼을 10개 만들기
// 컨텐츠는 버튼
const color = [..."1234567890abcdef"];
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getColorRandom = () => {
  return (
    "#" +
    Array(6)
      .fill(0)
      .map((v) => color[getRandom(0, color.length)])
      .join("")
  );
};

Array(10)
  .fill(0)
  .forEach((x) => {
    const btn = document.createElement("button");
    btn.innerText = "버튼";
    btn.style.backgroundColor = getColorRandom();
    document.body.appendChild(btn);
  });
