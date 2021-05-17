let $TIME_ACCOUNTANT = document.getElementById("time__accountant");
const LIMIT_DATE = "April 15, 2022 00:00:00";
const COUNTDOWN = new Date(LIMIT_DATE).getTime();

const intervalTime = setInterval(() => {
    const NOW = new Date().getTime();
    const LIMIT_TIME = COUNTDOWN - NOW;
    
    let days = Math.floor(LIMIT_TIME / (1000 * 60 * 60 * 24))
    let hours = Math.floor(LIMIT_TIME % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(LIMIT_TIME % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(LIMIT_TIME % (1000 * 60) / (1000));

    $TIME_ACCOUNTANT.innerHTML = `Falta: ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos`; 

    if (NOW > COUNTDOWN) {
        clearInterval(intervalTime);
        $TIME_ACCOUNTANT.classList.add("congratulations");
        $TIME_ACCOUNTANT.innerHTML = "FELIZ CUMPLE 22 A MÍ";
    };
},1000)