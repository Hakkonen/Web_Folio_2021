import elFactory from "../functions/elementFactory"
import sam1 from "../images/sam1.jpg"
import travel1 from "../images/travel1.jpg"

export const main = () => {
    // Main page
    const main = elFactory("div", {id: "main", class: "main"})
    const mainLeft = elFactory("div", {id: "main__left", class: "main__left"})
    const mainRight = elFactory("div", {id: "main__right", class: "main__right"})

    const mainHeader = elFactory("div", {class: "main__header"},
        elFactory("span", {class: "main__header--web"}, "WEB"),
        elFactory("span", {class: "main__header--dev"}, "DEV"),
        elFactory("span", {class: "main__header--and"}, "&"),
        elFactory("span", {class: "main__header--photo"}, "PHOTO"),
        elFactory("span", {class: "main__header--graphy"}, "GRAPHY"),
    )
    const mainHero = elFactory("div", {class: "main__hero"},
        elFactory("img", {src: travel1})
    )
    const subHeader = elFactory("div", {class: "sub-header"},
        elFactory("span", {class: "sub-header__text"}, "Jayden is a photographer and front-end web developer based in Melbourne, Australia. With a keen eye for design which is carried through his multi-disciplinary interests, I’m always up for a chat about a project you would like developed, or even to just say hi.")
    )
    const showMeMore = elFactory("div", {class: "main__more"},
        elFactory("span", {}, "Show me more...")
    )

    // More button / Show folio
    showMeMore.addEventListener("click", () => {
        // Moves and hides main to left
        const main = document.getElementById("main")
        main.style.transition = ".3s all"
        main.style.opacity = "1"
        main.style.opacity = "0"
        main.style.left = "-100vw"

    })

    mainLeft.appendChild(mainHeader)
    mainLeft.appendChild(showMeMore)
    mainRight.appendChild(mainHero)
    mainRight.appendChild(subHeader)
    main.appendChild(mainLeft)
    main.appendChild(mainRight)

    return (
        main
    )
}
