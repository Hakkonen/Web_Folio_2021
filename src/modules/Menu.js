import elFactory from "../functions/elementFactory"
import { main } from "../modules/Main"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"

export const menu = () => {
        // Menu bar
        const menu = elFactory("div", {id: "menu", class: "menu"},
        elFactory("div", {class: "menu__left"}),
        elFactory("div", {class: "menu__center"},
            elFactory("span", {id: "menu__logo", class: "menu__logo"}, "jayden reynolds"),
        ),
        elFactory("div", {class: "menu__right"},
            elFactory("span", {id: "menu__folio", class: "menu__folio"}, "folio"),
            elFactory("span", {id: "menu__about", class: "menu__about"}, "about"),
            elFactory("span", {id: "menu__contact", class: "menu__contact"}, "contact"),
        )
    )

    // Menu reload main
    setTimeout(() => {
        const menuButton = document.getElementById("menu__logo")
        menuButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(document.getElementById("folio")) {
                const childNode = document.getElementById("folio")
                childNode.style.opacity = 0
                setTimeout(() => {
                    root.removeChild(childNode)
                    root.appendChild(main())
                    setTimeout(() => {
                        document.getElementById("main").style.opacity = 1
                    }, [50])
                }, [1000])
            }
        })

        const folioButton = document.getElementById("menu__folio")
        folioButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(document.getElementById("main")) {
                const childNode = document.getElementById("main")
                childNode.style.opacity = 0
                setTimeout(() => {
                    root.removeChild(childNode)
                    root.appendChild(folio(projects))
                    setTimeout(() => {
                        document.getElementById("folio").style.opacity = 1
                    }, [50])
                }, [1000])
            }
            // if(root.childNodes[2].id !== "folio") {
            //     const childNode = root.childNodes[2]
            //     childNode.style.opacity = 0
            //     setTimeout(() => {
            //         root.removeChild(childNode)
            //         root.appendChild(folio(projects))
            //         setTimeout(() => {
            //             document.getElementById("folio").style.opacity = 1
            //         }, [50])
            //     }, [1000])
            // }
        })
    }, [1000])

    return (
        menu
    )
}