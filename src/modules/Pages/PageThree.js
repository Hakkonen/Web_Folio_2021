import elFactory from "../../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "page-three "}, "Test")

    return page
}