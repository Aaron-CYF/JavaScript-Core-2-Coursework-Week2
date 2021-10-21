function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = "";

  todos.forEach((todo) => {
    let space = document.createTextNode(" ");
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = todo.task;
    if (todo.completed) {
      listItem.style.textDecoration = "line-through";
    }
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    let i = document.createElement("i");
    i.className = "fa fa-check";
    i.ariaHidden = "true";
    i.addEventListener("click", () => {
      if (todo.completed) {
        todo.completed = false;
        listItem.style.textDecoration = "";
      } else {
        todo.completed = true;
        listItem.style.textDecoration = "line-through";
      }
      /* NOTE: I was just re-populating the list
        which would apply the strike-through based on todo.completed
        but that caused the tests to fail. */
      // populateTodoList(todos);
    });
    span.append(i);
    span.append(space);
    i = document.createElement("i");
    i.className = "fa fa-trash";
    i.ariaHidden = "true";
    i.addEventListener("click", () => {
      todos.splice(todos.indexOf(todo), 1);
      populateTodoList(todos);
    });
    span.append(i);
    listItem.append(span);
    list.append(listItem);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  todos.push({
    task: document.querySelector("#todoInput").value,
    completed: false,
  });
  document.querySelector("#todoInput").value = "";
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
let space = document.createTextNode(" ");
let delCompleteBtn = document.createElement("button");
let addTodoBtn = document.querySelector(".card button");
delCompleteBtn.className = "btn btn-secondary mb-3 fa fa-trash";
delCompleteBtn.id = "remove-all-completed";
delCompleteBtn.innerText = " Delete Completed";
delCompleteBtn.style.height = addTodoBtn.getBoundingClientRect().height + "px";
delCompleteBtn.addEventListener('click', (event) => {
  event.preventDefault();
  deleteAllCompletedTodos();
});
console.log(addTodoBtn.clientHeight);
console.log(delCompleteBtn.style.height);
addTodoBtn.after(delCompleteBtn);
addTodoBtn.after(space);
