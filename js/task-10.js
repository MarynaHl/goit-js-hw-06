// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку 
// Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const controlsContainer = document.querySelector('#controls');
const inputBtn = controlsContainer.firstElementChild;
const boxesContainer = document.querySelector('#boxes');

let sizeBoxes = 30;

createBtn.addEventListener('click', createBoxes);
const shapeEl = document.createElement('div');

function createBoxes() {
  const amountBoxes = inputBtn.value;

  for (let i = 0; i < amountBoxes; i++) {
    sizeBoxes += 10;
    const shapeEl = document.createElement('div');
    shapeEl.style.backgroundColor = getRandomHexColor();
    shapeEl.style.width = `${sizeBoxes}px`;
    shapeEl.style.height = `${sizeBoxes}px`;
    boxesContainer.appendChild(shapeEl);
    inputBtn.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.firstChild.remove();
  }
  return;
}