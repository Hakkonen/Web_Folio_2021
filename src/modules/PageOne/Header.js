import elFactory from "../../functions/elementFactory"

export const header = () => {
    const header = elFactory("div", {class: "header"}, 
        elFactory("div", {class: "header-square"}, 
            elFactory("span", {}, "JAYDEN"),
            elFactory("br", {}),
            elFactory("span", {}, "REYNOLDS"),
        )
    )

    // header.addEventListener("click", () => {
    //     const cube = document.querySelector(".cube")
    //     cube.classList.remove("show-front")
    //     cube.classList.add("show-right")
    // })

    return (
        header
    )
}