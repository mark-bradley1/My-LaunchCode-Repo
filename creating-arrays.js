let grocArr = ['Milk', 'Eggs', 'Ice Cream', 'Salsa', 'Chips'];
let grocPrices = [5.99, 15.99, 6.99];

console.log(grocArr);
console.log(grocPrices);
console.log(`${grocArr[0]}, ${grocArr[2]}, ${grocArr[4]}`);
console.log(`${grocPrices[0]}, ${grocPrices[2]}`);

let practiceArr = Array(7).fill('Hello');
console.log(practiceArr);

practiceArr.fill('Yo', 2, 5);
console.log(practiceArr);

let practiceArr2 = Array(5);
for (let i = 0; i < practiceArr2.length; i++){
    practiceArr2[i] = i * 10;
}
console.log(practiceArr2);