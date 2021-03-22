import elFactory from "../../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "page-six cube__face cube__face--bottom"}, "Test")

    return page
}