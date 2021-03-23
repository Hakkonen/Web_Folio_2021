import elFactory from "../functions/elementFactory"
import * as pageOne from "../modules/PageOne/PageOne"
import * as pageTwo from "../modules/Pages/PageTwo"

export const folio = () => {
    const folio = elFactory("div", {class: "folio"}, 
        elFactory("span", {class: "folio-text"}, "folio")
    )
    folio.addEventListener("click", () => {
        // Define root div
        const parent = document.getElementById("root")
        // Define side buttons
        const info = document.querySelector(".info")
        const social = document.querySelector(".social")
        const mode = document.querySelector(".mode")

        const menu = document.querySelector(".folio-text")
        if(menu.innerHTML == "folio") {
             // Change "folio" to "home"
            menu.innerHTML = "home"

            // Remove page one and render page two
            const pageOneChild = document.querySelector(".page-one")
            parent.removeChild(pageOneChild)
            parent.appendChild(pageTwo.body())

            // Hide side buttons
            // info.classList.add("hidden")
            // social.classList.add("hidden")
            // mode.classList.add("hidden")
        } else if (menu.innerHTML == "home") {
            // Reverse process
            menu.innerHTML = "folio"
            
            const pageTwoChild = document.querySelector(".page-two")
            parent.removeChild(pageTwoChild)
            parent.appendChild(pageOne.body())

            // info.classList.remove("hidden")
            // social.classList.remove("hidden")
            // mode.classList.remove("hidden")
        }
        
    })
    // const folioMenu = elFactory("div", {class: "folio-menu visible"}, 

    // )

    // const frontEnd = elFactory("span", {class: "folio-menu-item-one"}, "front-end")
    // frontEnd.addEventListener("click", () => {

    // })
    // folioMenu.appendChild(frontEnd)

    // const programming = elFactory("span", {class: "folio-menu-item-two"},"programming")
    // programming.addEventListener("click", () => {

    // })
    // folioMenu.appendChild(programming)

    // const photography = elFactory("span", {class: "folio-menu-item-three"}, "photography")
    // photography.addEventListener("click", () => {

    // })
    // folioMenu.appendChild(photography)

    // folio.appendChild(folioMenu)

    return (
        folio
    )
}

export const info = () => {
    const info = elFactory("div", {class: "info"}, "info")
    info.addEventListener("click", () => {
        console.log("info")
    })
    return (
        info
    )
}

export const mode = () => {
    const mode =  elFactory("div", {class: "mode"}, "night")
    mode.addEventListener("click", () => {
        // Finds the root ID
        const root = document.getElementById("root")
        // If root is light theme then alternate, etc.
        if(root.classList.contains("theme--light")) {
            root.setAttribute("class", "root theme--dark")
            mode.innerHTML = "day"
            console.log("day")
        } else {
            root.setAttribute("class", "root theme--light")
            mode.innerHTML = "night"
            console.log("night")
        }
    })
    return (
        mode
    )
}

export const social = () => {
    const social = elFactory("div", {class: "social"}, "social")
    social.addEventListener("click", () => {
        console.log("social")
    })
    return (
        social
    )
}