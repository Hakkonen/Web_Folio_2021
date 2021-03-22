import elFactory from "../../functions/elementFactory"
import web1 from "../../images/web1.png"
import web2 from "../../images/web2.png"
import web3 from "../../images/web3.png"

export const body = () => {
    const page = elFactory("div", {class: "page-two cube__face cube__face--right "})

    const header = elFactory("div", {class: "alt-header"},
        elFactory("div", {class: "alt-header-square"}, 
            elFactory("span", {}, "FRONT"),
            elFactory("br", {}),
            elFactory("span", {}, "END"),
            elFactory("br", {}),
            elFactory("span", {}, "DEV"),
            )
    )

    const displayCol = elFactory("div", {class: "display-col"},
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web1, alt: "web1"}),
            elFactory("span", {class: "tile-header"}, "BILL BUSTER")
        ),
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web2, alt: "web2"}),
            elFactory("span", {class: "tile-header"}, "SIMPLE NOTE")
        ),
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web3, alt: "web3"}),
            elFactory("span", {class: "tile-header"}, "WORD COUNTER")
        ),
        // elFactory("div", {class: "tile"})
    )

    page.appendChild(header)
    page.appendChild(displayCol)

    return page
}