let userScore = 0;
let compScore = 0;
const display = document.getElementById('display');
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
	rock_div.onclick = function(){
		var playerSelection = "Rock";
      game(playerSelection, computerPlay());
	};

	paper_div.onclick = function(){	
    	var playerSelection = "Paper";
      game(playerSelection, computerPlay());
	};


	scissor_div.onclick = function(){
		var playerSelection = "Scissors";
      game(playerSelection, computerPlay());
	};
}

function roundOver(userScore, compScore) {
  if(userScore_span.textContent == 5){
    display.textContent="We have a winner!";
    document.getElementById("r").style.pointerEvents = 'none';
    document.getElementById("p").style.pointerEvents = 'none';
    document.getElementById("s").style.pointerEvents = 'none';
  }  if (compScore_span.textContent == 5) {
    document.getElementById("r").style.pointerEvents = 'none';
    document.getElementById("p").style.pointerEvents = 'none';
    document.getElementById("s").style.pointerEvents = 'none';   
    display.textContent="You are TRASH!";    
  }} 

function game(playerSelection, computerSelection) {
  if(playerSelection == 'Rock'){
    if(computerSelection == 'Rock'){
      display.textContent="Tie Game!";
    }
    if(computerSelection == 'Paper'){
      display.textContent="You Lose! " + computerSelection + " beats " + playerSelection;
      compScore_span.textContent++;
      roundOver(compScore++, userScore);
    }
    if(computerSelection == 'Scissors'){
      display.textContent= "You Win! " + playerSelection + " beats " + computerSelection;
      userScore_span.textContent++;
      roundOver(userScore++);
    }
  } 
  if(playerSelection == 'Scissors'){
    if(computerSelection == 'Scissors'){
      display.textContent="Tie Game!";
    }
    if(computerSelection == 'Rock'){
      display.textContent="You Lose " + computerSelection + " beats " + playerSelection;
      compScore_span.textContent++;
      roundOver(ompScore++);
    }
    if(computerSelection == 'Paper'){
      display.textContent= "You Win! " + playerSelection + " beats " + computerSelection;
      userScore_span.textContent++;
      roundOver(userScore++);
    }
  } 
  if(playerSelection == 'Paper'){
    if(computerSelection == 'Paper'){
      display.textContent="Tie Game!";
    }
    if(computerSelection == 'Scissors'){
      display.textContent="You Lose " + computerSelection + " beats " + playerSelection;
      compScore_span.textContent++;
      roundOver(compScore++);
    }
    if(computerSelection == 'Rock'){
      display.textContent= "You Win! " + playerSelection + " beats " + computerSelection;
      userScore_span.textContent++;
      roundOver(userScore++);
    }
  }
}
main();