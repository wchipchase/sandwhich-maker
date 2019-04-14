// Dumb, but powerful function; doesn't know about the implementation of getIngredient, only to use it
const addIngredient = (getIngredient, e) => {
    console.log(getIngredient());
    const ingredientType = e.target.id;
    console.log(e.target.id);
    const myObj = getIngredient();
    console.log(myObj[ingredientType]);
};

export default { addIngredient };