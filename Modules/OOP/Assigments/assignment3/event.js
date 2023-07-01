class Event {
  constructor(title, time, location, desc) {
    this.title = title;
    this.time = time;
    this.location = location;
    this.desc = desc;
  }

  displayEvent() {
    console.log(`Event: ${this.title}\nWhen: ${this.time}\nVenue: ${this.location}\nDetails: ${this.desc}\n`);
  }

  getTitle() {
    return this.title;
  }

  getTime() {
    return this.time;
  }

  getLocation() {
    return this.location;
  }

  getDesc() {
    return this.desc;
  }

  setTitle(newtitle) {
    this.title = newtitle;
  }

  setTime(newTime) {
    this.time = newTime;
  }

  setLocation(newLocation) {
    this.location = newLocation;
  }

  setDesc(newDesc) {
    this.desc = newDesc;
  }
}

module.exports = { 
  Event: Event
};