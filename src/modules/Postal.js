import elFactory from "../functions/elementFactory"

export const postalLine = () => {
    const postal = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    // postal.setAttribute("preserveAspectRatio", "xMidYMid meet")
    // postal.setAttribute("x", "150")
    // postal.setAttribute("y", "150")
    // postal.setAttribute("viewbox", "0 0 100 33")
    // postal.setAttribute("width", "300")
    // postal.setAttribute("height", "200")
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path")
    line.setAttribute("stroke", "#333333")
    line.setAttribute("stroke-width", "1")
    line.setAttribute("fill", "none")
    line.setAttribute("opacity", "1")
    line.setAttribute("stroke-linecap", "round")
    line.setAttribute("stroke-linejoin", "round")
    line.setAttribute("d", "M4,80 C 150,10 150,150 300,70")
    // line.setAttribute("d", "M4,155 C 150,80 150,220 300,150")

    postal.appendChild(line)
        // <svg>
        //     <path stroke="#333333" stroke-width="1" fill="none" opacity="1" stroke-linecap="round" stroke-linejoin="round" d="M4,150 C 146,81 154,219 294,149" />
        // </svg>
    
    
    console.log(postal)
    return postal
}

// export const postalLine = () => {
//     const postalLine = elFactory("svg", {viewbox: "0 0 300 300"}, 
//         elFactory("path", {stroke: "#333333", fill: 'none', "stroke-width": "1", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M4,150 C 146,81 154,219 294,149"})
//     )
//     // <path stroke="#333333" stroke-width="1" fill="none" opacity="1" stroke-linecap="round" stroke-linejoin="round" d="M4,150 C 146,81 154,219 294,149" />

//     return postalLine

//     // <svg viewBox='-450 -450 900 900'>
//     //     <path d='M-431,7
//     //         C-102,-314 139,332 424,7'/>
//     // </svg>

// }