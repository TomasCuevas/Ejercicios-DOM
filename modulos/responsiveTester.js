const validarExpresion = {
    type: /^[0-9]{1,4}$/
}

const $URL = document.getElementById("url__input")
const $WIDTH = document.getElementById("width__window")
const $HEIGHT = document.getElementById("height__window")
let tester;

document.addEventListener("click",(e) => {
    if(e.target.matches("#open__window")) {
        e.preventDefault();
        if (validarExpresion.type.test($WIDTH.value) && validarExpresion.type.test($HEIGHT.value)) {
            tester = window.open($URL.value,"tester",`width=${$WIDTH.value},height=${$HEIGHT.value}`)
        } else {
            alert("DEBES COLOCAR LA ANCHURA Y LA ALTURA");
        }
    }
    if(e.target.matches("#close__window")) {
        tester.close();
    }
})