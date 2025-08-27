// Absolute Calculation

function absVal(value) {
    return Math.abs(value);
}

console.log(`The absoulte value of -45.67 is ${absVal(-45.67)}`);

// Power Calculation

function powCalc(num1, num2) {
    return Math.pow(num1, num2);
}

console.log(`The calculation of 5 raised to the 3rd power is: ${powCalc(5, 3)}`);

// Square Root Finder

function squareRoot(value) {
    return Math.sqrt(value);
}

console.log(`The square root of 144 is ${squareRoot(144)}`);

// Maximum and Minimum Finder

function minMax(nums){
    console.log(Math.max(...nums));
    console.log(Math.min(...nums));
}

minMax([3, 78, -12, 0.5, 27]);

// Random Number Generator

function ranNumGen(num) {
    return Math.floor(Math.random() * 50) + 1;
}

console.log(ranNumGen());

// Custom Rounding

function custRound(value) {
    let rounded = Math.round(value * 100) / 100;
    return rounded;
}

console.log(`The number 23.67891 rounded to two decimal placed is ${custRound(23.67891)}`);