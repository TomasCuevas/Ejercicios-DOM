import deteccionDispositivo from "./modulos/deteccionDispositivo.js";
import networkStatus from "./modulos/deteccionRed.js";
import searchfilters from "./modulos/filtroBusquedas.js";
import getGeolocation from "./modulos/geolocalizacion.js";
import applyIntersection from "./modulos/intersectionObserver.js";
import applySlider from "./modulos/slider.js";
import smartVideoVisibility from "./modulos/smartVideo.js";
import sorteoDigital from "./modulos/sorteo.js";
import validarFormulario from "./modulos/validarFormulario.js";
import microphone from "./modulos/webCam.js";
import {responsiveMedia} from "/modulos/responsiveDesing.js";
import narrator from "./modulos/narrador.js";

document.addEventListener("click",(e) => {
    if (e.target.matches("#icon__bar")) {
        document.querySelector("#icon__bar").classList.toggle("fa-times");
        document.querySelector("#nav").classList.toggle("nav__active")
    }
    if (e.target.matches(".nav__item")) {
        document.querySelector("#icon__bar").classList.remove("fa-times");
        document.querySelector("#nav").classList.remove("nav__active")
    }
    if (!e.target.matches("#id") && !e.target.matches("#icon__bar")) {
        document.getElementById("nav").classList.remove("nav__active");
        document.getElementById("icon__bar").classList.remove("fa-times");
    }
})

responsiveMedia("element__container",
"video__content",
"(min-width: 1275px)",
`<a href="https://www.youtube.com/embed/6IwUl-4pAzc" class="video__content  element__mobile" target="_blank">Ver Video</a>`,
`<iframe class="video__content" width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

responsiveMedia("element__container",
"audio__content",
"(min-width: 1275px)",
`<a href="https://www.youtube.com/embed/Qz7SfU-eTSc" class="audio__content element__mobile" target="_blank">Escuchar Audio</a>`,
`<iframe class="audio__content" width="560" height="315" src="https://www.youtube.com/embed/Qz7SfU-eTSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

document.addEventListener("DOMContentLoaded",() => {
    deteccionDispositivo("user__device");
    getGeolocation("geolocation")
    searchfilters("card__filter","card")
    sorteoDigital();
    applySlider();
    applyIntersection();
    smartVideoVisibility();
    validarFormulario();
})

const $SMARTS_VIOEO = document.querySelectorAll("[data-smart-video]")

$SMARTS_VIOEO.forEach(el => {
    let video = el;
    video.volume = 0;
});

networkStatus();
microphone()
narrator();