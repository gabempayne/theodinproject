const outputBox = document.getElementById('output-box');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const sixBtn = document.getElementById('five');
const oneBtn = document.getElementById('six');
const twoBtn = document.getElementById('one');
const threeBtn = document.getElementById('two');
const clearBtn = document.getElementById('three');
const zeroBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('zero');
const divideBtn = document.getElementById('equals');
const timesBtn = document.getElementById('times');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');


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

sevenBtn.click(function() {
	outputBox.value = 'help';
});



// main();