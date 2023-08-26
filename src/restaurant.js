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
//console.log(createRestaurant('Quiero Arepas'));
//console.log(sexyPizza);


function addMenuItem(restName, menuItem){
  for(let i in restName.menus){
    //console.log(restName.menus);
    //console.log(i)
    //console.log(Object.values(restName.menus[i])) //this equals 'b','r'... why doesn't it give the string-keyed property values? i was doing Object.values(i)
    if(i === 'breakfast' && menuItem.type === 'breakfast' && Object.values(restName.menus[i]).includes(menuItem) === false){
      //console.log(Object.values(i))
      restName.menus[i].push(menuItem);
      //return restName;
    } else if(i === 'lunch' && menuItem.type === 'lunch' && Object.values(restName.menus[i]).includes(menuItem) === false){
      //console.log(restName.menus[i])
      restName.menus[i].push(menuItem)
      //return restName;
    } else if(i === 'dinner' && menuItem.type === 'dinner' && Object.values(restName.menus[i]).includes(menuItem) === false){
      restName.menus[i].push(menuItem);
     //return restName;
    }
  }
}
//This works with or without the return statements which confuses me a little because wouldn't the restName need to be returned outside the function
//to affect the global variable of the argument being passed in?
//Theres is most definitely a better way to do this. I have been staring at this one for hours and this is what I came up with
//not sure how to make it better 


  var bbqPizza = {
    name: "BBQ Chicken",
    price: "12.49",
    type: "lunch"
  };

  var cheesePizza = {
    name: "Cheese",
    price: "10.49",
    type: "lunch"
  };

  var hawaiianPizza = {
    name: "Hawaiian",
    price: "12.49",
    type: "lunch"
  };

  addMenuItem(sexyPizza, bbqPizza);
  console.log(sexyPizza);




module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}