const $space = document.querySelector("#game__zone");
const $ball = document.querySelector("#game__ball");
let x = 0;
let y = 0;
let keyEvent;

document.addEventListener("click",(e) => {
    
    if (e.target.matches("#game__zone-border *")) {
        keyEvent = document.addEventListener("keydown",(e) => {
            let limitsBall = $ball.getBoundingClientRect();
            let limitsSpace = $space.getBoundingClientRect();
            
            if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
                e.preventDefault();
                if (limitsBall.left > limitsSpace.left) {
                    x += -10;
                    $ball.style.transform = `translate(${x}px,${y}px)`;
                }
            }
            if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
                e.preventDefault();
                if (limitsBall.top > limitsSpace.top) {
                    y += -10;
                    $ball.style.transform = `translate(${x}px,${y}px)`;
                }
            }
            if (e.key === "ArrowRight" ||e.key === "d" || e.key === "D") {
                e.preventDefault();
                if (limitsBall.right < limitsSpace.right) {
                    x += 10;
                    $ball.style.transform = `translate(${x}px,${y}px)`;
                }
            }
            if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
                e.preventDefault();
                if (limitsBall.bottom < limitsSpace.bottom) {
                    y += 10;
                    $ball.style.transform = `translate(${x}px,${y}px)`;
                }
            }    
        })
    }
})


