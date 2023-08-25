function createRestaurant(restName){
  var breakfast = [];
  var lunch = [];
  var dinner = [];
  var pizzaRestaurant = restName; 
  return breakfast, lunch, dinner, pizzaRestaurant;
}
console.log(createRestaurant("sexy pizza"));

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}