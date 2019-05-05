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
let outputBox = document.getElementById('output-box');


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

// Operator function
function operate(operator, a, b) {
  if (operator == "x") {
    return multi(a, b);
  }
  if (operator == "/") {
    if (b != 0) {
      return divide(a, b);
    } else {
      prompt('You can never divide by zero');
    }
  }
  if (operator == "+") {
    return add(a, b);
  }
  if (operator == "-") {
    return sub(a, b);
  }
}

// Main function
function main() {
  var operator;
  var a, b;

  // loop to create listeners for each button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {

      if (event.target.id === "divide") {
      	// potential if-statement 
      	// default condition works fine
      	if(!a) {
      		a = Number(outputBox.value);
        	operator = "/";
      	} else {
        	b = parseInt(outputBox.value);      		
      		a = Number(outputBox.value);
      		operator = "/";
      		outputBox.value = operate(operator, a, b);
      	}
       
      } else if (event.target.id === "times") {
        a = Number(outputBox.value);
        operator = "x";
      } else if (event.target.id === "minus") {
        a = Number(outputBox.value);
        operator = "-";
      } else if (event.target.id === "plus") {
        a = Number(outputBox.value);
        operator = "+";
      } else if (event.target.id === "clear") {
        outputBox.value = "0";
        a = 0;
        b = 0;
      }
      else if (event.target.id === "equals") {
        b = parseInt(outputBox.value);
        outputBox.value = operate(operator, a, b);
      }
      else {
        console.log('start: ', outputBox.value, a, b, operator);

        if (outputBox.value == "0" || outputBox.value == a ) {
          outputBox.value = event.target.textContent;
        } else {
          outputBox.value += event.target.textContent;
        }
        console.log('end: ', outputBox.value, a, b, operator);
      }
    }, false);
  }
}
main();