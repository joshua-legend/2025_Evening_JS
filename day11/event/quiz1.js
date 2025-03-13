const box = document.createElement("div");
box.style.border = "1px solid black";
document.body.appendChild(box);

const sizeBtnList = [
  { name: "small", size: "100px" },
  { name: "medium", size: "200px" },
  { name: "large", size: "300px" },
];
sizeBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.width = x.size;
    box.style.height = x.size;
  });
  document.body.appendChild(btn);
});

const colorBtnList = [
  { name: "red", color: "red" },
  { name: "blue", color: "blue" },
  { name: "green", color: "green" },
];
colorBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.backgroundColor = x.color;
  });
  document.body.appendChild(btn);
});

// box 모서리 둥근정도
//square, ellipse, circle
//0px,  10px, 9999px
const radiusBtnList = [
  { name: "square", radius: "0px" },
  { name: "ellipse", radius: "10px" },
  { name: "circle", radius: "9999px" },
];
radiusBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x.name;
  btn.addEventListener("click", () => {
    box.style.borderRadius = x.radius;
  });
  document.body.appendChild(btn);
});

window.addEventListener("scroll", () => {
  console.log("스크롤~");
});
