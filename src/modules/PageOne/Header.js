import elFactory from "../../functions/elementFactory"

export const header = () => {
    const header = elFactory("div", {class: "header"}, 
        elFactory("div", {class: "header-square"}, 
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )
    return (
        header
    )
}