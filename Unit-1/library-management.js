class LibraryItem {
    static previousId = 55;
    constructor (title, isAvailable = true) {
        this.title = title;
        this.isAvailable = isAvailable;
        this.generateId();        
    }

    generateId(){
        this.id = LibraryItem.previousId++;
    }

    checkOut(){
        if (this.isAvailable){
            this.isAvailable = false;
            console.log(`\nThe book "${this.title}" is checked out`);   
        } else {
            console.log(`\n"${this.title}" is not available`);
        }
    }

    returnItem(){
        if (!this.isAvailable){
            this.isAvailable = true;
            console.log(`\nThe book "${this.title}" is returned`);   
        } else {
            console.log(`\n"${this.title}" is ready for checkout`);
        }
    }
}

class Book extends LibraryItem {
    constructor(title, author, genre, isAvailable = true){
        super(title, isAvailable);
        this.author = author;
        this.genre = genre;
        this.isDamaged = false;
    }

    damageBook(){
        console.log("\nSomebodies badass kid chewed the book");
        this.isDamaged = true;
    }

    checkOut(){
        if (this.isAvailable && this.isDamaged === false){
            this.isAvailable = false;
            console.log(`\n"${this.title} is checked out`)
        } else {
            console.log(`\n"${this.title}" is not available.`);
        }
    }
}

class DVD extends LibraryItem {
    constructor(title, director, duration, isAvailable = true){
        super(title, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, issueNumber, pubisher, isAvailable = true){
        super(title, isAvailable);
        this.issueNumber = issueNumber;
        this.pubisher = pubisher;
    }
}

let items = [
    new LibraryItem("Lord of the Rings: The Fellowship of the Ring"),
    new LibraryItem("Coding for Dummies"),
    new Book("1984", "GeorgeOrwell", "Science Fiction"),
    new DVD("Firefly", "Joss Whedon", 103, false),
    new Magazine("National Geographic", 101, "National Geographic Publishing House"),
    new Magazine("JET", "007", "MI6", false)
];

for (let item of items){
    console.log(item);
    item.checkOut();
    item.returnItem();
}
