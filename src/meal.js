function nameMenuItem(name) {
  return `Delicious ${name}`
}
var burritoItem = nameMenuItem("burrito");
var sushiItem = nameMenuItem("Pizza");
var tacoItem = nameMenuItem("Taco");
console.log(burritoItem, sushiItem, tacoItem);

function createMenuItem(name, price, type) {
  var menuItem = {
  name : name,
  price : price,
  type : type
  }
  return menuItem;
}
console.log(createMenuItem("French toast", 5.00, 'breakfast'));


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


