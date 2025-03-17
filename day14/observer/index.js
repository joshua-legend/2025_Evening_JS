const box = document.querySelector(".box");
const circle = document.querySelector(".circle");
const action = (x) => {
  x.forEach((y) => {
    if (y.isIntersecting) console.log("ㅎㅇ");
  });
};
const observer = new IntersectionObserver(action, {
  threshold: 1,
});
observer.observe(box);

const observer1 = new IntersectionObserver((x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      circle.classList.add("pink");
    }
  });
});
observer1.observe(circle);
