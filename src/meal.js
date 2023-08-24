function nameMenuItem(name) {
  return `Delicious ${name}`
}
// var burritoItem = nameMenuItem("burrito");
// var sushiItem = nameMenuItem("Pizza");
// var tacoItem = nameMenuItem("Taco");
// console.log(burritoItem, sushiItem, tacoItem);

function createMenuItem(name, price, type) {
  var menuItem = {
  name : name,
  price : price,
  type : type
  }
  return menuItem;
}
var frenchToast = createMenuItem("French toast", 6.99, "breakfast");
console.log(frenchToast);

function addIngredients(newIngr, ingredientsArr){
  if(ingredientsArr.includes(newIngr.toLowerCase())){
    return ingredientsArr
  } else {
  ingredientsArr.push(newIngr);
  return ingredientsArr;
  }
}
var macAndCheeseIngredients = ['cheese', 'noodles', 'salt', 'pepper', 'cream cheese', 'milk'];
console.log(addIngredients('mustard', macAndCheeseIngredients));
console.log(addIngredients('cheese', macAndCheeseIngredients));
console.log(addIngredients('CHeese', macAndCheeseIngredients));

function formatPrice(price){
  return `$${price}`;
}
console.log(formatPrice(frenchToast.price));
console.log(frenchToast.price); //invoking the function to format the price doesn't change the value within the object.



function decreasePrice(price){
  price*=.9
  return price
}
console.log(decreasePrice(frenchToast.price));

function createRecipe(title, ingredients, menuItemType){
  var newRecipe = {
    title : title,
    ingredients : ingredients,
    type : menuItemType
  }
  return newRecipe;
}
var soup = createRecipe('soup', ['noodles', 'broth'], 'entree');
console.log(soup);

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


