"use strict";
class Calculator {
  constructor(num, ) {
    this._num = num;
  }

  sum(input) {
    this._num = this._num + input;
    return this;
  }
  substract(input) {
    this._num = this._num - input;
    return this;
  }
  multiply(input) {
    this._num = this._num * input;
    return this;
  }
  divide(input) {
    this._num = this._num / input;
    return this;
  }
  square(input) {
    this._num = Math.pow(this._num, input);
    return this;
  }
  sqrt() {
    this._num = Math.sqrt(this._num);
    return this;
  }
  pie() {
    this._num = this._num * Math.PI;
    return this;
  }
  result() {
    return `${this._num}`
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
let hitung = new Calculator(5);
console.log(hitung.sum(1).divide(2).multiply(2).divide(2).square(2).sqrt().pie().result());
