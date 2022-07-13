function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const inputValue = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
inputValue.addEventListener("input", inputHandler);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function inputHandler() {
  return inputValue.value;
}

function createBoxes() {
  const arr = [];
  let size = 20;

  for (let i = 0; i < inputValue.value; i += 1) {
    const box = document.createElement("div");
    size += 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
  }
  boxes.append(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  inputValue.value = "";
}


