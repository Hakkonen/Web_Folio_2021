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
        // const root = document.getElementById("root")
        // if(root.classList.contains("theme--light")) {
        //     root.classList.remove("theme--light")
        //     root.classList.add("theme--dark")
        // } else {
        //     root.classList.add("theme--light")
        //     root.classList.remove("theme--dark")
        // }
        let groups = document.querySelectorAll(".parallax__group")
        for(const el of groups) {
            el.classList.toggle("transform")
        }
    })

    // GROUP ONE
    const parallaxGroupOne = elFactory("div", {id: "group-one", class: "parallax__group"})

    // Name header
    const parallaxOne = elFactory("div", {class: "parallax__layer parallax__layer--base"},
        elFactory("div", {class: "header"},
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )

    // const parallaxOneSubHeader = elFactory("div", {class: "parallax__layer parallax__layer--six folio__sub-header"}, "WEB DEV")

    parallaxGroupOne.appendChild(parallaxOne)

    // GROUP TWO
    const parallaxGroupTwo = elFactory("div", {id: "group-two",class: "parallax__group"})

    // P2 page -- folio
    const parallaxTwo = elFactory("div", {class: "parallax__layer parallax__layer--base"},
        elFactory("div", {class: "title"},
            elFactory("div", {class: "folio__header"}, "FOLIO")
        )
    )

    const parallaxThree = elFactory("div", {class: "parallax__layer parallax__layer--back bg-dark-green"}, 
        elFactory('div', {class: "title"}, "layer four")
    )

    parallaxGroupTwo.appendChild(parallaxTwo)
    parallaxGroupTwo.appendChild(parallaxThree)

    // GROUP THREE

    const parallaxGroupThree = elFactory("div", {id: "group-three", class: "parallax__group"})

    const parallaxFour = elFactory("div", {class: "parallax__layer parallax__layer--base"}, 
        elFactory('div', {class: "title"}, "layer four")
    )

    parallaxGroupThree.appendChild(parallaxFour)

    // GROUP FOUR

    const parallaxGroupFour = elFactory("div", {id: "group-four", class: "parallax__group"})

    const parallaxFive = elFactory("div", {class: "parallax__layer parallax__layer--deep bg-light"})

    parallaxGroupFour.appendChild(parallaxFive)

    return ([
        mode,
        parallaxGroupOne,
        parallaxGroupTwo,
        parallaxGroupThree,
        parallaxGroupFour
    ])
}

export default App