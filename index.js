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