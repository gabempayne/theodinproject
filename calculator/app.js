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
nineBtn.addEventListener('click', function() {
	outputBox.value = 9;
});
fourBtn.addEventListener('click', function() {
	outputBox.value = 4;
});
fiveBtn.addEventListener('click', function() {
	outputBox.value = 5;
});
sixBtn.addEventListener('click', function() {
	outputBox.value = 6;
});
oneBtn.addEventListener('click', function() {
	outputBox.value = 1;
});
twoBtn.addEventListener('click', function() {
	outputBox.value = 2;
});
threeBtn.addEventListener('click', function() {
	outputBox.value = 3;
});
zeroBtn.addEventListener('click', function() {
	outputBox.value = 0;
});
clearBtn.addEventListener('click', function() {
	outputBox.value = 0;
});

// operator listeners 
// equalsBtn.addEventListener('click', function() {
// 	outputBox.value = 0;
// });
// threeBtn.addEventListener('click', function() {
// 	outputBox.value = 3;
// });


// testing checking button textContent
for(var i = 0; i < buttons.length; i++){
	console.log(buttons[i].textContent);
}