import elFactory from "../functions/elementFactory"
import web1 from "../images/web1.png"
import web2 from "../images/web2.png"
import web3 from "../images/web3.png"
import sam1 from "../images/sam1.jpg"

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
            }, [2000])
            // add zero back in
        }, [300])
    }

    // Night mode
    const mode = elFactory("span", {class: "mode no-select"}, "debug")
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

    // Top backing layer
    const parallaxBackground = elFactory("div", {class: "parallax__layer parallax__layer--back parallax--background"})

    // GROUP ONE
    const parallaxGroupOne = elFactory("div", {id: "group-one", class: "parallax__group"})

    const parallaxOne = elFactory("div", {class: "parallax__layer parallax__layer--fore parallax--one"})

    const heroImage = elFactory("div", {class: "hero-image"},
        elFactory("img", {src: sam1})
    )

    const heroHeader = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--header"},
        elFactory("span", {id: "header", class: "hero-header"},
            elFactory("span", {}, "WEB"),
            elFactory("br", {}),
            elFactory("span", {}, "DEV &"),
            elFactory("br", {}),
            elFactory("span", {}, "PHOTO"),
            elFactory("br", {}),
            elFactory("span", {}, "GRAPHY"),
        )
    )

    parallaxGroupOne.appendChild(heroHeader)
    parallaxOne.appendChild(heroImage)
    parallaxGroupOne.appendChild(parallaxOne)
    parallaxGroupOne.appendChild(parallaxBackground)
    

    // GROUP TWO
    const parallaxGroupTwo = elFactory("div", {id: "group-two",class: "parallax__group"})

    // P2 page -- folio
    const parallaxTwo = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--two"},
        elFactory("div", {class: "parallax--two__header"},
            elFactory("div", {class: "title"}, "layer two")
        )
    )

    const parallaxThree = elFactory("div", {class: "parallax__layer parallax__layer--back parallax--three"}, 
        elFactory('div', {class: "title"})
    )

    const parallaxBackgroundDeep = elFactory("div", {class: "parallax__layer parallax__layer--deep parallax--background"})

    parallaxGroupTwo.appendChild(parallaxTwo)
    parallaxGroupTwo.appendChild(parallaxThree)
    parallaxGroupTwo.appendChild(parallaxBackgroundDeep)
    

    // GROUP THREE

    const parallaxGroupThree = elFactory("div", {id: "group-three", class: "parallax__group"})

    const parallaxFour = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--four"}, 
        elFactory('div', {class: "title"}, "layer four")
    )

    const parallaxFive = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--five"})

    parallaxGroupThree.appendChild(parallaxFour)
    parallaxGroupThree.appendChild(parallaxFive)

    // // GROUP FOUR

    // const parallaxGroupFour = elFactory("div", {id: "group-four", class: "parallax__group"})

    // const parallaxFive = elFactory("div", {class: "parallax__layer parallax__layer--deep parallax--five"}, "deep bg")

    // parallaxGroupFour.appendChild(parallaxFive)

    // // GROUP FIVE

    // const parallaxGroupFive = elFactory("div", {id: "group-five", class: "parallax__group"})

    // const parallaxSix = elFactory("div", {class: "parallax__layer parallax__layer--base parallax--six"}, "layer six")

    // parallaxGroupFive.appendChild(parallaxSix)

    // Post layer
    const backgroundParallaxBottom = elFactory("div", {class: "parallax__layer parallax__layer--deep parallax--background"})

    return ([
        // backgroundParallaxTop,
        splash,
        mode,
        parallaxGroupOne,
        parallaxGroupTwo,
        parallaxGroupThree,
        // parallaxGroupFour,
        // parallaxGroupFive
        // backgroundParallaxBottom
    ])
}

export default App