/// program is designed to list books you have or have no read
/// will be changing to a list set up instead of an image setup

const delBtn;
const checkMark;

let myLibrary = [];

function Book(author, title, pages, has_read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
}

function main() {
	var book = new Book('JRR Tolkien', 'The Two Towers', '430', true);
	addBooktoLibrary(book);
}

function addBooktoLibrary(book) {
    myLibrary.push(book);

    printLibrary();
}

function printLibrary() {
    console.log(myLibrary);
}

function removeBookfromLibrary() {
    myLibrary.pop(Book(author, title, pages, has_read));
}

function addBookButton() {
	
}

function hasRead() {

}


main();