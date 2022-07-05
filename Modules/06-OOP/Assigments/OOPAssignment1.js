//input value1 = result
//use result to add value2
//use result to minus value3

class Calculator {
  constructor(value1) {
    this.result = value1;
  }

  add(value2) {
    this.value2 = value2;
    this.addinit_result = this.result;
    this.result = this.result + value2;
    this.addpost_result = this.result;
    return this;
  }

  minus(value3) {
    this.value3 = value3;
    this.minusinit_result = this.result;
    this.result = this.result - value3;
    this.minuspost_result = this.result;
    return this;
  }

  multiply(value4) {
    this.value4 = value4;
    this.mulinit_result = this.result;
    this.result = this.result * value4;
    this.mulpost_result = this.result;
    return this;
  }

  divide(value5) {
    this.value5 = value5;
    this.divinit_result = this.result;
    this.result = this.result / value5;
    this.divpost_result = this.result;
    // console.log(this.result)
    return this;
  }

  value() {
    if (this.addinit_result !== null || this.addinit_result !== undefined)
      console.log(
        this.addinit_result + "+" + this.value2 + "=" + this.addpost_result
      );
    if (this.minusinit_result !== null || this.minusinit_result !== undefined)
      console.log(
        this.minusinit_result + "-" + this.value3 + "=" + this.minuspost_result
      );
    if (this.mulinit_result !== null || this.mulinit_result !== undefined)
      console.log(
        this.mulinit_result + "*" + this.value4 + "=" + this.mulpost_result
      );
    if (this.divinit_result !== null || this.divinit_result !== undefined)
      console.log(
        this.divinit_result + "/" + this.value5 + "=" + this.divpost_result
      );
  }
}

const cal = new Calculator(5);
cal.minus(2).add(2).minus(1).multiply(4).divide(10);
cal.value();