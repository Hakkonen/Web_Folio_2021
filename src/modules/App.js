import elFactory from "../functions/elementFactory"

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

    return ([
        
    ])
}

export default App