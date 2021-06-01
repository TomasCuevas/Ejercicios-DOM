const d = document;
const w = window;
const n = navigator;

const $MICROFONO = d.getElementById("media__device")

export default function microphone() {
    n.mediaDevices.getUserMedia({video: true,audio: true})
    .then((stream) => {
        $MICROFONO.srcObject = stream;
        $MICROFONO.play();
    })
    .catch((err) => {
        console.log(err);
    })
}