//Task 1:
let orders = [
  ["Latte", "Tea", "Espresso"],        
  ["Croissant", "Muffin", "Bagel"]     
];

//Task 2:
console.log("Number of drinks:", orders[0].length);
console.log("Number of pastries:", orders[1].length);

//Task 3:
console.log("First drink order:", orders[0][0]);         
console.log("First pastry order:", orders[1][2]);         

console.log("Second drink order:", orders[0][1]);       
console.log("Second pastry order:", orders[1][0]);        

console.log("Third drink order:", orders[0][2]);         
console.log("Third pastry order:", orders[1][1]);       

//Task 4:
let categoryIndex = 0; 
let itemIndex = 1;     

console.log("Selected order:", orders[categoryIndex][itemIndex]); 

categoryIndex = 1; 
itemIndex = 0;     

console.log("Selected order:", orders[categoryIndex][itemIndex]); 

//Task 5:
for (let i = 0; i < orders[0].length; i++) {
  console.log("Drink order:", orders[0][i]);
}

//Task 6:
orders[0].push("Flat White");

console.log("Updated number of drinks:", orders[0].length);

let row = 0;                         
let item = orders[0].length - 1;     

console.log("New drink added:", orders[row][item]); 