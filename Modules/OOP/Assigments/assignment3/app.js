// Build a calendar app

const prompt = require("prompt-sync")();
const events = require("./event.js");
let Event = events.Event;

class Calendar {
  constructor() {
    this.userChoice = 0;
    this.schedules = [];
  }

  run() {
    let input;
    do {
      console.log("----------Calendar----------");
      const todayDate = new Date();
      const formattedDate = todayDate.toLocaleDateString("default", {day: "numeric", month: "long", year: "numeric", weekday: "long"});
      console.log(formattedDate);
      console.log("1. View your schedules");
      console.log("2. Create a new event");
      console.log("3. Edit an event");
      console.log("4. Delete an event");
      console.log("5. Quit");

      input = prompt("Enter (1/2/3/4/5): ");
      this.userChoice = Number(input);
    } while (!(this.userChoice > 0 && this.userChoice < 6));

    switch(this.userChoice) {
      case 1:
        this.viewSchedules();
        break;
      case 2:
        this.addEvent();
        break;
      case 3:
        this.editEvent();
        break;
      case 4:
        this.deleteEvent();
        break;
      case 5:
        this.quitApp();
        break;
      default:
        console.log("No such options");
        break;
    }
  }

  viewSchedules() {
    if(this.schedules.length === 0) {
      console.log("You have no upcoming events.");
    }
    for(let i=0; i<this.schedules.length; i++) {
      console.log(`Event #${i+1}`);
      console.log(this.schedules[i].displayEvent());
    }
    this.run();
  }

  addEvent() {
    // create a new event(title, time, location, desc)
    const eventTitle = prompt("Enter event title: ");
    const eventTime = prompt("Enter event time: ");
    const eventVenue = prompt("Enter event venue: ");
    const eventDesc = prompt("Enter event details: ")
    // eg. "Shopping", "2pm", "ION Orchard", "GSS Sale"
    const event = new Event(eventTitle, eventTime, eventVenue, eventDesc);
    this.schedules.push(event);
    this.run();
  }

  editEvent() {
    if(this.schedules.length === 0) {
      console.log("There are no events.");
    } else {
      let eventId = prompt("Enter event id to be edited: ");
      eventId = Number(eventId);
  
      const eventTime = prompt("Change event time to: ");
      const eventVenue = prompt("Change event venue to: ");
      const eventDesc = prompt("Change event details to: ");
  
      const eventToBeEdited = this.schedules.find( (schedule, index) => index === eventId - 1);
      eventToBeEdited.setTime(eventTime);
      eventToBeEdited.setLocation(eventVenue);
      eventToBeEdited.setDesc(eventDesc);
    }
    this.run();
  }

  deleteEvent() {
    if(this.schedules.length === 0) {
      console.log("There are no events.");
    } else {
      let eventId = prompt("Enter event id to be deleted: ");
      eventId = Number(eventId);
      this.schedules.splice(eventId - 1, 1);
    }
    this.run();
  }

  quitApp() {
    console.log("Exiting App...");
  }
}

const calendar = new Calendar();
calendar.run();