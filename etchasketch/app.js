const grid = document.getElementById("game-board");
const square = document.getElementsByClassName("square");

function main() {
	for(var i=0; i < 8; i++){
		for(var j=0; j < 8; j++){
		var newDiv = document.createElement('div');
		var br = document.createElement('br');
	  	newDiv.className = 'square';
	 	grid.appendChild(newDiv);
	  	}
	  grid.appendChild(newDiv);
	  grid.appendChild(br);
	}
}

square.onclick = function(){
	if(document.square.style.backgroundColor =="white"){
		document.square.style.backgroundColor="black";
	}
	if(document.square.style.backgroundColor =="black") {
		document.square.style.backgroundColor = "white";
	}
};

main();
