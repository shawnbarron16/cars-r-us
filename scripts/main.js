//Import the function that generates the html for the whole page
import { cars } from "./cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = cars()
}

renderAllHTML()