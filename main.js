'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
var calculate = new Calculator(5)
console.log(calculate.square(9).equals())