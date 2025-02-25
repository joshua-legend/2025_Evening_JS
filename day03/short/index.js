// 유저에게 닉네임을 입력받고
// [닉네임]님 환영합니다! 알럿
// 대신에 아무것도 입력하지않으면
// Guest님 환영합니다! 알럿

// const nickname = window.prompt("닉네임 입력!");
// window.alert(`${nickname || "Guest"}님 환영합니다!`);

// 유저에게 비밀번호를 입력 받고
// 비밀번호가 1024이면 알럿으로 화장실 열림!
// 틀리면 아무것도 안일어나기

const password = +window.prompt("비밀번호 입력");
password == 1024 && alert("화장실 열림");
