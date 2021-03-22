import elFactory from "../../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "page-five cube__face cube__face--top"}, "Test")

    return page
}