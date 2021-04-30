//Import the function that saves a custom order
import { colorList } from "./color.js"
import { getOrders, getInterior, getColor, getTechnology, getWheels } from "./database.js"
import { interiorList } from "./interior.js"

//Build the html for the new order
const orderHTML = (order) => {
    
//Save the return values of the imported functions
const interiors = getInterior()
const colors = getColor()
const technologies = getTechnology()
const wheels = getWheels()

//Build functions to find the price of the order

const findInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const findColor = colors.find(
    (color) => {
        return color.id === order.colorId
    }
)

const findTechnology = technologies.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)

const findWheels = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelsId
    }
)

//Add all the prices together into one variable
const interiorPrice = findInterior.price
const colorPrice = findColor.price
const technologyPrice = findTechnology.price
const wheelsPrice = findWheels.price

const totalPrice = wheelsPrice + technologyPrice + colorPrice + interiorPrice


    return `<li>
    Order #${order.id} was placed on ${order.timestamp} and costs $${totalPrice}
    </li>`
}

//Create a function that puts the custom orders into a html string
export const Orders = () => {
    const orders = getOrders()

    let html ="<ul>"

    const listItems = orders.map(orderHTML)

    html += listItems.join("")
    html += "</ul>"

    return html
}