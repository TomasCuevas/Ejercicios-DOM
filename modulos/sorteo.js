const d = document;
const w = window;
const n = navigator;

export default function sorteoDigital() {
    const $PLAYERS = d.querySelectorAll(".player");
    const $BTN = d.getElementById("winner__btn");
    const $P = d.getElementById("winner__info");

    
    $BTN.addEventListener("click",(e) => {
        let winner = Math.floor((Math.random() * $PLAYERS.length));

        $P.classList.add("winner__info-active");
        $P.innerHTML = $PLAYERS[winner].textContent;
    })
}