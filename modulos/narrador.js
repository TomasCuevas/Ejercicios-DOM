const d = document;

const $SPEECH_SELECTOR = d.getElementById("speech__selector-container");
const $SPEECH_BTN = d.getElementById("play__narrator");
const $SPEECH_TEXT = d.getElementById("speech__text")

export default function narrator() {    
    const speechMessage = new SpeechSynthesisUtterance();
    let voices = [];

    d.addEventListener("DOMContentLoaded",(e) => {
        speechSynthesis.addEventListener("voiceschanged",(e) => {
            voices = speechSynthesis.getVoices();
            console.log(voices)
            voices.forEach((voice) => {
                let option = d.createElement("option");
                option.value = voice.name;
                option.textContent = `${voice.name} | ${voice.lang}`;
                $SPEECH_SELECTOR.insertAdjacentElement("beforeend",option)
            })
        })        
    })

    d.addEventListener("change",(e) => {
        if (e.target === $SPEECH_SELECTOR) {
            speechMessage.voice = voices.find((el) => el.name == e.target.value);
        }
    })

    d.addEventListener("click",(e) => {
        if (e.target === $SPEECH_BTN) {
            speechMessage.text = $SPEECH_TEXT.value;
            speechSynthesis.speak(speechMessage);
            console.log($SPEECH_TEXT.value)
        }
    })
}