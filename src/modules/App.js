import elFactory from "../functions/elementFactory"
import { main } from "../modules/Main"
import sam1 from "../images/sam1.jpg"
import travel1 from "../images/travel1.jpg"
import web1 from "../images/web1.png"

const App = () => {
    // Splash layer & header card
    const splash = elFactory("div", {id: "splash", class: "splash"},
        elFactory("div", {id: "header", class: "header"},
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )

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

    // Folio page
    const folio = elFactory("div", {id: "folio", class: "folio"})
    const folioLeft = elFactory("div", {id: "folio__left", class: "folio__left"})
    const folioRight = elFactory("div", {id: "folio__right", class: "folio__right"})

    // Left side
    const heroImage = elFactory("div", {class: "folio__hero"},
        elFactory("img", {src: web1})
    )
    const projectSelector = elFactory("div", {id: "project-selector", class: "folio__project-selector"})
    const projectSelectorPage = elFactory("div", {class: "project-selector__page"},
        elFactory("span", {id: "current-project"}, "01"),
        elFactory("span", {style: "padding: 0 1ch 0 1ch"}, " / "),
        elFactory("span", {id: "total-projects"}, "03"),
    )
    const projectSelectorNav = elFactory("div", {class: "project-selector__nav"}, 
        elFactory("span", {id: "prev"}, "prev"),
        elFactory("span", {style: "padding: 0 1ch 0 1ch"}, " / "),
        elFactory("span", {id: "next"}, "next")
    )

    projectSelector.appendChild(projectSelectorNav)
    projectSelector.appendChild(projectSelectorPage)

    folioLeft.appendChild(heroImage)
    folioLeft.appendChild(projectSelector)

    // Right side
    const heroHeader = elFactory("div", {class: "folio__header"},
        elFactory("span", {}, "Project One")
    )
    const heroText = elFactory("div", {class: "folio__text"},
        elFactory("span", {}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut laoreet purus. Vestibulum ultrices accumsan magna, sagittis lacinia arcu ornare vitae. Cras fermentum est at magna tincidunt, in convallis ante pellentesque. Nulla facilisi. Suspendisse potenti. Nam viverra ac ipsum sed ornare. Integer sit amet tellus eu eros iaculis semper id non erat. Curabitur metus nibh, pharetra at ullamcorper eu, posuere vitae magna. Maecenas laoreet lectus in malesuada dapibus. Maecenas sed nunc at ante ornare rhoncus ut eget leo. Maecenas accumsan ut ligula a pulvinar.")
    )

    folioRight.appendChild(heroHeader)
    folioRight.appendChild(heroText)

    folio.appendChild(folioLeft)
    folio.appendChild(folioRight)

    // Header animation
    window.onload = () => {
        const header = document.getElementById("header")
        header.style.opacity = "1"
        header.style.filter = "blur(0)"
        console.log("loaded")
        // Fade in and out header card
        setTimeout(() => {
            const getSplash = document.getElementById("splash")
            getSplash.style.opacity = 0;
            getSplash.style.filter = "blur(1.5rem)"
            // Removes div after animation
            setTimeout(() => {
                document.getElementById("root").removeChild(getSplash)
            }, [200])
            // add zero back in
        }, [300])
    }

    return ([
        splash,
        menu,
        // main(),
        folio,
    ])
}

export default App