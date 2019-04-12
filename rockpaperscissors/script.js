function computerPlay() {
	var choices = ['Rock', 'Paper', 'Scissors'];

	return choices[Math.floor(Math.random() * choices.length)];
}

// Return a single result
function playRound(computerSelection, playerSelection) {
  var result;
  
  if(playerSelection == 'Rock'){
    if(computerSelection == 'Rock'){
      result = 'tie';
      console.log("Tie Game");
    }
    if(computerSelection == 'Paper'){
      result = 'computer';
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Scissors'){
      result = 'player';
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
  }	
  if(playerSelection == 'Scissors'){
    if(computerSelection == 'Scissors'){
      result = 'tie';
      console.log("Tie Game");
    }
    if(computerSelection == 'Rock'){
      result = 'computer';
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Paper'){
      result = 'player';
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
  }	
  if(playerSelection == 'Paper'){
    if(computerSelection == 'Paper'){
      result = 'tie';
      console.log("Tie Game");
    }
    if(computerSelection == 'Scissors'){
      result = 'computer';
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Rock'){
      result = 'player';
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
  }

  return result;
}

function game(){
  // Variables for keeping score
  var playerScore = 0, computerScore = 0;

  // Loop to play 5 games
  for(var i = 0; i < 5; i++) {
	    var playerSelection = prompt("Rock, Paper, Scissors?");
	    var computerSelection = computerPlay();

	    // Play a round and store the result
	    var result = playRound(computerSelection, playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1));

	    // Parse the result and to score
	    switch(result) {
	      case 'computer':
	      computerScore++;
	        break;
	      case 'player':
	      playerScore++;
	        break;
	    }
	    if(playerScore > computerScore) {
	    	console.log("Player Wins");
		} else if(computerScore > playerScore) {
		  	console.log("Computer Wins");
		} else {
		  	console.log("Tie Game");
		}
	}
  // Print score
  console.log(playerScore, computerScore);

  // Loop win results
  if(playerScore > computerScore) {
  	console.log("Player Wins!");
  } else if(computerScore > playerScore){
  	console.log("Computer Wins!");
  } else {
  	console.log("Tie Game!");
  }

}
game();

	// console.log(playRound(playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1), computerSelection));
	// console.log(playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1) + " " + computerSelection);