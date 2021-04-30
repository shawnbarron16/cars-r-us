//Import the function that generates the html for the whole page
import { cars } from "./cars-r-us.js"
import { saveOrder } from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = cars()
}

renderAllHTML()

document.addEventListener(
    "click",
    (clivkEvent) => {
        if (clivkEvent.target.id === "orderButton") {
            saveOrder()
            renderAllHTML()
        }
    }
)