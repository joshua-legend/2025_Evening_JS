const allCheckList = document.querySelectorAll(".checker");
const button = document.querySelector(".button");
const essentialList = [false, false, false, false];

allCheckList.forEach((v, i) => {
  v.addEventListener("click", () => {
    v.classList.toggle("checked");
    v.classList.toggle("unchecked");
    // 필수 사항의 버튼이 아닌 경우는 아래 케이스 제외 코드!
    if (essentialList.length > i) essentialList[i] = v.classList.contains("checked");
    console.log(essentialList);
    if (essentialList.every((v) => v)) {
      button.classList.add("confirm");
      button.classList.remove("unconfirm");
    } else {
      button.classList.remove("confirm");
      button.classList.add("unconfirm");
    }
  });
});
