'use strict';

const ATTEMPTS_AMOUNT = 3;
const MIN_NUMBER = 0;
const MAX_NUMBER = 8;
const MAX_PRIZE = 100;

let usrPrize;
let usrGuess;
let playGame = confirm('Do you want to play a game?');

if (!playGame) {
    alert('You did not become a billionaire, but can.');
} else {
    let winningNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    let currentMaxNum = MAX_NUMBER;
    let currentMaxPrize = MAX_PRIZE;
    let currentAttemptPrize = currentMaxPrize;

    for (let attemptNum = 0; attemptNum < ATTEMPTS_AMOUNT; attemptNum++) {
        if (attemptNum > 0) {
            currentAttemptPrize /= 2;
        }

        usrGuess = parseInt(prompt(`Choose a roulette pocket number from ${MIN_NUMBER} to ${currentMaxNum}
                                    \nAttempts left: ${ATTEMPTS_AMOUNT - (attemptNum + 1)}
                                    \nTotal prize: ${usrPrize}$
                                    \nPossible prize on current attempt: ${currentAttemptPrize}}`));

        if (usrGuess === winningNumber) {
            usrPrize += currentAttemptPrize;
            alert(`Thank you for your participation. Your prize is: ${currentAttemptPrize}$`);
        }
    }
}