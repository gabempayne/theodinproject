/// program is designed to list books you have or have no read
/// will be changing to a list set up instead of an image setup

const delBtn = document.getElementById('deletebtn');
const checkMarks = document.getElementsByClassName('checkmark');
const row = document.querySelector('.row').firstElementChild;

let myLibrary = [];

function Book(title, author, pages, has_read) {
	this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.setTitle = function () {
        return this.title;
    }
    this.setAuthor = function () {
        return this.author;
    }
    this.setPages = function () {
        return this.pages;
    }
    this.setRead = function () {
        return this.hasRead;
    }
}


function main() {
	createBook();
}
function createBook() {
	var book = new Book('The Two Towers', 'JRR Tolkien', '430', true);
	addBooktoLibrary(book);

	console.log(book.setTitle());
	console.log(row.firstChild.textContent);

	// for(let i = 0; i < checkMarks.length; i++) {
	// 	checkMarks[i].addEventListener('click', function(){
	// 		checkMarks[i].setAttribute('color', 'red');
	// 	});
	// }

	
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function removeBookfromLibrary() {
}

function addBookButton() {
	
}

function hasRead() {
	return Book.getRead();
}

function getTitle() {
	Book.getTitle();
}

function getAuthor() {
	Book.getAuthor();
}

function getPages() {
	Book.getPages();
}


window.onload=function(){
  main();
}