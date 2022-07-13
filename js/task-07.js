
const ref = {
    fontSizeControl: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text')
}

ref.fontSizeControl.addEventListener('input',changeFontSize)

function changeFontSize() {
    ref.textRef.style.fontSize = ref.fontSizeControl.value + 'px';
}