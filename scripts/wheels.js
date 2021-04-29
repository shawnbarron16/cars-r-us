//Import the wheels from the database
import { getWheels, setWheels } from "./database.js"

//Save the return value of the imported function to a variable
const wheels = getWheels()

//Create a function that iterates through the wheels from the database and generates a list of the wheels as a string
export const wheelsList = () => {
    let html = `<ul>`

    const listItems = wheels.map(wheel => {
        return `<li>
        <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.type}
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
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)