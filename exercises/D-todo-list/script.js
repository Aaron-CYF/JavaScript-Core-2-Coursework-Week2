function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");

  let list = document.createElement('ul');

  todos.forEach(todo => {
    let listItem = document.createElement('li');
    listItem.textContent = todo.todo;
    listItem.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    });
    list.append(listItem);
  });

  content.append(list);

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);