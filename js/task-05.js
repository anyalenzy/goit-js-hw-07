function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const hexColor = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  hexColor.textContent = getRandomHexColor();
};

btn.addEventListener("click", changeColor);
