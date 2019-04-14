export const MEAT = {
    HAM: "ham",
    SALAMI: "salami",
    TURKEY: "turkey",
    BACON: "bacon"
};

const info = {
    [MEAT.HAM]: {
        name: MEAT.HAM,
        price: 1.50
    },
    [MEAT.SALAMI]: {
        name: MEAT.SALAMI,
        price: 1.00
    },
    [MEAT.TURKEY]: {
        name: MEAT.TURKEY,
        price: 1.00
    },
    [MEAT.BACON]: {
        name: MEAT.BACON,
        price: 1.50
    }
};

export default {
    getMeat: () => info
};