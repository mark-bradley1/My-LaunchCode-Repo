/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp"); //Output: "Welcome to the bodcamp"

// What’s Wrong? - Syntax error. It is missing a closing " and ) and ; 


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled); // Output: 4, 8, 16
}

// What’s Wrong? - Runtime error. "eight" is not a number so it cannot be multiplied by 2. Changing it to 8 (a number) fixes the code.



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(8)); // Expected true but gets false

// What’s Wrong? - the return lines are switched. It was returning "true" when divisors were found and "false" when no divisors were found.
