function createRestaurant(restName){
  var restObj = {
    name : restName,
    menus : {
      breakfast : [],
      lunch : [],
      dinner : []
    }
  }
  return restObj
}
var sexyPizza = createRestaurant("sexy pizza");
console.log(createRestaurant('Quiero Arepas'));
console.log(sexyPizza);



module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}