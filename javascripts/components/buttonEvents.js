import ingredients from "./ingredients.js";
import _bread, {BREAD} from "../helpers/bread.js";
import _cheese, {CHEESE} from "../helpers/cheese.js";
import _meat, {MEAT} from "../helpers/meat.js";
import _veggies, {VEGGIES} from "../helpers/veggies.js";
import _condiments, {CONDIMENTS} from "../helpers/condiments.js";

/**
 * Add a click event to every button for ingredients of the sandwich
 */
export default () => {
    // Define a set of parameters I can bind to for each set of ingredients
    const addClick = (fnc, object, key) => {
        try {
            const button = document.getElementById(object[key]);

            // Use the fnc as the first parameter of addIngredient
            // addIngredient doesn't know of the function it calls (think delegates in C#)
            button.addEventListener('click', ingredients.addIngredient.bind(null, fnc));
        } catch (exception) {
            console.warn(`Button does not exist for '${key}'`)
        }
    };

    Object.keys(BREAD).forEach(addClick.bind(null, _bread.getBread, BREAD));
    Object.keys(CHEESE).forEach(addClick.bind(null, _cheese.getCheese, CHEESE));
    Object.keys(MEAT).forEach(addClick.bind(null, _meat.getMeat, MEAT));
    Object.keys(VEGGIES).forEach(addClick.bind(null, _veggies.getVeggies, VEGGIES));
    Object.keys(CONDIMENTS).forEach(addClick.bind(null, _condiments.getCondiments, CONDIMENTS));
};
