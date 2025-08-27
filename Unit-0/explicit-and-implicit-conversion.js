/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // Without more context I am not sure what the goal is here. It is using implicit conversion to change "5" into a Number.
console.log(typeof result); // Shows that "result" is a number. 

let isValid = Boolean(false); 
if (isValid) {
    console.log("This is valid!");
} // Removing the " " from "false" makes more since with how the code was written. The " " makes the text a String which doesn't allow the Boolean to run.

let age = "25";
let totalAge = Number(age) + 5; // Using Number() converts age into a number so the addition works instead of just adding 5 at the end of 25.
console.log("Total Age: " + totalAge);

// Examples:

// Implicit:
let yourAge = "1";
let drivingAge = 16;
let yearsLeft = drivingAge - yourAge; // Implicit conversion. Converts yourAge into a Number to complete the operation.
console.log("You have" + " " + yearsLeft + " " + "years until you can drive");
console.log(typeof yearsLeft); //number
console.log(typeof yourAge); //string
console.log(typeof drivingAge); //number

// Explicit:
let name = "";
console.log(Boolean(name)); // name is undefined so it explicitly converts the value to false. 
