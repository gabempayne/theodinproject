let outputBox = document.getElementById('output-box');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const sixBtn = document.getElementById('five');
const oneBtn = document.getElementById('six');
const twoBtn = document.getElementById('one');
const threeBtn = document.getElementById('two');
const clearBtn = document.getElementById('clear');
const zeroBtn = document.getElementById('zero');
const equalsBtn = document.getElementById('equals');
const divideBtn = document.getElementById('divide');
const timesBtn = document.getElementById('times');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const buttons = document.getElementsByTagName('button');


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

}
// failed button click function

sevenBtn.addEventListener('click', function() {
	outputBox.value = 7;
});
eightBtn.addEventListener('click', function() {
	outputBox.value = 8;
});
sevenBtn.addEventListener('click', function() {
	outputBox.value = 7;
});
sevenBtn.addEventListener('click', function() {
	outputBox.value = 7;
});
sevenBtn.addEventListener('click', function() {
	outputBox.value = 7;
});
sevenBtn.addEventListener('click', function() {
	outputBox.value = 7;
});


clearBtn.addEventListener('click', function() {
	outputBox.value = 0;
});

// testing checking button textContent
for(var i = 0; i < buttons.length; i++){
	console.log(buttons[i].textContent);
}