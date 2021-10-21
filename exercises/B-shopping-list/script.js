function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById("content");
  let list = (document.createElement("ul"));
  for (let p of arrayOfPeople) {
    let listItem = document.createElement("li");
    listItem.innerHTML = p;
    list.append(listItem);
  }
  content.append(list);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
