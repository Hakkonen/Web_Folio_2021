import elFactory from "../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "parallax"})
    page.appendChild(header())
    page.appendChild(subHeader())
    
    return page
}