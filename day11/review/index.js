const makeCard = (colorName, hexColor) => {
  return `
    <article class="card apple banana kiwi">
      <div style="background-color:${hexColor}" class="color"></div>
      <div class="info">
        <span class="name">${colorName}</span>
        <span class="hex">${hexColor}</span>
      </div>
    </article>
    `;
};
const colorList = [
  { name: "Cool Grey 90", color: "#1e2c35" },
  { name: "Cool Grey 80", color: "#37434C" },
  { name: "Cool Grey 70", color: "#505B62" },
  { name: "Cool Grey 60", color: "#697279" },
  { name: "Cool Grey 50", color: "#82898F" },
  { name: "Cool Grey 40", color: "#9BA1A5" },
  { name: "Cool Grey 30", color: "#B4B9BC" },
  { name: "Cool Grey 20", color: "#CDD0D2" },
  { name: "Cool Grey 10", color: "#E6E7E9" },
  { name: "Cool Grey 5", color: "#F2F4F6" },
];
colorList.forEach((x) => {
  document.body.insertAdjacentHTML("beforeend", makeCard(x.name, x.color));
});
