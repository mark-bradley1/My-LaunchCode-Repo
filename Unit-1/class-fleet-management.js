/*
Beverage
Define a Beverage class with properties name, ounces, container, and isCold.
isCold should always be false at instantiation of an object.
container should be optional and default to "bottle".
Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read 
differently depending on whether the beverage is cold or not.
Add a refrigerate() method outside the constructor that changes the value of isCold and prints a notification.
Instantiate at least 3 different kinds of beverages with unique properties.
Use the describe() method to print descriptions of each beverage.
Use the refrigerate() method on one of the beverages, then call describe()  again.
*/

class Beverage {
    constructor(name, ounces, container = 'Bottle', isCold = false) {
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.isCold = isCold;
        this.describe = function(){
        if(isCold === false){
            console.log(`${this.name} is ${this.ounces} ounces and is in a ${this.container} and is hot.`);
            } else {
            console.log(`${this.name} is ${this.ounces} ounces and is in a ${this.container} and is cold.`);
            }
        }
    }
    refrigerate(){
        this.isCold = true;
        console.log(`${this.name} is cold and needs to be refrigerated.`);
    }

}

let coffee = new Beverage('Coffee', 12, 'Cup');
let soda = new Beverage('Dr. Pepper', 16, 'Bottle', true);
let beer = new Beverage('Busch Latte', 16, 'Bottle', true);

console.log(coffee);
coffee.describe();
coffee.refrigerate();
console.log(soda);
soda.describe();
console.log(beer);
beer.describe();

/*
class Vehicle{
    constructor(type, make, model, year, mileage = 0){
        this.type = type,
        this.make = make,
        this.model = model,
        this.year = year,
        this.mileage = mileage
    }
    drive(distance){
        this.mileage = this.mileage + distance;
    }
    getDetails(){
        return `Type: ${this.type}\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nMileage: ${this.mileage}\n`;
    }
}

const vehicle1 = new Vehicle("Sedan", "Ford", "Fusion", 2018, 10);
const vehicle2 = new Vehicle("Sedan", "Toyata", "Corolla", 2008, 230000);
const vehicle3 = new Vehicle("Jeep", "Cheverolet", "Grand Cherokee", 2025, 100);

vehicle1.drive(100);
console.log(vehicle1.getDetails());
vehicle2.drive(1000);
console.log(vehicle2.getDetails());
vehicle3.drive(10000);
console.log(vehicle3.getDetails());
*/

/*
class Vehicle {

    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        return this.mileage += distance
    }

    getDetails() {
        return (`This ${this.year} ${this.make} ${this.model} is a ${this.type} with ${this.mileage} miles.`);
    }

}

let truck = new Vehicle("truck", "Toyota", "Tundra", "2006", mileage = 0);

truck.drive(190000);

let car = new Vehicle("car", "Lexus", "ES300", 2001, mileage = 0);

car.drive(300000);

let motorcycle = new Vehicle("motorcycle", "Harley", "Cruiser", 2025, mileage = 0);

motorcycle.drive(80);

console.log(truck);
console.log(car);
console.log(motorcycle);

console.log(truck.getDetails());
console.log(car.getDetails());
console.log(motorcycle.getDetails());
*/

/*
class Clothing{
    constructor(name, color, material){
        this.name = name;
        this.color = color;
        this.material = material;
        this.isDirty = false;
    }

    describe() {
        if (this.isDirty){
            console.log(`This ${this.color} ${this.material} ${this.name} is dirty!!! WASH NOW!`);
        } else {
            console.log(`This ${this.color} ${this.material} ${this.name} is clean!!! WEAR NOW!!`);
        }       
    }

    wear() {
        this.isDirty = true;
        console.log(`This ${this.name} was worn and is now dirty.\u2639`);
    }
    launder() {
        this.isDirty = false;
        console.log(`This ${this.name} was washed and now its clean. BRAVO!`);
    }
}

let tShirt = new Clothing ("T-Shirt", "Red", "Cotton");
let jeans = new Clothing ("Apple-Bottomed Jeans", "Black", "Denim");
let boots = new Clothing ("Boots with the fur", "Grey", "Leather");
let jacket = new Clothing ("Fall Jacket", "Tan", "Wool");

tShirt.describe();
jeans.describe();
boots.describe();
jeans.wear();
tShirt.wear();
tShirt.describe();
tShirt.launder();
tShirt.describe();
*/

/*
class Clothing {
    constructor(name, color, material, isDirty = false) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.isDirty = isDirty;
    }

    describe() {
        console.log(`The ${this.name} is ${this.color} and made of ${this.material}. It is ${this.isDirty ? "dirty" : "clean"}.`); // ternary operator to print weather the clothing is dirty or clean in one line
        // if (this.isDirty) {
        //     console.log (`The ${this.name} is ${this.color} and made of ${this.material}. It is dirty.`);
        // } else {
        //     console.log (`The ${this.name} is ${this.color} and made of ${this.material}. It is clean.`);
        // }
    }

    wear() {
        this.isDirty = true;
        console.log(`This ${this.name} is now dirty.`);
    }

    launder() {
        this.isDirty = false;
        console.log(`You've washed your ${this.name}!`);
    }

}

let tShirt = new Clothing('t-shirt', 'printed', 'silk');
let pants = new Clothing('pants', 'blue', 'jeans', false);
let bomberJacker = new Clothing('bomber jacket', 'silver', 'polyester', true);


tShirt.describe();
pants.describe();
bomberJacker.describe();

pants.wear();

tShirt.wear();
tShirt.launder();
tShirt.describe();
*/