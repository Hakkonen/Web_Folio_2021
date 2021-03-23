import elFactory from "../functions/elementFactory"

import * as links from "./Links"
import { header } from "./PageOne/Header"
import * as pageOne from "./PageOne/PageOne"
import * as pageTwo from "./Pages/PageTwo"

const App = () => {
    const linksDiv = elFactory("div", {class: "linksDiv"})
    linksDiv.appendChild(links.folio())
    linksDiv.appendChild(links.info())
    linksDiv.appendChild(links.mode())
    linksDiv.appendChild(links.social())

    // Animations
    window.onload = function() {
        // Fade in header
        // const headerFade = document.querySelector(".header")
        // headerFade.style.opacity = "1"

        // Fade in subhead
        const subheaderFade = document.querySelector(".sub-header")
        subheaderFade.style.opacity = "1"

        // Links fade in
        const contactFade = document.querySelector(".folio")
        contactFade.style.opacity = "1"
        const infoFade = document.querySelector(".info")
        infoFade.style.opacity = "1"
        const modeFade = document.querySelector(".mode")
        modeFade.style.opacity = "1"
        const socialFade = document.querySelector(".social")
        socialFade.style.opacity = "1"

        setTimeout(() => {
            // headerFade.classList.toggle("fade-in-header")
            subheaderFade.classList.toggle("fade-in-subheader")
            contactFade.classList.toggle("fade-in-links")
            infoFade.classList.toggle("fade-in-links")
            modeFade.classList.toggle("fade-in-links")
            socialFade.classList.toggle("fade-in-links")
        }, [3000])
    }

    return ([
        // Links
        linksDiv,

        pageOne.body(),
        pageTwo.body()
    ])
}

export default App