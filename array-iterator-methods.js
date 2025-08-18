//Task 1:
let cities = ['Chicago', 'St. Louis', 'Phoenix', 'Kansas City', 'New York'];

cities.forEach(city => console.log(city.toUpperCase()));
// Output:
// CHICAGO
// ST. LOUIS
// PHOENIX
// KANSAS CITY
// NEW YORK

//Task 2:
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

//Task 3:
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores); // Output: [85, 90, 100]

//Task 4:
let favoriteFood = ['Pizza', 'Tacos', 'Steak', 'Ice Cream', 'Cheeseburgers'];
let firstFood = favoriteFood.find(food => food.length > 4);
let firstFoodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(firstFood);
console.log(firstFoodIndex); 
// Output:
// Pizza
// 0