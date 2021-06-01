const d = document;
const w = window;
const n = navigator;

export default function getGeolocation(id) {
    const $ID = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = (position) => {
        let coords = position.coords;
        $ID.innerHTML = `<p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy} metros</b></li>
        </ul>
        <a href="https://www.google.com.ar/maps/@${coords.latitude},${coords.longitude},17z" target="_blank" rel="noopener">Mostrar en Google Maps</a>
        `
    }
    const error = (err) => {
        $ID.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`
    }

    n.geolocation.getCurrentPosition(success,error,options);
}