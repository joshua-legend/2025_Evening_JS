// w:300, h:300 box가 있습니다.
// 빨강버튼, 파랑버튼, 노랑버튼
// 버튼을 누르면 box의 배경색이 해당 버튼의 색깔로 바뀜

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
document.body.appendChild(box);

const redbtn = document.createElement("button");
redbtn.innerText = "레드";
redbtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(redbtn);
