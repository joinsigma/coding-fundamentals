// Select DOM Elements
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addButton");
const deletedList = document.querySelector("#deletedList");

// Event Listener: Add Todo Button
addButton.addEventListener("click", addTodo);

const todos = [];

// Feature: Add Todo
function addTodo(e) {
  e.preventDefault();

  //id
  const id = todos.length + 1;

  //value
  const item = todoInput.value;
  if (!item) return;

  const newTodo = `
        <li id="${id}">
            <span>${item}</span>
            <button onclick="completeTodo(${id})">Complete</button>
            <button onclick="deleteTodo(${id})">Delete</button>
        </li>
    `;

  //append the new todo into the last todo list
  todoList.innerHTML += newTodo;

  //clear input
  todoInput.value = "";

  const todo = {
    id,
    item,
    completed: false,
  };

  //save to local storage
  todos.push(todo);
  localStorage.setItem('todo', JSON.stringify(todoList.innerHTML))
}

function findTodo(id) {
  return todoList.children[id - 1]; //get current id value by minusing next id value by 1
}

// Feature: Complete Todo
function completeTodo(id) {
  const todoItem = findTodo(id);

  const itemSpan = todoItem.firstElementChild;
  itemSpan.toggleAttribute("done");

  const completeStatus = itemSpan.getAttribute("done") === null ? false : true;
  const completeButton = todoItem.children[1];
  completeButton.innerText = completeStatus ? "Undo" : "Complete";
  console.log("A");
}

// Feature: Delete Todo
function deleteTodo(id) {
  const todoItem = findTodo(id);
  const item = todoItem.children[0];

  todoItem.classList.add("deleted__todo");

  const id_delete = deletedList.children.length + 1; //next id value by adding one to current id valueS

  //value
  if (!item) return;

  const deleted = `
        <li 
            id="${id_delete}">
            <span>${item.textContent}</span>
            <button onclick="undoDelete(${id_delete})">Undo Delete</button>
        </li>
    `;

  deletedList.innerHTML += deleted;

  //save to local storage
  localStorage.clear('todo')
  localStorage.setItem("deleted", JSON.stringify(deletedList.innerHTML));
}

function findDeleteId(id) {
  return deletedList.children[id - 1]; //get current id value by minusing next id value by 1
}

function undoDelete(id) {
  const deleteItems = findDeleteId(id);
  const item = deleteItems.children[0];

  deleteItems.classList.add("deleted__todo");

  //id
  const id_undo = todoList.children.length + 1; //next id value by adding one to current id valueS

  //value
  if (!item) return;

  const newTodo = `
        <li id="${id_undo}">
            <span>${item.textContent}</span>
            <button onclick="completeTodo(${id_undo})">Complete</button>
            <button onclick="deleteTodo(${id_undo})">Delete</button>
        </li>
    `;

  //append the new todo into the last todo list
  todoList.innerHTML += newTodo;

  //local storage
  localStorage.clear('deleted')
  localStorage.setItem("todo", JSON.stringify(todoList.innerHTML));
}

function getFromLocalStorage() {
  const reference1 = localStorage.getItem("todo");
  const reference2 = localStorage.getItem("deleted");

  if (reference1) {
    newTodo = JSON.parse(reference1);
    todoList.innerHTML += newTodo;
  }

  if (reference2) {
    deleted = JSON.parse(reference2);
    deletedList.innerHTML += deleted;
  }
}

getFromLocalStorage();
