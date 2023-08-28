//PSEUDOCODE
//Create a function definition takeOrder with two parameters: orderNumber and arrOfOrders
  //If the arr of orders (which is an object that inclues: order number, price, order type and status), is less than three,
  //push the new inputted argument which is an object into the the array of orders.
  //else, if it's not less than three return the array of orders without the new order because ther isn't space  for it.
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


//PSEUDOCODE 
//Create a function refundOrder with two parameters: orderNumber and arrOfOrders (which is an arr of objects)
  //initialize a for loop, declare a variable i and assign it the value of zero. Iterate through arrOfOrders as long as it has length, 
  //and increment i by one after each iteration
    //if arrOfOrders.orderNumber at its current iteration is equal to the inputted orderNumber 
      //remove the order number object from the arrOfOrders by using the delete or splice method.
        //return arrOfOrders
function refundOrder(orderNumber, arrOfOrders){
  for(var i = 0; i < arrOfOrders.length; i++){
    if(arrOfOrders[i].orderNumber === orderNumber){
      arrOfOrders.splice(i, 1);
      // delete arrOfOrders[i];
      // arrOfOrders = arrOfOrders.flat(1); //I originally couldn't get this to work because it wasn't deleting the empty space in
      //the global variable of takeOut but it had to do where I placed the return statement. And the .splice method is cleaner code with less
      //lines, though I am unsure about the time complexity differences.
      ////arrOfOrders = arrOfOrders.filter(element => {element === undefined}) I tried using this method to get rid of the empty space created 
      //the delete method but it didn't work...
      }
    }
      return  arrOfOrders;
  }
//TEST CASES - these were actually causing me issues while running my npm because it was removing an item that needed to be ran in the test
//for success.
//takeOutOrder = refundOrder(2, takeOutOrder);
// console.log(refundOrder(2, takeOutOrder));
//console.log(takeOutOrder)


//PSEUDOCODE
//Create a function listItems with one parameter: an array of orders
//initialize a variable itemName and assign it the value of an empty array.
//Use a for loop to iterate through the arrOfOrders, where we'll add the value of the key item to the new array we created before
//Create a for loop. Create a variable i and assign it the value of 0. Iterate through the arrayOfOrders as long as it has length, and
//increment the value of i by one after each iteration.
  //push the object's value of item into the newly created array
  //use the .join built in method to create a list of all the item menu names.
  //return the newly created array
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


//PSEUDOCODE
//Create a function searchOrder with two parameters: array of orders and food item
  //use a for loop to iterate through the array to look for the argument inputted in the function
  //Create a for loop. Initialize a variable i and assign it the value of zero. iterate through the arrayOfOrders as long as it has length
  //increment i by one after each iteration
    //if at the current index in the arrOfOrders,the objects item value includes (built in js method) the inputted foodItem argument,
      //return true
    //else
      //return false
function searchOrder(arrOfOrders, foodItem){
  for(var i = 0; i < arrOfOrders.length; i++){
    if(arrOfOrders[i].item.includes(foodItem)){
      return true;
      }
    }
    return false; 
  }



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

//These test cases I copied and pasted from the test.js file can be left uncommented out because their functionality won't disrupt the
//test, whereas adding or removing items will change the overall value of the variable and cause the test to fail.



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}