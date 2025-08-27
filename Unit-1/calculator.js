// Absolute Calculation

function absVal(value) {
    return Math.abs(value);
}

console.log(`The absoulte value of -45.67 is ${absVal(-45.67)}`);

// 1. Absolute Value Calculation Solution
// function getAbsoluteValue(number) {
//  return Math.abs(number);
// }
// console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));

// Power Calculation

function powCalc(num1, num2) {
    return Math.pow(num1, num2);
}

console.log(`The calculation of 5 raised to the 3rd power is: ${powCalc(5, 3)}`);

// 2. Power Calculation Solution
// function calculatePower(base, exponent) {
//  return Math.pow(base, exponent);
// }
// console.log("5 raised to the power of 3:", calculatePower(5, 3));

// Square Root Finder

function squareRoot(value) {
    return Math.sqrt(value);
}

console.log(`The square root of 144 is ${squareRoot(144)}`);

// 3. Square Root Finder Solution
// function findSquareRoot(number) {
//  return Math.sqrt(number);
// }
// console.log("Square root of 144:", findSquareRoot(144));

// Maximum and Minimum Finder

function minMax(nums){
    console.log(Math.max(...nums));
    console.log(Math.min(...nums));
}

minMax([3, 78, -12, 0.5, 27]);

// 4. Maximum and Minimum Finder Solution
// function findMaxMin(numbers) {
//  return {
//  max: Math.max(...numbers),
//  min: Math.min(...numbers)
//  };
// }
// const numList = [3, 78, -12, 0.5, 27];
// const { max, min } = findMaxMin(numList);
// console.log("Maximum number:", max);
// console.log("Minimum number:", min);


// Random Number Generator

function ranNumGen(num) {
    return Math.floor(Math.random() * 50) + 1;
}

console.log(ranNumGen());

// 5. Random Number Generator Solution
// function generateRandom(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log("Random number between 1 and 50:", generateRandom(1, 50));



// Custom Rounding

function custRound(value) {
    let rounded = Math.round(value * 100) / 100;
    return rounded;
}

console.log(`The number 23.67891 rounded to two decimal placed is ${custRound(23.67891)}`);

// 6. Custom Rounding Solution
// function roundToDecimals(number, decimals) {
//  return Number(number.toFixed(decimals));
// }
// console.log("Round 23.67891 to 2 decimal places:", roundToDecimals(23.67891, 2));
