
const ref = {
    fontSizeControl: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text')
 }
 
 ref.fontSizeControl.addEventListener('input',changeFontSize)
 
 function changeFontSize() {
    // console.log(ref.fontSizeControl.value);
    // console.log(ref.textRef.style.fontSize);
    ref.textRef.style.fontSize = ref.fontSizeControl.value + 'px';
 }