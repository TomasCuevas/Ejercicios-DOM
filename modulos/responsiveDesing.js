export function responsiveMedia(idContainer,idElement,mq,mobileContent,desktopContent) {
    let breakPoint = window.matchMedia(mq);
    const responsive = (e) => {
        if (e.matches) {
            document.getElementById(idContainer).classList.replace("element__container-mobile","element__container")
            document.getElementById(idElement).innerHTML = desktopContent;
        } else {
            document.getElementById(idContainer).classList.replace("element__container","element__container-mobile")
            document.getElementById(idElement).innerHTML = mobileContent;
        }
    }

    breakPoint.addEventListener("change",responsive);
    responsive(breakPoint);
}