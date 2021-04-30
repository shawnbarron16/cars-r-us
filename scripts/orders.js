//Import the function that saves a custom order
import { getOrders } from "./database.js"

//Build the html for the new order
const orderHTML = (order) => {
    return `<li>
    Order #${order.id} was placed on ${order.timestamp}
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