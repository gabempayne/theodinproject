const grid = document.getElementById("game-board");
const squares = document.getElementsByClassName("square");

function main() {
	// User-generated grid Size
	var size = gridSize();

	// Loop and display squares in grid
	// outside loop
	for(var i=0; i < size; i++){
		//inside loop
		for(var j=0; j < size; j++){
			var newDiv = document.createElement('div');
			var br = document.createElement('br');
		  	newDiv.className = 'square';
		 	grid.appendChild(newDiv);
	  	}
	  	grid.appendChild(newDiv);
		grid.appendChild(br);
	}
}

// Hover function to change color
square.onmouseover = function(){
	console.log('you');
}

function gridSize() {
	var size = prompt("Enter grid size");
	return size;
}

main();
