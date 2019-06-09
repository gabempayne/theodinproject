/// program is designed to list books you have or have no read
/// will be changing to a list set up instead of an image setup

const delBtn = document.getElementById('deletebtn');
const checkMarks = document.getElementsByClassName('checkmark');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');

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

	// testing content change
	title.innerHTML = book.title;
	author.innerHTML = book.author;
	pages.innerHTML = book.pages;

	if(has_read) {
		
	}


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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
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