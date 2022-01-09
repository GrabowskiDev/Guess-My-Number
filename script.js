'use strict';

//Set random number in range
function randomNumber(range) {
	return Math.trunc(Math.random() * range) + 1;
}

function start() {
	number = randomNumber(rangeInput.value);
	score = rangeInput.value;
	scoreDisplay.textContent = score;
	document.querySelector('#number').textContent = '?';
	checkButton.disabled = false;
}

function checkForLose() {}

//Some animations

//Query Selectors:
const guess = document.querySelector('#guess');
const rangeInput = document.querySelector('#range');
const mark = document.querySelector('#mark');
const scoreDisplay = document.querySelector('#score');
const highscoreDisplay = document.querySelector('#highscore');
const gamesWonDisplay = document.querySelector('#games');
const checkButton = document.querySelector('#check');
const againButton = document.querySelector('#again');

//Variables:
let gamesWon = 0;

//On pageload:
start();

//Event listeners:
checkButton.addEventListener('click', () => {
	if (!guess.value) {
		alert('Insert a number first');
	} else if (guess.value > number) {
		mark.textContent = '>';
		score--;
		scoreDisplay.textContent = score;
	} else if (guess.value < number) {
		mark.textContent = '<';
		score--;
		scoreDisplay.textContent = score;
	} else if (guess.value == number) {
		mark.textContent = '=';
		document.querySelector('#number').textContent = number;
		checkButton.disabled = true;
		gamesWon++;
		gamesWonDisplay.textContent = gamesWon;
		//Update highscore
		if (score > Number(highscoreDisplay.textContent))
			highscoreDisplay.textContent = score;
	}

	//Check for lose
	if (score === 0) {
		checkButton.disabled = true;
		gamesWon--;
		gamesWonDisplay.textContent = gamesWon;
		alert("You lose! (i don't even know how you did it)");
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
