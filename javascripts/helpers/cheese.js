export const CHEESE = {
    CHEDDAR: "cheddar",
    SWISS: "swiss",
    AMERICAN: "american",
    PROVOLONE: "provolone"
};

const info = {
    [CHEESE.CHEDDAR]: {
        name: CHEESE.CHEDDAR,
        price: 1.50
    },
    [CHEESE.SWISS]: {
        name: CHEESE.SWISS,
        price: 1.00
    },
    [CHEESE.AMERICAN]: {
        name: CHEESE.AMERICAN,
        price: 1.00
    },
    [CHEESE.PROVOLONE]: {
        name: CHEESE.PROVOLONE,
        price: 1.50
    }
};


export default {
    getCheese: () => info
};