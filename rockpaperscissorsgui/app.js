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

function main(){
	rock_div.addEventListener('click', function() {
		var playerSelection = "Rock";
	})

	paper_div.addEventListener('click', function() {			
    	var playerSelection = "Paper";
	})


	scissor_div.addEventListener('click', function() {
		var playerSelection = "Scissors";
	})
}

function game(playerSelection, computerSelection) {
  if(playerSelection == 'Rock'){
    if(computerSelection == 'Rock'){
      console.log("Tie Game");
    }
    if(computerSelection == 'Paper'){
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Scissors'){
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
  } 
  if(playerSelection == 'Scissors'){
    if(computerSelection == 'Scissors'){
      console.log("Tie Game");
    }
    if(computerSelection == 'Rock'){
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Paper'){
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
  } 
  if(playerSelection == 'Paper'){
    if(computerSelection == 'Paper'){
      console.log("Tie Game");
    }
    if(computerSelection == 'Scissors'){
      console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    if(computerSelection == 'Rock'){
      console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
}

function scoreChange() {

}

main();		