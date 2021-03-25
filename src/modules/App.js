import elFactory from "../functions/elementFactory"
import { menu } from "../modules/Menu"
import { main } from "../modules/Main"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"
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


    // Header animation
    window.onload = () => {
        // Set opacity to 1
        document.getElementById("main").style.opacity = 1

        // // DEV ONLY
        // document.getElementById("folio").style.opacity = 1

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
        menu(),
        main(),
        // folio(projects),
    ])
}

export default App