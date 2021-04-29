//Import the colors from the database
import {getColor, setColor} from "./database.js"

//Save the return values of the imported functions to variables
const colors = getColor()

//Create a function that iterates through the colors from the database and generates a list of the colors as a string
export const colorList = () => {
    let html = `<ul>`

    const listItems = colors.map(color => {
        return `<li>
        <input type="radio" name="color" value="${color.id}" /> ${color.paint}
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
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)