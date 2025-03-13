const clothesImages = {
  first: {
    black: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80A_NT7TQ80A_hover.jpg?browse",
    ivory: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80B_NT7TQ80B_hover.jpg?browse",
    brown: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80C_NT7TQ80C_hover.jpg?browse",
  },
  second: {
    black: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7XQ81A_NT7XQ81A_hover.jpg?browse",
    white: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7XQ81B_NT7XQ81B_hover.jpg?browse",
  },
};
const colorsFirst = Object.keys(clothesImages.first); // black,ivory,brown
const imagesFirst = Object.values(clothesImages.first); // img * 3

const colorsSecond = Object.keys(clothesImages.second); // black,ivory,brown
const imagesSecond = Object.values(clothesImages.second); // img * 3

// 이미지 만들기 함수
const initImage = (clothesImages) => {
  const image = document.createElement("img");
  image.src = clothesImages;
  image.style.width = "300px";
  image.style.height = "300px";
  image.style.objectFit = "cover";
  return image;
};

// 버튼 만들기 함수
const makeButton = (color, image, clotheImage) => {
  const button = document.createElement("button");
  button.style.width = "30px";
  button.style.height = "30px";
  button.style.borderRadius = "9999px";
  button.style.backgroundColor = color;
  button.addEventListener("click", () => {
    image.src = clotheImage;
  });
  return button;
};

const makeImage = (buttons, clotheImage) => {
  const article = document.createElement("article");
  (article.style.display = "flex"), (article.style.flexDirection = "column"), (article.style.gap = "10px");
  const image = initImage(clotheImage);
  article.appendChild(image);
  Array(clotheImage.length)
    .fill(0)
    .forEach((v, i) => {
      const btn = makeButton(buttons[i], image, clotheImage[i]);
      article.appendChild(btn);
    });
  document.body.append(article);
};
makeImage(colorsFirst, imagesFirst);
makeImage(colorsSecond, imagesSecond);
