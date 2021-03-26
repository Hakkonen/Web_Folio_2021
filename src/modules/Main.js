import elFactory from "../functions/elementFactory"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"
import sam1 from "../images/sam1.jpg"
import travel1 from "../images/travel1.jpg"
import travel2 from "../images/travel2.jpg"

export const main = () => {
    // Main page
    const main = elFactory("div", {id: "main", class: "main"})
    const mainLeft = elFactory("div", {id: "main__left", class: "main__left"})
    const mainRight = elFactory("div", {id: "main__right", class: "main__right"})

    const mainHeader = elFactory("div", {class: "main__header"},
        elFactory("div", {class: "main__header--web"}, "WEB"),
        elFactory("div", {class: "main__header--dev"}, "DEV"),
        elFactory("div", {class: "main__header--and"}, "&"),
        elFactory("div", {class: "main__header--photo"}, "PHOTO"),
        elFactory("div", {class: "main__header--graphy"}, "GRAPHY"),
    )
    const mainHero = elFactory("div", {class: "main__hero"},
        elFactory("img", {src: travel1})
    )
    const subHeader = elFactory("div", {class: "sub-header"},
        elFactory("span", {class: "sub-header__text"}, "Jayden is a photographer and front-end web developer based in Melbourne, Australia. With a keen eye for design which is carried through his multi-disciplinary interests, he's always up for a chat about a project you would like developed, or even to just say hi.")
    )
    const showMeMore = elFactory("div", {class: "main__more"},
        elFactory("span", {}, "Show me more...")
    )

    // More button / Show folio
    showMeMore.addEventListener("click", () => {
        // Fades out element
        const main = document.getElementById("main")
        main.style.transition = ".3s all"
        main.style.opacity = "1"
        main.style.opacity = "0"
        setTimeout(() => {
            document.getElementById("root").removeChild(main)
            document.getElementById("root").appendChild(folio(projects))
            setTimeout(() => {
                document.getElementById("folio").style.opacity = 1
            }, [50])
        }, [500])
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
