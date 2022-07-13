const inputBtn = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

inputBtn.addEventListener('input', onInputBtnInput);

function onInputBtnInput(event) {
  if (event.currentTarget.value === '') {
    return (output.textContent = 'Anonymous');
  }
  output.textContent = event.currentTarget.value;
}