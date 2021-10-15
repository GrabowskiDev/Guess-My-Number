'use strict';

//Set random number in range
function randomNumber(range) {
	return Math.trunc(Math.random() * range) + 1;
}

function start() {}

//Increase and decrease that value on btns press

console.log(range);
//Score and highscore system
//Some animations
const guess = document.querySelector('#guess');
const rangeInput = document.querySelector('#range');
const mark = document.querySelector('#mark');

//On pageload:
let number = randomNumber(20);

//Event listeners:
//Check if greater or worse than (and display >, <)
document.querySelector('#check').addEventListener('click', () => {
	if (!guess.value) {
		alert('Insert a number first');
	} else if (guess.value > number) {
		mark.textContent = '>';
	} else if (guess.value < number) {
		mark.textContent = '<';
	} else if (guess.value == number) {
		mark.textContent = '=';
		document.querySelector('#number').textContent = number;
		document.querySelector('#check').disabled = true;
	}
});
