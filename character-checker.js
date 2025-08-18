const readline = require('readline-sync');
let name = readline.question("Please enter your first and last name: ");
let indexNumber = readline.question("Please choose a number 0-11: ");
console.log(name[indexNumber]);