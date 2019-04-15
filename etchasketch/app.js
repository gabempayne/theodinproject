const grid = document.getElementById("game-board");

function main() {
	for(var i=0; i < 8; i++){
		for(var j=0; j < 8; j++){
		var newDiv = document.createElement('div');
	   	newDiv.id = 'box'+i;
	  	newDiv.className = 'square';
	  	grid.appendChild(newDiv);
	  }
	  	grid.appendChild(newDiv);
	}

	alert(newDiv.id);
}

main();
