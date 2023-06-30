// Build a TODO App

// Menu 
// 1. run(): What do you like to do?
// 2. View my todo list
// 3. Add a new todo
// 4. Edit a todo item
// 5. Toggle a todo complete status
// 6. Delete a todo
// 7. Quit app

const prompt = require("prompt-sync")();

class TodoApp {
  constructor() {
    this.userChoice = 0;
    this.todoList = [];
  }

  run() {
    let userInput = 0;
    do {
      console.log(`----------TODO APP----------`);
      console.log("What do you like to do?");
      console.log("1. View my todo list");
      console.log("2. Add a new todo");
      console.log("3. Edit a todo item");
      console.log("4. Toggle a todo complete status");
      console.log("5. Delete a todo");
      console.log("6. Quit app");
      userInput = prompt("Enter (1/2/3/4/5/6): ");
      this.userChoice = Number(userInput);
    } while (!(this.userChoice > 0 && this.userChoice < 7))
    switch(Number(this.userChoice)) {
      case 1:
        this.getTodoList();
        break;
      case 2:
        this.addTodoItem();
        break;
      case 3:
        this.editTodoItem();
        break;
      case 4:
        this.toggleCompleteStatus();
        break;
      case 5: 
        this.deleteTodoItem();
        break;
      case 6:
        this.quitApp();
        break;
    }
  }

  addTodoItem() {
    const task = prompt("Enter todo item: ");
    const todoItem = {
      desc: task,
      isCompleted: false
    }
    this.todoList.push(todoItem);
    this.run();
  }
  
  editTodoItem() {
    let taskId = prompt("Enter todo id: ");
    taskId = Number(taskId);
    const taskDesc = prompt("Change todo item to: ");
    this.todoList.splice(taskId - 1, 1, {
      desc: taskDesc,
      isCompleted: false
    });
    this.run();
  }
  
  getTodoList() {
    if(this.todoList.length < 1) {
      console.log("You have 0 todos!");
    }
    for(let i=0; i<this.todoList.length; i++) {
      if (this.todoList[i].isCompleted) {
        console.log(`#${i+1} - ${this.todoList[i].desc} ✅`);
      } else {
        console.log(`#${i+1} - ${this.todoList[i].desc} ❌`);
      }
    }
    this.run();
  }
  
  toggleCompleteStatus() {
    let taskId = prompt("Enter todo id to complete: ");
    taskId = Number(taskId);
    for (let i=0; i<this.todoList.length; i++) {
      if(taskId - 1 === i) {
        this.todoList[i].isCompleted = true;
      }
    }
    this.run();
  }
  
  deleteTodoItem() {
    // ask for user input: Enter todo id to be removed
    let taskId = prompt("Enter todo id to be removed: ");
    taskId = Number(taskId);
    // slice from todoList array
    this.todoList.splice(taskId - 1, 1);
    this.run();
  }

  quitApp() {
    console.log("Exiting App...");
  }
}

const todo = new TodoApp();
todo.run();