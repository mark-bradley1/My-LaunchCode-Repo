const readline = require('readline-sync'); 

let store1 = [
    ['milk', 3.99],
    ['eggs', 2.49],
    ['chips', 4.99],
    ['bread', 4.99],
    ['pickels', 3.49],
]; 

let store2 = [
    ['milk', 4.99],
    ['eggs', 2.99],
    ['chips', 3.99],
    ['bread', 4.99],
    ['pickels', 4.49],
]; 

let itemName = readline.question("Please enter item to search for (milk, eggs, chips, bread, pickels): ")
let userItem = itemName; 
let shoppingCart = []; 

let price1 = null; 
let price2 = null; 

console.log("Searching Store 1:"); 
for (let i = 0; i < store1.length; i++) { 
  if (store1[i][0] === userItem) {
    price1 = store1[i][1];
    console.log(`Store 1 - ${userItem}: $${store1[i][1].toFixed(2)}`); 
  } 
} 

console.log("Searching Store 2:");
for (let i = 0; i < store2.length; i++) { 
  if (store2[i][0] === userItem) {
    price2 = store2[i][1];
    console.log(`Store 2 - ${userItem}: $${store2[i][1].toFixed(2)}`); 
  } 
} 

if (price1 !== null && price2 !== null) {
    if (price1 < price2) {
        shoppingCart.push([userItem, price1, 'store1']); 
    } else {
        shoppingCart.push([userItem, price2, 'store2']); 
    }
} else {
    console.log('Item not found in one of the stores.'); 
}

console.log('Shopping Cart: ', shoppingCart); 
