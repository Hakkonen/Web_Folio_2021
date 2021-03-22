import elFactory from "../functions/elementFactory"

export const folio = () => {
    const folio = elFactory("div", {class: "folio"}, 
        elFactory("span", {class: "folio-text"}, "folio")
    )
    const folioMenu = elFactory("div", {class: "folio-menu visible"}, 
        // elFactory("p", {class: "folio-menu-item-one"}, "front-end"),
        // elFactory("span", {class: "folio-menu-item-two"}, "programming"),
        // elFactory("span", {class: "folio-menu-item-three"}, "photography")
    )

    const frontEnd = elFactory("span", {class: "folio-menu-item-one"}, "front-end")
    frontEnd.addEventListener("click", () => {
        // Rotate cube
        const cube = document.querySelector(".cube")
        cube.classList.remove("show-front")
        cube.classList.add("show-right")

        // Change "folio" to "home"
        const folioText = document.querySelector(".folio-text")
        folioText.innerHTML = "home"

        folioText.addEventListener("click", () => {
            cube.classList.remove("show-right")
            cube.classList.add("show-front")
            folioText.innerHTML = "folio"
        })
    })
    folioMenu.appendChild(frontEnd)

    const programming = elFactory("span", {class: "folio-menu-item-two"},"programming")
    programming.addEventListener("click", () => {
        const cube = document.querySelector(".cube")
        cube.classList.remove("show-front")
        cube.classList.add("show-right")
    })
    folioMenu.appendChild(programming)

    const photography = elFactory("span", {class: "folio-menu-item-three"}, "photography")
    photography.addEventListener("click", () => {
        const cube = document.querySelector(".cube")
        cube.classList.remove("show-front")
        cube.classList.add("show-right")
    })
    folioMenu.appendChild(photography)

    // folio.addEventListener("click", () => {
    //     console.log("folio")
    //     const menu = document.querySelector(".folio-menu")
    //     menu.classList.toggle("visible")
    //     menu.classList.toggle("invisible")
    // })
    folio.appendChild(folioMenu)

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