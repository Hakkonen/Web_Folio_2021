import elFactory from "../../functions/elementFactory"
// import typeWriter from "../../functions/typeWriter"
import Typewriter from 'typewriter-effect/dist/core'

export const subHeader = () => {
    const subHeader = elFactory("div", {class: "sub-header fade-in-subheader"}, 
        elFactory("span", {}, "Jayden is a "),
        elFactory("span", {class: "highlight", id: "typewriter"}, "front-end dev"),
        elFactory("br", {}),
        elFactory("span", {}, "based in Melbourne"),
        elFactory("br", {}),
        elFactory("span", {}, "Australia")
    )

    setTimeout(() => {
        let typeWriterID = document.getElementById("typewriter")

        let typewriter = new Typewriter(typeWriterID, {
            loop: false,
            // cursor: "&#x2588;",
        });
        
        typewriter.start()
            .typeString("front-end dev")
            .pauseFor(600)
            .pauseFor(2500)
            .deleteAll()
            .typeString('programmer')
            .pauseFor(600)
            .pauseFor(2500)
            .deleteAll()
            .typeString("photographer")
            .pauseFor(600)
            .pauseFor(2500)
            .deleteAll()
            .typeString("front-end dev")
    }, [100])


    return subHeader
}