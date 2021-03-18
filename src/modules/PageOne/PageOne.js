import elFactory from "../../functions/elementFactory"
import { header } from "./Header"
import { subHeader } from "./SubHeader"

export const body = () => {
    const page = elFactory("div", {class: "page-one"})
    page.appendChild(header())
    page.appendChild(subHeader())
    
    return page
}