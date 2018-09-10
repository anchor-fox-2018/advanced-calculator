'use strict'

class Calculator {
  //write your code here
  constructor (angka1, angka2) {
    this._angka1 = angka1
    this._angka2 = angka2
    this._pi = Math.PI;
  }

  add (angka1,angka2) {
    return angka1 + angka2;
  }
  subtract (angka1, angka2) {
    return angka1 - angka2;
  }
  multiply (angka1, angka2) {
    return angka1 * angka2;
  }

  divide (angka1, angka2) {
    return angka1 / angka2;
  }

  square (num1) {
    return num1 * num1;
  }

  squareRoot (num1) {
    return Math.square(num1);
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
