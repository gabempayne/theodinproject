function Book(title, author, pages, hasRead) {
	this.title = title;
	this.author = author;
	this.pages;
	this.hasRead = hasRead;

	this.info = function() {
		return title + " " + author + " " + pages + " " + hasRead;
	}
}
var book = new Book("Monster Blood", "RL Stine", 285, "has read!");
console.log(book.info());