'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this._pi = Math.PI;
    this._result = number || 0
  }

  add (number) {
    this._result += number;
    return this
  }
  subtract (number) {
    this._result -= number
    return this
  }
  multiply (number) {
    this._result *= number
    return this
  }

  divide (number) {
    this._result /= number;
    return this
  }

  square (number) {
    this._result = number*number;
    return this
  }

  squareRoot (number) {
    this._result = Math.sqrt(this._result)
    return this
  }

  pi(pi){
    return this._pi;
  }

  power(number){
    this._result = Math.pow(this._result, number)
    return this;
  }

  equals(){
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



module.exports = Calculator
