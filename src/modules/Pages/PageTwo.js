import elFactory from "../../functions/elementFactory"
import web1 from "../../images/web1.png"
import web2 from "../../images/web2.png"
import web3 from "../../images/web3.png"

export const body = () => {
    const page = elFactory("div", {class: "page-two"})

    // const header = elFactory("div", {class: "alt-header"},
    //     elFactory("div", {class: "alt-header-square"}, 
    //         elFactory("span", {}, "FRONT"),
    //         elFactory("br", {}),
    //         elFactory("span", {}, "END"),
    //         elFactory("br", {}),
    //         elFactory("span", {}, "DEV"),
    //         )
    // )

    // page.appendChild(header)

    return page
}