const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

function onButtonDecrementClick (){
    counterValue.textContent = Number(counterValue.textContent)-1;
};
function onButtonIncrementClick (){
    counterValue.textContent = Number(counterValue.textContent)+1;
};
buttonDecrement.addEventListener('click', onButtonDecrementClick);
buttonIncrement.addEventListener('click', onButtonIncrementClick);