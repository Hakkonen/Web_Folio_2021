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
    const parallaxOne = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--one"},
        elFactory("div", {id: "header",class: "header"},
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )

    // Header animation
    window.onload = () => {
        const header = document.getElementById("header")
        header.style.opacity = "1"
        header.style.filter = "blur(0)"
        console.log("loaded")
    }

    parallaxGroupOne.appendChild(parallaxOne)

    // GROUP TWO
    const parallaxGroupTwo = elFactory("div", {id: "group-two",class: "parallax__group"})

    // P2 page -- folio
    const parallaxTwo = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--two"},
        elFactory("div", {class: "parallax--two__header"}, "FOLIO")
    )

    const parallaxTwoSubHeader = elFactory("div", {class: "parallax__layer parallax__layer--fore parallax--two__subheader"}, "WEB DEV")

    const parallaxThree = elFactory("div", {class: "parallax__layer parallax__layer--back parallax--three"}, 
        elFactory('div', {class: "title"})
    )

    const parallaxGroupTwoTile__one = elFactory("div", {class: "parallax__layer parallax__layer--fore--tile1 parallax__tiles--one"}, 
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web1}),
        ),
    )

    const parallaxGroupTwoTile__two = elFactory("div", {class: "parallax__layer parallax__layer--fore--tile2 parallax__tiles--two"},
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web3}),
        )
    )

    const parallaxGroupTwoTile__three = elFactory("div", {class: "parallax__layer parallax__layer--fore--tile3 parallax__tiles--three"},
        elFactory("div", {class: "tile"}, 
            elFactory("img", {src: web2}),
        ),
    )

    parallaxGroupTwo.appendChild(parallaxTwo)
    parallaxGroupTwo.appendChild(parallaxTwoSubHeader)
    parallaxGroupTwo.appendChild(parallaxThree)
    parallaxGroupTwo.appendChild(parallaxGroupTwoTile__one)
    parallaxGroupTwo.appendChild(parallaxGroupTwoTile__two)
    parallaxGroupTwo.appendChild(parallaxGroupTwoTile__three)

    // GROUP THREE

    const parallaxGroupThree = elFactory("div", {id: "group-three", class: "parallax__group"})

    const parallaxFour = elFactory("div", {class: "parallax__layer parallax__layer--base"}, 
        elFactory('div', {class: "title"}, "layer four")
    )

    parallaxGroupThree.appendChild(parallaxFour)

    // GROUP FOUR

    const parallaxGroupFour = elFactory("div", {id: "group-four", class: "parallax__group"})

    const parallaxFive = elFactory("div", {class: "parallax__layer parallax__layer--deep parallax--five"}, "deep bg")

    parallaxGroupFour.appendChild(parallaxFive)

    // GROUP FIVE

    const parallaxGroupFive = elFactory("div", {id: "group-five", class: "parallax__group"})

    const parallaxSix = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--six"}, "layer six")

    parallaxGroupFive.appendChild(parallaxSix)

    return ([
        mode,
        parallaxGroupOne,
        parallaxGroupTwo,
        parallaxGroupThree,
        parallaxGroupFour,
        parallaxGroupFive
    ])
}

export default App