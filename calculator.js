'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._result = num;
  }
  add (newNum) {
    this._result += newNum;
    return this;
  }
  subtract (newNum) {
    this._result -= newNum;
    return this;
  }
  multiply (newNum) {
    this._result *= newNum;
    return this;
  }
  divide (newNum) {
    this._result /= newNum;
    return this;
  }
  square (newNum) {
    this._result = Math.pow(this._result, newNum);
    return this;
  }
  squareRoot (newNum) {
    this._result = Math.sqrt(this._result, newNum);
    return this;
  }
  PI () {
    return Math.PI;
  }
  equals() {
    return `Result: ${this._result}`
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

let calc = new Calculator(0);
console.log(calc.add(8).subtract(5).multiply(2).divide(2).square(3).subtract(2).squareRoot(3).equals());
console.log(calc.PI());
