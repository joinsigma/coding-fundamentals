let tick = "\u2705";
let cross = "\u274c";

const prompt = require("prompt-sync")();

class todoAPP {
  constructor() {
    this.list = ["Learn HTML" + cross];
    this.isQuit = false;
    do {
      this.display();
    } while (this.isQuit !== true);
  }

  display() {
    console.log(`
---------TODO APP-----------
What would you like to do?
1. View my todo list
2. Add new todo
3. Edit a todo item
4. Toggle complete a todo
5. Delete a todo
6. Quit app
`);
    this.value = prompt("Enter (1/2/3/4/5/6): ");
    this.value = parseInt(this.value);
    this.selection();
  }

  selection() {
    switch (this.value) {
      case 1:
        this.view();
        break;
      case 2:
        this.add();
        break;
      case 3:
        this.edit();
        break;
      case 4:
        this.toggle();
        break;
      case 5:
        this.delete();
        break;
      case 6:
        this.quit();
        break;
    }
  }

  view() {
    let iteration = 1;
    for (let index in this.list) {
      console.log("#" + iteration + ": " + this.list[index]);
      iteration++;
    }
  }

  add() {
    var task = prompt("Enter your to-do task: ");
    this.list.push(task + cross);
  }

  edit() {
    var number = prompt("Enter the to-do task you want to edit: ");
    var item = prompt("Change the to-do task to: ");
    this.list.splice(number - 1, 1, item + cross);
  }

  toggle() {
    var number = prompt("Enter the to-do task you want to toggle complete: ");
    var item = this.list[number-1]
    if(item.split('').splice(-1) == cross){
        var newitem = item.replace(cross, tick)
        this.list.splice(number-1, 1, newitem)
    }
    
    else {
        var newitem = item.replace(tick, cross)
        this.list.splice(number-1, 1, newitem)
    }
    console.log(newitem);
  }

  delete() {
    var number = prompt("Enter the to-do task you want to delete: ");
    this.list.splice(number-1, 1)
  }

  quit() {
    this.isQuit = true;
  }
}

const todoapp = new todoAPP
todoapp
//node OOPAssignment2.js
