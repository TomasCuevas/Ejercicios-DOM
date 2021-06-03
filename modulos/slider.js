const d = document;
const w = window

export default function applySlider() {
    const $EL_SLIDER = d.querySelectorAll("#slider__content figure");

    let maxLength = $EL_SLIDER.length - 1;
    let actually = 0;

    d.addEventListener("click",(e) => {
        if (e.target.matches("#slider__left")) {
            $EL_SLIDER[actually].classList.remove("photo__container-left");
            $EL_SLIDER[actually].classList.remove("photo__container-right");
            
            actually -= 1;
            if (actually < 0) {
                actually = maxLength;
            }

            $EL_SLIDER[actually].classList.add("photo__container-left");
        }
        
        if (e.target.matches("#slider__right")) {
            $EL_SLIDER[actually].classList.remove("photo__container-right");
            $EL_SLIDER[actually].classList.remove("photo__container-left");
            
            actually += 1;
            if (actually > maxLength) {
                actually = 0;
            }

            $EL_SLIDER[actually].classList.add("photo__container-right");
        }
    })
}