const D = document;
const W = window;
const N = navigator;
const UA = N.userAgent;

export default function deteccionDispositivo(id) {
    const $ID = document.getElementById(id);

    const isMobile = {
        android: () => UA.match(/android/i),
        ios: () => UA.match(/iphone|ipad|ipod/i),
        windows: () => UA.match(/windows phone/i),

        any: function() {
            return (this.android() || this.ios() || this.windows());
        }
    }
    const isDesktop = {
        linux: () => UA.match(/linux/i),
        mac: () => UA.match(/mac os/i),
        windows: () => UA.match(/windows nt/i),

        any: function() {
            return (this.linux() || this.mac() || this.windows());
        }
    }
    const isBrowser = {
        opera: () => UA.match(/OPR/i),
        firefox: () => UA.match(/firefox/i),
        chrome: () => UA.match(/chrome/i),
        edge: () => UA.match(/edge/i),
        safari: () => UA.match(/safari/i),
        ie: () => UA.match(/msie|iemobile/),

        any: function() {
            return (this.opera() || this.firefox() || this.chrome() || this.safari());
        }
    }

    $ID.innerHTML = `
        <ul class="list__device-items">
            <li> User Agent: <b>${UA}</b></li>
            <li> Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
            <li> Navegador: <b>${isBrowser.any()}</b></li>
    `;
}