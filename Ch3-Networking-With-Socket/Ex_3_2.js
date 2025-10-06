let shoppingList = [];
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("apples");

console.log("Initial List Value : ",shoppingList);
shoppingList.splice(1,1, "Bananas", "Eggs")
console.log("List After Split Method : ",shoppingList)

console.log("Shopping List After Pop Method : ",shoppingList.pop());
shoppingList.sort()
console.log("Shopping List After Sorting : ",shoppingList);

let findMilk = shoppingList.indexOf("milk");
console.log("Found Milk at this Index : ", findMilk)

shoppingList.splice(1,0, "Carrots", "Lettuce")
console.log("Shopping List using Slice method: ", shoppingList)

let juic = ["Juice", "Pop"]
let newList = shoppingList.concat(juic)
console.log("New List : ", newList)

let finalList = shoppingList.concat(newList,newList);
console.log("FinalList : ", finalList)

let lastIndexOfPop = finalList.lastIndexOf("Pop")
console.log("LastIndex Of Pop : ", lastIndexOfPop )

let finalArr = finalList.splice(0,5)
console.log(finalArr.concat(juic,juic))