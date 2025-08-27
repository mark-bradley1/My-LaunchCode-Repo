const readline = require('readline-sync');

let firstName = readline.question("First Name: ");
let lastName = readline.question("Last Name: ");
    console.log("Welcome: " + firstName + " " + lastName + "!");

let question1 = readline.questionInt("What would the result be of the string 10 + the number 7 be? ");
let answer1 = 107;
    console.log("Your Answer: ");
    console.log(question1);
    readline.question("press Enter to continue...");

    console.log("Correct Answer: ");
    console.log(answer1);
    readline.question("press Enter to go to next question...");

let question2 = readline.question("What are two examples of falsy values? ");
let answer2 = ("0, null, undefined, NaN and empty string");
    console.log("Your Answer: ");
    console.log(question2);
    readline.question("press Enter to continue...");

    console.log("Correct Answer: ");
    console.log(answer2);
    readline.question("press Enter to go to next question...");

let question3 = readline.question("What does the operator == do in JavaScript? ");
let answer3 = ("Performs type coercion to compare values of different types");
    console.log("Your Answer: ");
    console.log(question3);
    readline.question("press Enter to continue...");

    console.log("Correct Answer: ");
    console.log(answer3);
    readline.question("press Enter to go to next question...");

let question4 = readline.question("What is Explicit type conversion? ");
let answer4 = ("When the programmer intentionally converts a value from one daya type to another.");
    console.log("Your Answer: ");
    console.log(question4);
    readline.question("press Enter to continue...");

    console.log("Correct Answer: ");
    console.log(answer4);
    readline.question("press Enter to go to next question...");

let question5 = readline.question("What is Implicit type conversion or Type coercion? ");
let answer5 = ("When JavaScript automatically converts one data type into another during the operation.");
    console.log("Your Answer: ");
    console.log(question5);
    readline.question("press Enter to continue...");

    console.log("Correct Answer: ");
    console.log(answer5);
    readline.question("Congratulations on finishing the quiz! Press Enter to end...");