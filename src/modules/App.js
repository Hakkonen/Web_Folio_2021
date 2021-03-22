import elFactory from "../functions/elementFactory"

import * as links from "./Links"
import { cube } from "./Cube"
import * as pageOne from "./PageOne/PageOne"
import * as pageTwo from "./Pages/PageTwo"

const App = () => {
    

    return ([
        // Links
        links.folio(),
        links.info(),
        links.mode(),
        links.social(),

        // Combined cube faces
        cube()
    ])
}

export default App