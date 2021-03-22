import elFactory from "../functions/elementFactory"

export const folio = () => {
    const folio = elFactory("div", {class: "folio"}, "folio")
    folio.addEventListener("click", () => {
        console.log("folio")
        const cube = document.querySelector(".cube")
        cube.classList.remove("show-front")
        cube.classList.add("show-right")
    })
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