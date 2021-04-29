const database = {
    color: [
        {
            id: 1,
            paint: "Silver",
            price: 40.00
        },
        {
            id: 2,
            paint: "Midnight Blue",
            price: 60.00
        },
        {
            id: 3,
            paint: "Firebrick Red",
            price: 50.00
        },
        {
            id: 4,
            paint: "Spring Green",
            price: 30.00
        }
    ],
    interior: [
        {
            id: 1,
            style: "Beige Fabric",
            price: 45.00
        },
        {
            id: 2,
            style: "Charcoal Fabric",
            price: 55.00
        },
        {
            id: 3,
            style: "White Leather",
            price: 75.00
        },
        {
            id: 4,
            style: "Black Leather",
            price: 100.00
        }
    ],
    tehcnology: [
        {
            id: 1,
            package: "Basic",
            price: 25.00
        },
        {
            id: 2,
            package: "Navigation Package",
            price: 40.00
        },
        {
            id: 3,
            package: "Visibility",
            price: 50.00
        },
        {
            id: 4,
            package: "Ultra",
            price: 100.00
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch radial",
            price: 25.00
        },
        {
            id: 2,
            type: "17-inch radial black",
            price: 35.00
        },
        {
            id: 3,
            type: "18-inch spoke silver",
            price: 50.00
        },
        {
            id: 4,
            type: "18-inch spoke black",
            price: 60.00
        }
    ],
    customOrders: [
        {

        }
    ],
    orderBuilder: [
        {

        }
    ]
}

export const getColor = () => {
    return [...database.color]
}

export const getInterior = () => {
    return [...database.interior]
}

export const getTechnology = () => {
    return [...database.tehcnology]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.tehcnologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}