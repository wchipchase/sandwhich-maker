import bread from "../helpers/bread.js";
import meat from "../helpers/meat.js";
import cheese from "../helpers/cheese.js";
import veggies from "../helpers/veggies.js";
import condiments from "../helpers/condiments.js"

const addIngredient = (e) => {
    console.log(bread.getBread());
    const breadType = e.target.id;
    console.log(e.target.id);
    const myObj = bread.getBread();
    console.log(myObj[breadType]);

}

export default { addIngredient };