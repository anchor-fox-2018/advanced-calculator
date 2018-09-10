"use strict";

const PI = Math.PI;

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    return this.num1 + this.num2;
  }
  substract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  power() {
    return this.num1 ^ this.num2;
  }
  sqrt() {
    return Math.sqrt(this.num1);
  }
}

let hitung = new Calculator(5, 2);
console.log(hitung.sum().sum(2));

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
