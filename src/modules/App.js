import elFactory from "../functions/elementFactory"
import { menu } from "../modules/Menu"
import { main } from "../modules/Main"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"

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
        // Set opacity to 1 for main page
        document.getElementById("main").style.opacity = 1

        // // DEV ONLY
        // document.getElementById("folio").style.opacity = 1

        // Get header element of splash and blur
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
            }, [80])
            // add zero back in
        }, [200])

        // Spin text
        function rotateText(element, angle) {
            setInterval(() => {
                if(document.getElementById(element)) {
                    document.getElementById(element).style.transform = `rotate(${angle}deg)`
                    angle == -360 ? angle = 0 : angle -= 1
                } else {
                    angle = 0
                }
            }, 30)
        }
        rotateText("circle-text", 0)
    }

    return ([
        splash,
        menu(),
        main(),
        // folio(projects),
    ])
}

export default App