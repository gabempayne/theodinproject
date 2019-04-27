let outputBox = document.getElementById('output-box');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const clearBtn = document.getElementById('clear');
const zeroBtn = document.getElementById('zero');
const equalsBtn = document.getElementById('equals');
const divideBtn = document.getElementById('divide');
const timesBtn = document.getElementById('times');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
var buttons = document.querySelectorAll('button');


// Add function
function add(a, b) {
	return a + b;
}
// Sub function
function sub(a, b) {
	return a - b;
}
// Multi function
function multi(a, b) {
	return a * b;
}
// Division function
function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	if(operator == "x"){
		multi(a, b);
	}
	if(operator == "/"){
		divide(a, b);
	}
	if(operator == "+"){
		add(a, b);
	}
	if(operator == "-"){
		sub(a, b);
	}

}

function buttonClicks() {
	var operator;
// better method of creating event listeners
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (event) {
		outputBox.value += event.target.textContent;
		}, false);
	}
}