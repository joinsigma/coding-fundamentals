const userInputTaskDesc = document.querySelector(".task-input input[type='text']");
const userInputRating = document.querySelector('#importance');
const addBtn = document.querySelector(".task-input input[type='submit']");
const form = document.querySelector(".task-input");
const sortOption = document.querySelector("#sort");
const showDeletedOption = document.querySelector("#show-deleted");
const undoDeleteOption = document.querySelector("#undo");
const clearListOption = document.querySelector("#clear");
const listSection = document.querySelector('.tasks-list');

const list = JSON.parse(localStorage.getItem("list")) || [];
window.addEventListener("load", () => {
  userInputTaskDesc.focus();
  displayList();
});

addBtn.addEventListener("click", addTask);
sortOption.addEventListener("click", sortTodos);
showDeletedOption.addEventListener("click", showDeletedTodos);
undoDeleteOption.addEventListener("click", restoreDeletedTodos);
clearListOption.addEventListener("click", clearTodoList);

// add task
function addTask(e) {
  e.preventDefault();
  if (!userInputTaskDesc.value || !userInputRating.value || Number(userInputRating.value) < 1 || Number(userInputRating.value) > 5) return;
  const task = {
    desc: userInputTaskDesc.value,
    rating: Number(userInputRating.value),
    isDeleted: false,
    isEditing: false
  }
  list.push(task);
  form.reset();
  userInputTaskDesc.focus();
  console.log(list);
  displayList();
}

// edit task
function editTask() {
  const taskToEdit = list.find( (task) => task.isEditing === true);
  userInputTaskDesc.value = taskToEdit.desc;
  userInputRating.value = taskToEdit.rating;
  addBtn.value = "Edit";
  if (addBtn.value === "Edit") {
    addBtn.removeEventListener("click", addTask);
    addBtn.addEventListener("click", setEditedTask);
  }
  console.log(list);
}

function setEditedTask(e) {
  e.preventDefault();
  const taskToEdit = list.find((task) => task.isEditing === true);
  if (!userInputTaskDesc.value || !userInputRating.value) return;
  taskToEdit.desc = userInputTaskDesc.value;
  taskToEdit.rating = userInputRating.value;
  taskToEdit.isEditing = false;
  addBtn.value = "Add";
  form.reset();
  addBtn.removeEventListener("click", setEditedTask);
  addBtn.addEventListener("click", addTask);
  console.log(list);
  displayList();
}

function toggleEditStatus(taskIndex) {
  const taskToToggle = list.find((task, index) => index === taskIndex);
  taskToToggle.isEditing = !taskToToggle.isEditing;
  editTask();
}

// delete task
function toggleDeleteStatus(taskIndex) {
  const taskToToggle = list.find((task, index) => index === taskIndex);
  taskToToggle.isDeleted = !taskToToggle.isDeleted;
  console.log(list);
  displayList();
}

function displayList() {
  listSection.innerHTML = "";
  if (list.length < 1) return;
  list.forEach( (task, index) => {
    const taskItemDiv = document.createElement("div");
    taskItemDiv.classList.add("task-item");
    if (task.isDeleted) {
      taskItemDiv.style.display = "none";
    }
    taskItemDiv.innerHTML = `
    <article class="task-desc">(Rating: <span>${task.rating}</span>) ${task.desc}</article>
    <article>
      <button id="edit-btn" class="buttons" onclick="toggleEditStatus(${index})">Edit</button>
      <button id="delete-btn" class="buttons" onclick="toggleDeleteStatus(${index})">Delete</button>
    </article>
      `;
      listSection.appendChild(taskItemDiv);
    });
  // connect todos list to localStorage
  localStorage.setItem("list", JSON.stringify(list));
}

// show deleted todos
// display list with filter isDeleted = true
function showDeletedTodos() {
  listSection.innerHTML = "";
  const deletedTodoList = list.filter((task) => task.isDeleted === true);
  console.log(deletedTodoList);
  if (deletedTodoList.length < 1) return;
  deletedTodoList.forEach( (task) => {
    const taskItemDiv = document.createElement("div");
    taskItemDiv.classList.add("task-item");
    taskItemDiv.innerHTML = `
    <article class="task-desc">(Rating: <span>${task.rating}</span>) ${task.desc}</article>
    `;
    listSection.appendChild(taskItemDiv);
  });
}

// undo deleted todos, put back into todos list
function restoreDeletedTodos() {
  const deletedTodos = list.filter( (task) => {
    if(task.isDeleted)
      task.isDeleted = false;
  });
  displayList();
}

// sort todos in order of importance
function sortTodos() {
  list.forEach( (task) => {
    for(let i=0; i<list.length; i++) {
      if (i < list.length - 1) {
        if (Number(list[i].rating) < Number(list[i+1].rating) ) {
          let temp = list[i];
          list[i] = list[i+1];
          list[i+1] = temp;
        }
      }
    }
  });
  displayList();
}

function clearTodoList() {
  list.length = 0;
  localStorage.setItem("list", JSON.stringify(list));
  displayList();
}