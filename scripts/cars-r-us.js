//Import all the html functions
import { colorList } from "./color.js"
import { interiorList } from "./interior.js"
import { packageList } from "./technology.js"
import { wheelsList } from"./wheels.js"

//Generate the html for the whole page
export const cars = () => {
    return `
    <h1>Cars-R-Us</h1>
    
    <article class="selections"
        <section class ="selections__color">
            <h2>Color</h2>
            ${colorList()}
        </section>
        <section class="selection__interior">
            <h2>Interior</h2>
            ${interiorList()}
        </section>
        <section class="selections__technology">
            <h2>Technology</h2>
            ${packageList()}
        </section>
        <section class="selections__wheels">
            <h2>Wheels</h2>
            ${wheelsList()}
        </section>
    </actrticle>`
}