 const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        return "hello";
    }
 };

 const playerOne = {
    name: "Tim",
    marker: "X"
 };

 function Player(name, marker) {
    if (!new.target) {
        throw Error("must use 'new operator");
    };

    this.name = name;
    this.marker = marker;
    this.sayName = () => console.log(this.name);
 };

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${this.pages} pages, read? ${read}`;
}

const theHobbit = new Book("hobbit", "serg", 242, false);