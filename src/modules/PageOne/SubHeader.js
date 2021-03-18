import elFactory from "../../functions/elementFactory"

export const subHeader = () => {
    const subHeader = elFactory("div", {class: "sub-header"}, 
        elFactory("span", {}, "Jayden is a "),
        elFactory("span", {class: "highlight"}, "front-end dev"),
        elFactory("br", {}),
        elFactory("span", {}, "based in Melbourne"),
        elFactory("br", {}),
        elFactory("span", {}, "Australia")
    )

    return subHeader
}