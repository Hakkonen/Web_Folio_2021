import web1 from "../images/web1.png"
import web2 from "../images/web2.png"
import web3 from "../images/web3.png"

export const projects = [
    {
        image: web1,
        header: "Bill Buster",
        text: `
        <h3>Stack: JS & React.</h3>
        <p>
        Bill Buster is a web app that utilises an algorithm to split the daily cost of a bill between present housemates. While most bills are simple enough to calculate: simply divide the cost between the number of housemates, things get complicated quickly when there are people moving in, out, or simply away for chunks of the bill period.
        </p>
        <p>
        The stack primarily utilised is React, along with React Hooks for state control. Bill Buster's algorithm works by calculating the bill's per diem, and then dividing that by the number of housemates present on the day, before iterating days - 1 over each present housemate until they have 0 days present.
        </p>
        <p>
        Bill Buster is a web app that utilises an algorithm to split the daily cost of a bill between present housemates. While most bills are simple enough to calculate: simply divide the cost between the number of housemates, things get complicated quickly when there are people moving in, out, or simply away for chunks of the bill period.
        </p>
        <p>
        The stack primarily utilised is React, along with React Hooks for state control. Bill Buster's algorithm works by calculating the bill's per diem, and then dividing that by the number of housemates present on the day, before iterating days - 1 over each present housemate until they have 0 days present.
        </p>
        `
    },
    {
        image: web2,
        header: "Project Two",
        text: "Duo! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut laoreet purus. Vestibulum ultrices accumsan magna, sagittis lacinia arcu ornare vitae. Cras fermentum est at magna tincidunt, in convallis ante pellentesque. Nulla facilisi. Suspendisse potenti. Nam viverra ac ipsum sed ornare. Integer sit amet tellus eu eros iaculis semper id non erat. Curabitur metus nibh, pharetra at ullamcorper eu, posuere vitae magna. Maecenas laoreet lectus in malesuada dapibus. Maecenas sed nunc at ante ornare rhoncus ut eget leo. Maecenas accumsan ut ligula a pulvinar."
    },
    {
        image: web3,
        header: "Project Three",
        text: "Troi! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut laoreet purus. Vestibulum ultrices accumsan magna, sagittis lacinia arcu ornare vitae. Cras fermentum est at magna tincidunt, in convallis ante pellentesque. Nulla facilisi. Suspendisse potenti. Nam viverra ac ipsum sed ornare. Integer sit amet tellus eu eros iaculis semper id non erat. Curabitur metus nibh, pharetra at ullamcorper eu, posuere vitae magna. Maecenas laoreet lectus in malesuada dapibus. Maecenas sed nunc at ante ornare rhoncus ut eget leo. Maecenas accumsan ut ligula a pulvinar."
    }
]