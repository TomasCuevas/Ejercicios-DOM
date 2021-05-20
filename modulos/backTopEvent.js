document.addEventListener("scroll",(e) => {
    if (window.scrollY > 300) {
        document.querySelector("#icon__back").classList.add("icon__back-active");
    }
    if (window.scrollY < 300) {
        document.querySelector("#icon__back").classList.remove("icon__back-active");
    }
})