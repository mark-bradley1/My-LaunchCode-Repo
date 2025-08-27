const readline = require('readline-sync'); // Values, Data Types and Operations

let store1 = [
    ['milk', 3.99],
    ['eggs', 2.49],
    ['chips', 4.99],
    ['bread', 4.99],
    ['pickels', 3.49],
]; // Building Arrays; Values, Data Types and Operations

let store2 = [
    ['milk', 4.99],
    ['eggs', 2.99],
    ['chips', 3.99],
    ['bread', 4.99],
    ['pickels', 4.49],
]; // Building Arrays; Values, Data Types and Operations

let itemName = "milk"; // Values, Data Types and Operations
let shoppingCart = []; // Building Arrays

let price1 = null; // Values, Data Types and Operations
let price2 = null; // Values, Data Types and Operations

console.log("Searching Store 1:"); 
for (let i = 0; i < store1.length; i++) { // Stringing Characters Together
  if (store1[i][0] === itemName) {
    price1 = store1[i][1];
    console.log(`Store 1 - ${itemName}: $${store1[i][1].toFixed(2)}`); // Control Structures and Logic; Stringing Characters Together; Using Arrays
  } // Control Structures and Logic; Using Arrays
} // Working with Loops, Using Arrays

console.log("Searching Store 2:");
for (let i = 0; i < store2.length; i++) { //Stringing Characters Together
  if (store2[i][0] === itemName) {
    price2 = store2[i][1];
    console.log(`Store 2 - ${itemName}: $${store2[i][1].toFixed(2)}`); // Control Structures and Logic; Stringing Characters Together; Using Arrays
  } // Control Structures and Logic; Using Arrays
} // Working with Loops; Using Arrays

if (price1 !== null && price2 !== null) {
    if (price1 < price2) {
        shoppingCart.push([itemName, price1, 'store1']); // Control Structures and Logic; Using Arrays
    } else {
        shoppingCart.push([itemName, price2, 'store2']); // Control Structures and Logic; Using Arrays
    }
} else {
    console.log('Item not found in one of the stores.'); // Control Structures and Logic
}

console.log('Shopping Cart: ', shoppingCart); // Control Structures and Logic
