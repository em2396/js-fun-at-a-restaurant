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
      //delete arrOfOrders[i];
      //arrOfOrders = arrOfOrders.flat(1); 
      //why doesn't this work?
      }
    }
      return arrOfOrders;
  }

// console.log(refundOrder(2, takeOutOrder));
// console.log(takeOutOrder)

function listItems(arrOfOrders){
  var itemName = [];
  for(var i = 0; i < arrOfOrders.length; i++){
    itemName.push(arrOfOrders[i].item)
    //console.log(itemName)
    var itemNames = itemName.join(', ')
  }
  return itemNames;
}
console.log(listItems(takeOutOrder));




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}