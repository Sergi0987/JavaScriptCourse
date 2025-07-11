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
Person.prototype.sayName = () => console.log(`Hello, I'm ${this.name}!`);
 function Player(name, marker) {
    this.name = name;
    this.marker = marker;
 };

Player.prototype.getMarker = () => console.log(`My marker is ${this.marker}`);

Object.getPrototypeOf(Player.prototype);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${this.pages} pages, read? ${read}`;
}

const theHobbit = new Book("hobbit", "serg", 242, false);


Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("Tom", "O");

