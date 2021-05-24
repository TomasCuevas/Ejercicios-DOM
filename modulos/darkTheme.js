const statusTheme = {
    darkmode: false,
};

const $DARKMODE_SECTION = document.querySelectorAll("[data-darkmode-section]");
const $DARKMODE_SUBTITLE = document.querySelectorAll("[data-darkmode-subtitle]");
const $DARKMODE_BTN_CLOCK = document.querySelectorAll("[data-darkmode-clock]");

const darkmodeTrue = () => {
    $DARKMODE_SECTION.forEach((e) => e.classList.add("background__darkmode"));
    $DARKMODE_SUBTITLE.forEach((e) => e.classList.add("subtitle__darkmode"));
    $DARKMODE_BTN_CLOCK.forEach((e) => e.classList.add("btn__clock-darkmode"));
    document.querySelector("#icon__theme").classList.replace("fa-moon","fa-sun")
}

const darkmodeFalse = () => {
    $DARKMODE_SECTION.forEach((e) => e.classList.remove("background__darkmode"))
    $DARKMODE_SUBTITLE.forEach((e) => e.classList.remove("subtitle__darkmode"))
    $DARKMODE_BTN_CLOCK.forEach((e) => e.classList.remove("btn__clock-darkmode"));
    document.querySelector("#icon__theme").classList.replace("fa-sun","fa-moon")
}


document.addEventListener("click",(e) => {
    if (e.target.matches("#icon__theme")) {
        if (statusTheme.darkmode === false) {
            statusTheme.darkmode = true;
            window.localStorage.setItem("darkmode",true);
            darkmodeTrue();
        } else {
            statusTheme.darkmode = false;
            window.localStorage.setItem("darkmode",false);
            darkmodeFalse();
        }
    }
})

document.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("darkmode") === null) {
        localStorage.setItem("darkmode","false");
    } else {
        if (localStorage.getItem("darkmode") === "false") {
            darkmodeFalse();
        } else {
            darkmodeTrue();
        }
    }
})
