function takeOrder(orderNumber, listOfOrders){
  if(listOfOrders.length < 3){
    listOfOrders.push(orderNumber);
    return listOfOrders;
  } else {
    return listOfOrders;
  }
}




module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}