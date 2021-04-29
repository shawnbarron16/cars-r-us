//Import the interiors from the database
import { getInterior, setInterior } from "./database.js"

//Save the return value of the imported function to a variable
const interiors = getInterior()

//Create a function that iterates through the interiors from the database and generates a list of the interiors as a string
export const interiorList = () => {
    let html = `<ul>`

    const listItems = interiors.map(interior => {
        return `<li>
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.style}
        </li>`
    })

    html += listItems.join("")
    html += `</ul>`

    return html
}

//Add an event listener saves the value of the chosen option
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)