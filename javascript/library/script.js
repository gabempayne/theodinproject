let myLibrary = [];

function Book(author, title, pages, has_read) {
    this.author = author;
    this.title = title;
    this.has_read = has_read;
}

function addBookToLibrary() {
    myLibrary.push(Book(author, title, pages, has_read));
}

function printLibrary() {
    console.log(myLibrary);
}