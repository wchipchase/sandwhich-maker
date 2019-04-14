export const VEGGIES = {
    LETTUCE: "lettuce",
    PICKLES: "pickles",
    ONIONS: "onions",
    TOMATO: "tomato"
};

const info = {
    [VEGGIES.LETTUCE]: {
        name: VEGGIES.LETTUCE,
        price: 1.50
    },
    [VEGGIES.PICKLES]: {
        name: VEGGIES.PICKLES,
        price: 1.00
    },
    [VEGGIES.ONIONS]: {
        name: VEGGIES.ONIONS,
        price: 1.00
    },
    [VEGGIES.TOMATO]: {
        name: VEGGIES.TOMATO,
        price: 1.50
    }
};

export default {
    getVeggies: () => info
};