export const CONDIMENTS = {
    MAYONNAISE: "mayonnaise",
    KETCHUP: "ketchup",
    MUSTARD: "mustard",
    VINEGAR_OIL: "vinegarOil"
};

const info = {
    [CONDIMENTS.MAYONNAISE]: {
        name: CONDIMENTS.MAYONNAISE,
        price: 1.50
    },
    [CONDIMENTS.KETCHUP]: {
        name: CONDIMENTS.KETCHUP,
        price: 1.00
    },
    [CONDIMENTS.MUSTARD]: {
        name: CONDIMENTS.MUSTARD,
        price: 1.00
    },
    [CONDIMENTS.VINEGAR_OIL]: {
        name: CONDIMENTS.VINEGAR_OIL,
        price: 1.50
    }
};

export default {
    getCondiments: () => info
};