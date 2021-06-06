const d = document;
const w = window;

export default function smartVideoVisibility() {
    const $SMARTS_VIOEO = d.querySelectorAll("[data-smart-video]");
    const $BUTTON_SOUND = d.querySelectorAll("[data-icon-sound]");

    const options = {
        threshold: 1,
    }

    const callback = (entries) => {

        entries.forEach(entry => {
            let video = entry.target;
            
            if (entry.isIntersecting) {
                let video = entry.target;
                video.play();
                
                d.addEventListener("visibilitychange",(e) => {
                    if (d.visibilityState === "visible") {
                        video.play()
                    } else {
                        video.pause()
                    }
                })
            } else {
                video.pause();
            }
        });
    }
    
    const observer = new IntersectionObserver(callback,options);
    $SMARTS_VIOEO.forEach((el) => observer.observe(el));

    $BUTTON_SOUND.forEach((el) => {
        
        el.addEventListener("click",(e) => {
            let video = el.previousElementSibling;
            
            if (video.volume === 0) {
                video.volume = 1;
                el.textContent = "volume_up";
            } else {
                video.volume = 0;
                el.textContent = "volume_off";
            }
        })
    })
}