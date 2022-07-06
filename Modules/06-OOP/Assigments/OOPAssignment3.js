let tick = "\u2705";
let cross = "\u274c";

const prompt = require("prompt-sync")();

class Calendar {
  constructor() {
    this.list = ["Learn HTML 4/5/2023"];
    this.isQuit = false;
    do {
      this.display();
    } while (this.isQuit !== true);
  }

  display() {
    console.log(`
---------TODO APP-----------
What would you like to do?
1. View my calendar
2. Add new event
3. Edit an existing event
4. Cancel an event
5. Quit app
`);
    this.value = prompt("Enter (1/2/3/4/5): ");
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
        this.delete();
        break;
      case 5:
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
    var event = prompt("Add your new event, eg. Sleep 1/1/2023: ");
    this.list.push(event);
  }

  edit() {
    var number = prompt("Enter the event you want to edit: ");
    var item = prompt("Change the event to: ");
    this.list.splice(number - 1, 1, item);
  }


  delete() {
    var number = prompt("Enter the event you want to cancel: ");
    this.list.splice(number-1, 1)
  }

  quit() {
    this.isQuit = true;
  }
}

const calendar = new Calendar
calendar
//node OOPAssignment3.js
