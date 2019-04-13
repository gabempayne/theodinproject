const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function computerPlay() {
	var choices = ['Rock', 'Paper', 'Scissors'];

	return choices[Math.floor(Math.random() * choices.length)];
}

function game(userChoice) {
	const compChoice = computerPlay();
}

function main(){
  // Variables for keeping score
  var playerScore = 0, computerScore = 0;

  // Loop to play 5 games
  for(var i = 0; i < 5; i++) {
	    var computerSelection = computerPlay();

	    // Play a round and store the result
	    // var result = playRound(computerSelection, playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1));

	  
	    }
	    if(playerScore > computerScore) {
	    	console.log("Player Wins");
		} else if(computerScore > playerScore) {
		  	console.log("Computer Wins");
		} else {
		  	console.log("Tie Game");
		}

		rock_div.addEventListener('click', function() {
			var playerSelection = game("Rock");
			var result = playRound(computerSelection, playerSelection);
			findResult(result);
			console.log(playerSelection);
		})

		paper_div.addEventListener('click', function() {			
	    	var playerSelection = game("Paper");
		   	var result = playRound(computerSelection, playerSelection);
			findResult(result);
		})


		scissor_div.addEventListener('click', function() {
			var playerSelection = game("Scissors");
			var result = playRound(computerSelection, playerSelection);
			findResult(result);
		})
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




// function main() {
// 	
// }
function scoreChange() {

}


function findResult(result) {

switch(result) {
	case 'computer':
		computerScore++;
		break;
  	case 'player':
  		playerScore++;
    	break;
	}	
}



main();
						