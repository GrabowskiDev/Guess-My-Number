'use strict';

//Set random number in range
function randomNumber(range) {
	return Math.trunc(Math.random() * range) + 1;
}

function start() {
	number = randomNumber(rangeInput.value);
	document.querySelector('#number').textContent = '?';
	checkButton.disabled = false;
}

//Score and highscore system
//Some animations

//Query Selectors:
const guess = document.querySelector('#guess');
const rangeInput = document.querySelector('#range');
const mark = document.querySelector('#mark');
const checkButton = document.querySelector('#check');
const againButton = document.querySelector('#again');

//Variables:
let games = 0;

//On pageload:
start();

//Event listeners:
checkButton.addEventListener('click', () => {
	if (!guess.value) {
		alert('Insert a number first');
	} else if (guess.value > number) {
		mark.textContent = '>';
	} else if (guess.value < number) {
		mark.textContent = '<';
	} else if (guess.value == number) {
		mark.textContent = '=';
		document.querySelector('#number').textContent = number;
		checkButton.disabled = true;
		games++;
		document.querySelector('#games').textContent = games;
	}
});

againButton.addEventListener('click', () => {
	start();
});

//Increase and decrease that value on btns press
document.querySelector('#increase').addEventListener('click', () => {
	guess.value = Number(guess.value) + 1;
});
document.querySelector('#decrease').addEventListener('click', () => {
	if (Number(guess.value > 0)) guess.value = Number(guess.value) - 1;
});
