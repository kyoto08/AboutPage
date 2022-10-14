const containerEl = document.querySelector(".container");
const texts = ["Hello there, let me introduce myself!", "My name is Dinu Darii and currently I am a CS student.", "I am eager to learn and I am not afraid of challenges.", "Thank you for your attention!"];
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

    if(index == texts.length){
        index = 0
        indexChar = 0
    }
    setTimeout(updateText, 350); 
}

