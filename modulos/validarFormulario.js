import {expresiones} from "/modulos/expresionesRegulares.js"

const d = document;

const allValidation = {
    name: false,
    email: false,
    matter: false,
    message: false,
    general: false,
}

export default function validarFormulario() {
    const $INPUTS = d.querySelectorAll("[data-form-input]");
    const $BTN = d.getElementById("btn__submit");
    const $FORM = d.getElementById("form__bottom");

    $INPUTS.forEach((el) => {
        el.addEventListener("keyup",(e) => {
            let nameInput = el.getAttribute("name");
            validarCampo(expresiones[nameInput],el.value,el.name)
        })
    });

    function validarCampo(expresion,value,input) {
        if (expresion.test(value)) {
            d.getElementById(`input__${input}`).classList.add("form__input-true");
            d.getElementById(`input__${input}`).classList.remove("form__input-false");
            d.getElementById(`${input}__info`).classList.remove("info__error-container-active")
            allValidation[input] = true;
            generalValidation();
        } else if (!expresion.test(value) && value !== "") {
            d.getElementById(`input__${input}`).classList.add("form__input-false");
            d.getElementById(`input__${input}`).classList.remove("form__input-true");
            d.getElementById(`${input}__info`).classList.add("info__error-container-active")
            allValidation[input] = false;
            generalValidation();
        } else if (value === "") {
            d.getElementById(`input__${input}`).classList.remove("form__input-false");
            d.getElementById(`input__${input}`).classList.remove("form__input-true");
            d.getElementById(`${input}__info`).classList.remove("info__error-container-active")
            allValidation[input] = false;
            generalValidation();
        }
    }

    function generalValidation() {
        if (allValidation.name && allValidation.email && allValidation.matter && allValidation.message) {
            allValidation.general = true;
            $BTN.classList.add("btn__submit-active");
        } else {
            allValidation.general = false;
            $BTN.classList.remove("btn__submit-active");
        }
    }

    $BTN.addEventListener("click",(e) => {
        if (allValidation.general) {
            $FORM.reset();
        }
    })
}