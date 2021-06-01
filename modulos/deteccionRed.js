const d = document;
const w = window;
const n = navigator;

const $STATUS = document.getElementById("status__red");

const $STATUS_INFO = document.getElementById("status__red-info");

export default function networkStatus() {
    const isOnLine = () => {
        if (n.onLine) {
            $STATUS.classList.add("status__red-online")
            $STATUS.classList.remove("status__red-offline")
            $STATUS_INFO.innerHTML = "CONEXÍON REESTABLECIDA"
            setTimeout(() => {
                $STATUS.classList.remove("status__red-online")
            }, 3000);
        } else {
            $STATUS.classList.add("status__red-offline")
            $STATUS.classList.remove("status__red-online")
            $STATUS_INFO.innerHTML = "CONEXÍON PERDIDA"
            setTimeout(() => {
                $STATUS.classList.remove("status__red-offline")
            }, 3000);
        }
        
    }

    w.addEventListener("online",isOnLine);
    w.addEventListener("offline",isOnLine);
}