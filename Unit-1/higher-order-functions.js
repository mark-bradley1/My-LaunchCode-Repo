/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 800, inStock: true },
//   { name: "Monitor", price: 300, inStock: true },
//   { name: "Keyboard", price: 100, inStock: false },
// ];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

const filterProducts = (products, callback) => {
  return products.filter(callback);
}
let inStockTrue = filterProducts(products, product => product.inStock);


/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/
const uppName = products.map(product => product.name.toUpperCase());

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/
function applyDiscount(discountPercent) {
  return function(product) {
    const discount = product.price - (product.price * (discountPercent / 100));
    const rounded = Math.round(discount * 100) / 100;
    return { ...product, price: rounded };
  }
}
const discountedProducts = products.map(applyDiscount(15));

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 800, inStock: true },
//   { name: "Monitor", price: 300, inStock: true },
//   { name: "Keyboard", price: 100, inStock: false },
// ];
const totalValue = products.reduce((stockSum, product) => {
  if (product.inStock) {
    return stockSum + product.price;
  }
  return stockSum;
}, 0);

// ============================================
// 🧪 Console Test Your Work
// ============================================

let line = "-".repeat(50);
let newline = "\n";
console.log(line + newline + line);
console.log("Filtered products:", inStockTrue);
console.log(line + newline + line);
console.log("Uppercased names:", uppName);
console.log(line + newline + line);
console.log("Discounted products:", discountedProducts);
console.log(line + newline + line);
console.log("Total value in stock:", totalValue);
console.log(line + newline + line);