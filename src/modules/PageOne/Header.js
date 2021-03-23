import elFactory from "../../functions/elementFactory"

export const header = () => {
    const header = elFactory("div", {class: "header fade-in-header"}, 
        elFactory("div", {class: "header-square"}, 
            elFactory("span", {class: "header-text"}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {class: "header-text"}, "REYNOLDS"),
        )
    )

    return (
        header
    )
}