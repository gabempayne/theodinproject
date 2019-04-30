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
		return multi(a, b);
	}
	if(operator == "/"){
		return divide(a, b);
	}
	if(operator == "+"){
		return add(a, b);
	}
	if(operator == "-"){
		return sub(a, b);
	}
}
function main() {
	var operator;
	var a, b;
// better method of creating event listeners
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (event) {

			if(event.target.id === "divide"){
				a = parseInt(outputBox.value);
				operator = "/";
			}else if(event.target.id === "times"){
				a = parseInt(outputBox.value);
				operator = "x";
			}else if(event.target.id === "minus"){
				a = parseInt(outputBox.value);
				operator = "-";
			}else if(event.target.id === "plus"){
				a = parseInt(outputBox.value);
				operator = "+";
			}else if(event.target.id === "clear"){
				outputBox.value = "0";
			}
			else if(event.target.id === "equals"){
				b = parseInt(outputBox.value);
				outputBox.value = operate(operator, a, b);
			}
			else if(outputBox.value == "0" || typeof a != 'undefined'){
				outputBox.value = event.target.textContent;
			} else {
				outputBox.value += event.target.textContent;				
			}
		}, false);
	}
} 
main();