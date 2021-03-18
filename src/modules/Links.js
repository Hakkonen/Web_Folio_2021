import elFactory from "../functions/elementFactory"

export const contact = () => {
    const contact = elFactory("div", {class: "contact"}, "contact")
    contact.addEventListener("click", () => {
        console.log("contact")
    })
    return (
        contact
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