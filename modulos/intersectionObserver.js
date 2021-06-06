const d = document;

export default function applyIntersection() {
    const $SECTIONS = d.querySelectorAll("[data-section]");
    const $NAV_ITEM = d.querySelectorAll("[data-item]")
    
    const options = {
        // rootMargin: "0px 0px -10px 0px",
        threshold: .7
    }

    const callback = function(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("observer");
                
                $NAV_ITEM.forEach((item) => {
                    let href = item.getAttribute("href");

                    if (href === `#${entry.target.id}`) {
                        item.classList.add("background__nav")
                    } else {
                        item.classList.remove("background__nav")
                    }
                })
                
            } else {
                entry.target.classList.remove("observer");
            }
        })
    }

    let observer = new IntersectionObserver(callback,options);

    $SECTIONS.forEach(element => observer.observe(element));
}