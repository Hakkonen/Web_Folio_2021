import elFactory from "../functions/elementFactory"
import { main } from "../modules/Main"
import sam1 from "../images/sam1.jpg"
import travel1 from "../images/travel1.jpg"

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

    console.log(main())

    // Folio page

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
        main(),
    ])
}

export default App