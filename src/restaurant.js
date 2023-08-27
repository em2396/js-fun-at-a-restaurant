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
  for(var i in restName.menus){
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
 addMenuItem(sexyPizza, cheesePizza);
 // console.log(sexyPizza);

// function removeMenuItem(restName, menuItemName, type){
  // for(var i in restName.menus){
//     console.log(i.menuItemName)// equal undefined
//     //console.log(Object.values(restName.menus[i])) // = [] (break), [ [object] [object] (lunch), [] (dinner)
//     if(Object.values(restName.menus[i]).includes(i.menuItemName) === true && type === 'breakfast'){
//       //console.log(restName.menus[i])
//       //console.log(restName)
//       restName.menus[i].splice(menuItem, 1); 
//       //console.log(restName)
//     } else if(Object.values(restName.menus[i]).includes(i.menuItemName) === true && type === 'lunch'){
//       restName.menus[i].splice(menuItem, 1);
//     } else if(Object.values(restName.menus[i]).includes(i.menuItemName) === true && type === 'dinner'){
//       restName.menus[i].splice(menus, 1);
//     }
//   }
//   return restName
// }
function removeMenuItem(restName, menuItemName, mealType){
  for(var i in restName.menus){
    if(i === 'breakfast' && mealType === 'breakfast'){
        for(var j of restName.menus[i]){
          if(j.name === menuItemName){
            restName.menus[i].splice(menuItemName, 1);
            return `No one is eating our ${menuItemName} - it has been removed from the ${mealType} menu!`
          }
        }
       
    } else if(i === 'lunch' && mealType === 'lunch'){
        for(var j of restName.menus[i]){
          //console.log(j) //prints the object within the array
          if(j.name === menuItemName){
            //console.log(j.name); //prints BBQ Chicken
            restName.menus[i].splice(menuItemName, 1);
            return `No one is eating our ${menuItemName} - it has been removed from the ${mealType} menu!` 
          }
        }
     
    } else if(i === 'dinner' && mealType === 'dinner'){
        for(var j of restName.menus[i]){
          if(j.name === menuItemName){
          restName.menus[i].splice(menuItemName, 1);
          return `No one is eating our ${menuItemName} - it has been removed from the ${mealType} menu!`
          }
        }
      }
    }
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
}
//I think I could come back and refactor it by only having one j for loop... I'm just happy I finally got it to work even if it's 
//an if statement within a for loop within an if statement within a for loop 


//console.log(sexyPizza)
//console.log(sexyPizza['menus']['lunch'][0]) //bbq chicken object
//console.log(removeMenuItem(sexyPizza, 'BBQ Chicken', 'lunch'))
//console.log(sexyPizza) //sexy pizza without BBQ chicken
//console.log(sexyPizza['menus']['lunch'][0]) //i is b, l, d key name; i.name

function checkForFood(restName, menuItem){
  for(var i in restName.menus){
      if(Object.values(restName.menus[i]).includes(menuItem)){
        return `Yes, we're serving ${menuItem.name} today!`
      }
    }
        return `Sorry, we aren't serving ${menuItem.name} today.`
  }
//var isTuna = checkForFood(sexyPizza, 'tuna')
//console.log(isTuna);
//console.log(checkForFood(sexyPizza, 'Cheese')) //this worked because it's the string and the other is the variable!!

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}



    //console.log(restName.menus.i.name);
    //console.log(Object.values(restName.menus[i])); //logs the values of b l and d
    //console.log(restName.menus[i]) //logs the same thing as above
    //console.log(Object.keys(restName.menus[i]))
    //console.log(restName.menus.breakfast[i]) <--- all these were in the removeItem function I used to see which layer I was at
    //I was getting very confused with what i was 