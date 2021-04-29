//Import the technology packages from the database
import { getTechnology, setTechnology } from "./database.js"

//Save the return value of the imported function to a variable
const packages = getTechnology()

//Create a function that iterates through the technology packages from the database and generates a list of the 
//technology packages as a string
export const packageList = () => {
    let html = `<ul>`

    const listItems = packages.map(technology => {
        return `<li>
        <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
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
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)