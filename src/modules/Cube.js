import elFactory from "../functions/elementFactory"
import * as pageOne from "./PageOne/PageOne"
import * as pageTwo from "./Pages/PageTwo"
import * as pageThree from "./Pages/PageThree"
import * as pageFour from "./Pages/PageFour"
import * as pageFive from "./Pages/PageFive"
import * as pageSix from "./Pages/PageSix"

export const cube = () => {
    const div = elFactory("div", {class: "cube show-right"})
    div.appendChild(pageOne.body())
    div.appendChild(pageTwo.body())
    div.appendChild(pageThree.body())
    div.appendChild(pageFour.body())
    div.appendChild(pageFive.body())
    div.appendChild(pageSix.body())

    return div
}