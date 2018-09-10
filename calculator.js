'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num) {
    this.number = num+= this.number
    return this
  }
  subtract (num) {
    this.number = this.number - num
    return this
  }
  multiply (num) {
    this.number = this.number * num
    return this
  }
  divide (num) {
    this.number = this.number / num
    return this
  }
  square (num) {
    let hasil = this.number;
    for(let i = 1;i < num;i++){
      hasil=hasil*this.number
    }
    this.number = hasil
    return this
  }
  squareRoot (num) {
    this.number = Math.sqrt(num)*this.number
    return this
  }
  equals (){
    return this.number
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
