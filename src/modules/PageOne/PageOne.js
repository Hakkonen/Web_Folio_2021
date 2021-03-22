import elFactory from "../../functions/elementFactory"
import { header } from "./Header"
import { subHeader } from "./SubHeader"
import typeWriter from "../../functions/typeWriter"

export const body = () => {
    const page = elFactory("div", {class: "page-one cube__face cube__face--front"})
    page.appendChild(header())
    page.appendChild(subHeader())
    
    return page
}