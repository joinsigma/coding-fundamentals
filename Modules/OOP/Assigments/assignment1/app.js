// Build a basic caluclator

class Caluclator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.bufferResult = 0;
    this.operator = "+";
    this.userInputValue = 0;
    this.outcome = this.bufferResult + this.userInputValue;
    this.prevOutcomeLog = [`${this.bufferResult} ${this.operator} ${this.userInputValue} = ${this.outcome}`];
  }

  add(input) {
    this.operator = "+";
    this.userInputValue = input;
    this.outcome = this.bufferResult + input;
    this.prevOutcomeLog.push(`${this.bufferResult} ${this.operator} ${this.userInputValue} = ${this.outcome}`);
    this.bufferResult = this.outcome;
    return this;
  }

  subtract(input) {
    this.operator = "-";
    this.userInputValue = input;
    this.bufferResult = this.outcome;
    this.outcome = this.bufferResult - input;
    this.prevOutcomeLog.push(`${this.bufferResult} ${this.operator} ${this.userInputValue} = ${this.outcome}`);
    return this;
  }

  multiply(input) {
    this.operator = "x";
    this.userInputValue = input;
    this.bufferResult = this.outcome;
    this.outcome = this.bufferResult * input;
    this.prevOutcomeLog.push(`${this.bufferResult} ${this.operator} ${this.userInputValue} = ${this.outcome}`);
    return this;
  }

  divide(input) {
    this.operator = "÷";
    this.userInputValue = input;
    this.bufferResult = this.outcome;
    this.outcome = this.bufferResult / input;
    this.prevOutcomeLog.push(`${this.bufferResult} ${this.operator} ${this.userInputValue} = ${this.outcome}`);
    return this;
  }

  value() {
    this.prevOutcomeLog.forEach( (log) => {
      console.log(log);
    });
  }
}

const caluclator = new Caluclator(0);

caluclator.add(5).subtract(2).multiply(5).divide(3);
// caluclator.add(2);
caluclator.value();
