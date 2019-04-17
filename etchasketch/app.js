const gameboard = document.getElementById("game-board");
const reset = document.getElementById("reset-button");

function createGameboard() {
	// User-generated gameboard Size
    var size = gameboardSize();  

    var width = 500, height = 500;

    gameboard.style.width = width;
    gameboard.style.heigh = height;

	// Loop and display squares in gameboard
	// outside loop
	for(var i=0; i < size; i++){
		//inside loop
		for(var j=0; j < size; j++){
			var newDiv = document.createElement('div');
			var br = document.createElement('br');
            newDiv.className = 'square';
            newDiv.style.backgroundColor == '#fff';  

            newDiv.style.width = (width / size).toString() + "px";
            newDiv.style.height= (height / size).toString()+"px";

            gameboard.appendChild(newDiv);

            newDiv.addEventListener('mouseover', function(event){
                if(event.target.style.backgroundColor =='#fff'){
                    event.target.style.backgroundColor ='#000';         
                }
            });
	  	}
	  	//gameboard.appendChild(newDiv);
        gameboard.appendChild(br);
    }
    resetGame();
}

// Prompt user for gameboard size; returns gameboard
function gameboardSize() {
    var size = prompt("Enter gameboard size");
	return size;
}

// Refreshes Chrome
function resetGame() {
    reset.addEventListener('click', function() {
        location.reload(true);
    });
}
createGameboard();