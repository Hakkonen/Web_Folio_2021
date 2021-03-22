import elFactory from "../../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "page-four cube__face cube__face--back"}, "Test")

    return page
}