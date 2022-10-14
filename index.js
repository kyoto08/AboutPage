const containerEl = document.querySelector(".container");
const texts = ["Currently, I am a CS student.", "I am eager to learn and I'm not afraid of challenges!"];
let index = 0;
let indexChar = 0;
updateText();
function updateText() {
    indexChar++;
    containerEl.innerHTML = `<h1>${texts[index].slice(0, indexChar)}</h1>`;
    if(indexChar == texts[index].length){
        index++
        indexChar = 0;
    }
    setTimeout(updateText, 350); 
}

