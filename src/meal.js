
//PSEUDOCODE
//declare a function with one parameter : name
  //return the string interpolation : Delicious with the inputted argument of name.
function nameMenuItem(name) {
  return `Delicious ${name}`
}

// TEST CASES and troubleshooting
// var burritoItem = nameMenuItem("burrito");
// var sushiItem = nameMenuItem("Pizza");
// var tacoItem = nameMenuItem("Taco");
// console.log(burritoItem, sushiItem, tacoItem);

//PSUEDOCODE
//declare a function definition createMenutItem with three parameters: name, price and type
  //declare a variable object with three key-value pairs: name paired with the name argument, price with the price argument, and type with the type argument
  //return the newly created object
//This function will create a menuItem to the menu, so the passed in arguments should be a string with the name of the food, a number to display the price, 
//and a string with the value of what the meal type is
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


