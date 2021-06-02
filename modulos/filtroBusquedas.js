const d = document;

export default function searchfilters(input,selector) {
    const $INPUT = d.getElementById(input);
    const $ELEMENTOS = d.querySelectorAll(`.${selector}`);

    $INPUT.addEventListener("keyup",(e) => {
        let value = (e.target.value).toLowerCase();
        
        if (e.key === "Escape") e.target.value = "";
        
        $ELEMENTOS.forEach((el) => {
            el.textContent.toLowerCase().includes(value)
            ? el.classList.remove("filter")
            : el.classList.add("filter");
        })
    })
}