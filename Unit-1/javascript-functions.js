/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/
/* 
// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/
/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

// Script 1:
function greet(name){
   console.log(`Welcome ${name}!`);
}

greet('Alice');
greet('Bob');
greet('Charlie');

// Script 2:
function sumCalc(num1, num2){
   let sum = num1 + num2;
   console.log(`The sum of ${num1} + ${num2} is: ${sum}`);
   return sum;
} // How can I return the sum on the same line as the console.log statement? 

console.log(sumCalc(5, 10));

// Script 3:
function prodCalc(num1, num2){
   let product = num1 * num2;
   console.log(`The product of ${num1} and ${num2} is: ${product}`);
   return product;
}

module.exports = { greet };

prodCalc(5, 10);

// Script 4:
function nameList(array){
   for (let i = 0; i< array.length; i++){
      console.log(array[i]);
   }
}

nameList(["Alice", "Bob", "Charlie"]);


/*
* Generates an attendee badge given a name and a role
* @param {string} name - name of the employee
* @param {string} role
* @returns {string} A formatted badge string
*/

function generateBadge(name, role) {
	// generate our string
	let badge = `Name: ${name}, Role: ${role}`;
	return badge; 
	// return string
}

function calculateTotalCost(numAttendees, price, discount = 0.9) {
	let total = price * numAttendees;
	if (numAttendees > 100) {
		total = total * discount;
	}
	return total;
}

function isValidEmail(email) {
	email = String(email);
	return (email.includes("@") && email.includes("."));
}

function main() {
	console.log("--- Generate Badge ---");
	console.log(generateBadge("Bob", "Builder"));
	console.log();
	
	console.log("--- Calculate Total Cost ---");
	console.log(`numAttendees: 9512, price: $5000 -- $${calculateTotalCost(9512, 5000)}`);
	console.log(`numAttendees: 5, price: $5000 -- $${calculateTotalCost(5, 5000)}`);

	const emails = ["mesoogood@launchcode.js", "testyMcTesterface", "example.com"];

	for (const email of emails) {
		// write output of isValidEmail for each email address
		console.log(`${email}: ${isValidEmail(email)}`);
	}
}

main();