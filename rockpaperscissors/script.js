function computerPlay() {
	var choices = ['Rock', 'Paper', 'Scissors'];

	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection,computerSelection) {

	let rounds = 0;
	let playerWins = 0;
	let cpuWins = 0;

	while(rounds <=5){
		if(playerSelection == 'Rock'){
			if(computerSelection == 'Rock'){
				return "Tie Game";
				rounds++;
			}
			if(computerSelection == 'Paper'){
				return computerSelection + " beats " + playerSelection;
				cpuWins++;
				rounds++;
			}
			if(computerSelection == 'Scissors'){
				return playerSelection + " beats " + computerSelection;
				playerWins++;
				rounds++;
			}
		}	
		if(playerSelection == 'Scissors'){
			if(computerSelection == 'Scissors'){
				return "Tie Game";
			}
			if(computerSelection == 'Rock'){
				return computerSelection + " beats " + playerSelection;
			}
			if(computerSelection == 'Paper'){
				return playerSelection + " beats " + computerSelection;
			}
		}	
		if(playerSelection == 'Paper'){
			if(computerSelection == 'Paper'){
				return "Tie Game";
			}
			if(computerSelection == 'Scissors'){
				return computerSelection + " beats " + playerSelection;
			}
			if(computerSelection == 'Rock'){
				return playerSelection + " beats " + computerSelection;
			}
		}	
	}
	return playerWins + " player wins and " + cpuWins + " "
}

function game(){
	var computerSelection = computerPlay();
	var playerSelection = prompt("Please choose Rock, Paper, or Scissors");

	while(true){
		playRound(computerSelection, playerSelection);
	};
}

game();
	
	// console.log(playRound(playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1), computerSelection));
	// console.log(playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1) + " " + computerSelection);