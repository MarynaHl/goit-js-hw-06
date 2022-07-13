
const fontSizeEl = {
    fontSizeControl: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text')
}

ref.fontSizeControl.addEventListener('input',changeFontSize)

function onInputChange(){
    fontSizeEl.textRef.style.fontSize = fontSizeEl.fontSizeControl.value + 'px';
}