import elFactory from "../../functions/elementFactory"
import { header } from "./Header"

export const PageOne = () => {
    const page = elFactory("div", {class: "page-one"})
    page.appendChild(header())
    
    return page
}