const gameboard = document.getElementById("game-board");
const reset = document.getElementById("reset-button");

function createGameboard() {
	// User-generated gameboard Size
    var size = gameboardSize(); 
    var colorChange = 10;

    var width = 500, 
        height = 500;

    gameboard.style.width = width + 'px';
    gameboard.style.height = height + 'px';

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
            squareDiv.style.width = (width / size).toString() + "px";
            squareDiv.style.height= (height / size).toString()+"px";

            gameboard.appendChild(squareDiv);

            squareDiv.addEventListener('mouseover', function(e){
            	e.target.style.backgroundColor = randomColor() ;                
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
    if(size != 0) {
    	return size;
    } else {
    	resetGame();
    }
}

function randomColor() {
	var colorArray = [
	r = Math.floor(Math.random() * 255),
	g = Math.floor(Math.random() * 255),
	b = Math.floor(Math.random() * 255)
	];

	return 'rgb(' + colorArray.toString()+ ')';
}

// Refreshes Chrome
function resetGame() {
    reset.addEventListener('click', function() {
        location.reload(true);
    });
}

createGameboard();