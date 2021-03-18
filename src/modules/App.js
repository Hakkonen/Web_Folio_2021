import elFactory from "../functions/elementFactory"

import * as links from "./Links"
import * as pageOne from "./PageOne/PageOne"

const App = () => {
    

    return ([
        // Links
        links.contact(),
        links.info(),
        links.mode(),
        links.social(),

        // PAGE ONE
        pageOne.body()
        
        // Header
        

        // SubHeader
    ])
}

export default App