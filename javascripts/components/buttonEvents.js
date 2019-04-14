import ingredients from "./ingredients.js";




// grab all ingredient buttons
// find which ingredient you clicked on
// find the price of that ingredient
// add to the cart

const eventFunction= () => {
const asiagoButton = document.getElementById('asiago');
const whiteButton = document.getElementById('french');
const pitaButton = document.getElementById('pita');
const wheatButton = document.getElementById('wheat');
const cheddarButton = document.getElementById('cheddar');
const swissButton = document.getElementById('swiss');
const americanButton = document.getElementById('american');
const provoloneButton = document.getElementById('provolone');
const hamButton = document.getElementById('ham');
const baconButton = document.getElementById('bacon');
const salamiButton = document.getElementById('salami');
const turkeyButton = document.getElementById('turkey');
const lettuceButton = document.getElementById('lettuce');
const tomatoButton = document.getElementById('tomato');
const onionButton = document.getElementById('onions');
const pickleButton = document.getElementById('pickles');
const mayoButton = document.getElementById('mayo');
const mustardButton = document.getElementById('ketchup');
const ketchupButton = document.getElementById('mustard');
const vinegarButton = document.getElementById('vinegarOil');

asiagoButton.addEventListener('click', ingredients.addIngredient);
pitaButton.addEventListener('click', ingredients.addIngredient);
wheatButton.addEventListener('click', ingredients.addIngredient);
whiteButton.addEventListener('click', ingredients.addIngredient);
cheddarButton.addEventListener('click', ingredients.addIngredient);
swissButton.addEventListener('click', ingredients.addIngredient);
americanButton.addEventListener('click',  ingredients.addIngredient);
provoloneButton.addEventListener('click', ingredients.addIngredient);
hamButton.addEventListener('click', ingredients.addIngredient);
baconButton.addEventListener('click', ingredients.addIngredient);
turkeyButton.addEventListener('click',  ingredients.addIngredient);
salamiButton.addEventListener('click',  ingredients.addIngredient);
lettuceButton.addEventListener('click',  ingredients.addIngredient);
tomatoButton.addEventListener('click',  ingredients.addIngredient);
onionButton.addEventListener('click',  ingredients.addIngredient);
pickleButton.addEventListener('click',  ingredients.addIngredient);
mayoButton.addEventListener('click',  ingredients.addIngredient);
ketchupButton.addEventListener('click',  ingredients.addIngredient);
mustardButton.addEventListener('click',  ingredients.addIngredient);
vinegarButton.addEventListener('click',  ingredients.addIngredient);
}

export default { eventFunction }