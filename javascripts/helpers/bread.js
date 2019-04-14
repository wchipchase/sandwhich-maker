// Use constants to enforce certain literal values are used (i.e. wheat instead of whaet
export const BREAD = {
    ASIAGO: "asiago",
    FRENCH: "french",
    PITA: "pita",
    WHEAT: "wheat",
    RYE: "rye"
};

const info = {
    [BREAD.ASIAGO]: {
        name: BREAD.ASIAGO,
        price: 1.50
    },
    [BREAD.FRENCH]: {
        name: BREAD.FRENCH,
        price: 1.00
    },
    [BREAD.PITA]: {
        name: BREAD.PITA,
        price: 1.00
    },
    [BREAD.WHEAT]: {
        name: BREAD.WHEAT,
        price: 1.50
    },
    [BREAD.RYE]: {
        name: BREAD.RYE,
        price: 1.00
    }
};

// Simplified object with lambda function created directly in object
export default {
    getBread: () => info
};