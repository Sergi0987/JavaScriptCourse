 const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        return "hello";
    }
 };
 function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {console.log(`Hello, I'm ${this.name}!`)};
 function Player(name, marker) {
    this.name = name;
    this.marker = marker;
 };

Player.prototype.getMarker = function () {console.log(`My marker is ${this.marker}`)};

const theHobbit = new Book("hobbit", "serg", 242, false);

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("Tom", "O");

const myLibrary =[
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "yes"),
    new Book("1984", "George Orwell", 328, "no")];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = () => `${title} by ${author}, ${this.pages} pages, read? ${read}`;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(booksArray){
    for (let i = 0; i < booksArray.length; i++ ) {
        console.log(booksArray[i].info());
    }
}