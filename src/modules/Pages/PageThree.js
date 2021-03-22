import elFactory from "../../functions/elementFactory"

export const body = () => {
    const page = elFactory("div", {class: "page-three cube__face cube__face--left"}, "Test")

    return page
}