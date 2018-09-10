'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this._result = input;
    this._pie = Math.PI;
  }

  add (input) {
    this._result += input;
    return this;
  }

  subtract (input) {
    this._result -= input;
    return this;
  }

  multiply (input) {
    this._result = this._result * input;
    return this;
  }

  divide (input) {
    this._result = this._result / input;
    return this;
  }

  square (input) {
    for (let i = 0; i < input; i++) {
      this._result = this._result * this._result;
    }
    return this;
  }

  squareRoot () {
    this._result = Math.sqrt(this._result);
    return this
  }

  equals() {
    return this._result
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let test = new Calculator(4);
console.log(test.add(4).multiply(5).squareRoot().equals());

module.exports = Calculator