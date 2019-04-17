const grid = document.getElementById("game-board");
const reset = document.getElementById("reset-button");

function createGrid() {
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

            console.log(newDiv.style.height);
            console.log(newDiv.style.width);

            console.log(grid.style.height);
            console.log(grid.style.width);
            
            newDiv.style.height = (newDiv.style.height+grid.style.height / size).toString()+"px";
            newDiv.style.width = (newDiv.style.width+grid.style.width / size).toString()+"px";

            newDiv.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor ='red';         
            });
	  	}
	  	//grid.appendChild(newDiv);
        grid.appendChild(br);
    }
    resetGame();
}

// Prompt user for grid size; returns grid
function gridSize() {
    var size = prompt("Enter grid size");
	return size;
}

// Refreshes Chrome
function resetGame() {
    reset.addEventListener('click', function() {
        location.reload(true);
    });
}
createGrid();