let books = [
    ['The Wizard\'s First Rule', 'The Stone of Tears', 'The Blood of the Fold'],
    ['The Temple of the Wind', 'Soul of the Fire', 'Faith of the Fallen'],
    ['The Pillars of Creation', 'Naked Empire', 'Chainfire']
];
console.log(`Books on the shelf: 
    ${books[0][0]}, ${books[0][1]}, ${books[0][2]}, 
    ${books[1][0]}, ${books[1][1]}, ${books[1][2]}, 
    ${books[2][0]}, ${books[2][1]}, ${books[2][2]}`);

let rows = 0;
let item = 0;

for (let row = 0; row < books.length; row++) {
    for (let item = 0; item < books[row].length; item++) {
        console.log(`Book name: ${books[row][item]}`);
    }
}

console.log('Books on Shelf 2: ')
for (let item = 0; item < books[1].length; item++) {
        console.log(books[1][item]);
}