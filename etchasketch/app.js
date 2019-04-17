const gameboard = document.getElementById("game-board");
const reset = document.getElementById("reset-button");

function createGameboard() {
	// User-generated gameboard Size
    var size = gameboardSize();  

    var width = 500, 
        height = 500;

    gameboard.style.width = width;
    gameboard.style.height = height;

    // Reset button width
    reset.style.width = width.toString() + "px";

	// Loop and display squares in gameboard
	// outside loop
	for(var i=0; i < size; i++){
		//inside loop
		for(var j=0; j < size; j++){

			var squareDiv = document.createElement('div');
            var br = document.createElement('br');
            
            squareDiv.className = 'square';
            squareDiv.style.backgroundColor = '#fff';  

            // set width and height of squares
            squareDiv.style.width = Math.round(width / size).toString() + "px";
            squareDiv.style.height= Math.round(height / size).toString()+"px";

            gameboard.appendChild(squareDiv);

            squareDiv.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor ='#000';                         
            });
	  	}
	  	//gameboard.appendChild(squareDiv);
        gameboard.appendChild(br);
    }
    resetGame();
}

// Prompt user for gameboard size; returns gameboard
function gameboardSize() {
    var size = prompt("Enter gameboard size");

	return size;
}

function randomColor() {
    // soon
}

// Refreshes Chrome
function resetGame() {
    reset.addEventListener('click', function() {
        location.reload(true);
    });
}

createGameboard();