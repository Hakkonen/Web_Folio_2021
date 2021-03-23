import elFactory from "../functions/elementFactory"
import web1 from "../images/web1.png"
import web2 from "../images/web2.png"
import web3 from "../images/web3.png"

const App = () => {

    // Backplate
    const basePage = elFactory("div", {class: "base-page"},
        // elFactory("div", {class: "header"}, "Jayden Reynolds")
    )

    // Night mode
    const mode = elFactory("span", {class: "mode no-select"}, "night")
    mode.addEventListener("click", () => {
        const root = document.getElementById("root")
        if(root.classList.contains("theme--light")) {
            root.classList.remove("theme--light")
            root.classList.add("theme--dark")
        } else {
            root.classList.add("theme--light")
            root.classList.remove("theme--dark")
        }
        
    })

    // Name header
    const pLayerOne = elFactory("div", {class: "parallax__layer parallax__layer--one bg"},
        elFactory("div", {class: "header"},
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )

    const pLayerOneSubHeader = elFactory("div", {class: "parallax__layer parallax__layer--six folio__sub-header"}, "WEB DEV")

    // P2 page -- folio
    const pLayertwo = elFactory("div", {class: "parallax__layer parallax__layer--two pageTwo"},
        elFactory("div", {class: "title"},
            elFactory("div", {class: "folio__header"}, "FOLIO")
        )
    )

    // P3 page
    const pLayerThree = elFactory("div", {class: "parallax__layer parallax__layer--three"})

    // Tiles for parallax layer 3
    const tileOne = elFactory("div", {class: "tile"},
    elFactory("img", {src: web1}))
    tileOne.style.left = "5vw"
    tileOne.style.bottom = "1vh"

    pLayerThree.appendChild(tileOne)

    // P4
    const pLayerFour = elFactory("div", {class: "parallax__layer parallax__layer--four"})

    const tileTwo = elFactory("div", {class: "tile"},
    elFactory("img", {src: web2}))
    tileTwo.style.left = "64vw"

    pLayerFour.appendChild(tileTwo)

    // P5
    const pLayerFive = elFactory("div", {class: "parallax__layer parallax__layer--five"})

    const tileThree = elFactory("div", {class: "tile"},
    elFactory("img", {src: web3}))
    tileThree.style.left = "36vw"

    pLayerFive.appendChild(tileThree)
    
    // Animations

    return ([
        mode,
        pLayerOne,
        pLayerOneSubHeader,
        pLayertwo,
        pLayerThree,
        pLayerFour,
        pLayerFive
    ])
}

export default App