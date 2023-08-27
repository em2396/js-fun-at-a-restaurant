function takeOrder(orderNumber, arrOfOrders){
  if(arrOfOrders.length < 3){
    arrOfOrders.push(orderNumber);
    return arrOfOrders;
  } else {
    return arrOfOrders;
  }
}
var order1 = {
  orderNumber : 1,
  item: 'burger',
  price : '8.99', 
  orderType : 'delivery',
  status : 'accepted'
};
var order2 = {
  orderNumber : 2,
  item : 'bit sandwich',
  price : '5.99',
  orderType : 'delivery',
  status : 'accepted'
}

var order3 = {
  orderNumber : 3,
  item : 'reuben',
  price : '8.99',
  orderType : 'delivery',
  status : 'accepted'
}

var takeOutOrder = [];
takeOrder(order1, takeOutOrder);
takeOrder(order2, takeOutOrder);
takeOrder(order3, takeOutOrder);
//console.log(takeOutOrder);

function refundOrder(orderNumber, arrOfOrders){
  for(var i = 0; i < arrOfOrders.length; i++){
    if(arrOfOrders[i].orderNumber === orderNumber){
      arrOfOrders.splice(i, 1);
      // delete arrOfOrders[i];
      // arrOfOrders = arrOfOrders.flat(1); //I originally couldn't get this to work because it wasn't deleting the empty space in
      //the global variable of takeOut but it had to do where I placed the return statement. 
      ////arrOfOrders = arrOfOrders.filter(element => {element === undefined})
      }
    }
      return  arrOfOrders;
  }
takeOutOrder = refundOrder(2, takeOutOrder);
// console.log(refundOrder(2, takeOutOrder));
console.log(takeOutOrder)

function listItems(arrOfOrders){
  var itemName = [];
  for(var i = 0; i < arrOfOrders.length; i++){
    itemName.push(arrOfOrders[i].item);
    //console.log(itemName)
    var itemNames = itemName.join(', ');
  }
  return itemNames;
}
console.log(listItems(takeOutOrder));

function searchOrder(arrOfOrders, foodItem){
  for(var i = 0; i < arrOfOrders.length; i++){
    if(arrOfOrders[i].item.includes(foodItem)){
      return true;
      }
    }
    return false; 
  }
// } 

// function searchOrder(arrOfOrders, foodItem){
//   //for(var i = 0; i < arrOfOrders.length; i++){
//     if(arrOfOrders.find(element => element.item === foodItem)){
//       // var foundFoodItem = true;
//       // return foundFoodItem;
//       return true;
//    } else {
//       return false;
//    }
//   }



console.log(searchOrder(takeOutOrder, 'Pizza'));
var order1 = {
  orderNumber: 1234,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var order2 = {
  orderNumber: 2342,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = [order1, order2];
console.log(searchOrder(deliveryOrders, 'burger'), 'burger is present');
console.log(searchOrder(deliveryOrders, 'blt sandwich'), 'blt is present');
console.log(searchOrder(deliveryOrders, 'sushi'), 'sushi isnt present');





module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}