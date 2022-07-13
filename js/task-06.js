const validationInput = document.querySelector('#validation-input');

const onInputBlur = () => {
    validationInput.classList.forEach(elem => validationInput.classList.remove(elem));
  if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
};
validationInput.addEventListener('blur', onInputBlur);