import deteccionDispositivo from "./modulos/deteccionDispositivo.js";
import networkStatus from "./modulos/deteccionRed.js";
import searchfilters from "./modulos/filtroBusquedas.js";
import getGeolocation from "./modulos/geolocalizacion.js";
import microphone from "./modulos/webCam.js";
import {responsiveMedia} from "/modulos/responsiveDesing.js";

document.addEventListener("click",(e) => {
    if (e.target.matches("#icon__bar")) {
        document.querySelector("#icon__bar").classList.toggle("fa-times");
        document.querySelector("#nav").classList.toggle("nav__active")
    }
    if (e.target.matches(".nav__item")) {
        document.querySelector("#icon__bar").classList.remove("fa-times");
        document.querySelector("#nav").classList.remove("nav__active")
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
})

networkStatus();
microphone()