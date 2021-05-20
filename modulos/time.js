let timeInLive;
let alarmTime;

document.addEventListener("click",(e) => {
    if (e.target.matches("#start__clock")) {
        document.querySelector("#time__live").classList.remove("time__live");
        document.querySelector("#time__live").classList.add("time__live-active");
        document.querySelector("#start__clock").setAttribute("disabled",true);
        document.querySelector("#stop__clock").removeAttribute("disabled");
        timeInLive = setInterval(() => {
            const time = new Date;
            document.querySelector("#time__live").innerHTML = time.toLocaleTimeString();
        },1000)
    }
    if (e.target.matches("#stop__clock")) {
        document.querySelector("#time__live").classList.remove("time__live-active");
        document.querySelector("#time__live").classList.add("time__live");
        document.querySelector("#start__clock").removeAttribute("disabled");
        document.querySelector("#stop__clock").setAttribute("disabled",true);
        clearInterval(timeInLive);
        document.querySelector("#time__live").innerHTML = null;
    }
    if (e.target.matches("#start__alarm")) {
        alarmTime = setTimeout(() => {
            document.querySelector("#sound__alarm").play();
        },200)
        document.querySelector("#start__alarm").setAttribute("disabled",true);
        document.querySelector("#stop__alarm").removeAttribute("disabled");
    }
    if (e.target.matches("#stop__alarm")) {
        clearTimeout(alarmTime);
        document.querySelector("#sound__alarm").pause();
        document.querySelector("#sound__alarm").currentTime = 0;
        document.querySelector("#start__alarm").removeAttribute("disabled");
        document.querySelector("#stop__alarm").setAttribute("disabled",true);
    }
})



