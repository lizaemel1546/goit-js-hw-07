function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btn = document.querySelector("[data-create]");
const boxContainer = document.querySelector("#boxes");
const btnDestroy = document.querySelector("[data-destroy]");
let boxesContainer = document.querySelector("#boxes");

btn.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    return;
  } else {
    createBoxes(amount);
    input.value = "";
  }
});

function createBoxes(amount) {
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${initialSize + i * 10}px`;
    div.style.height = `${initialSize + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
    div.classList.add("box");
  }
}

btnDestroy.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
