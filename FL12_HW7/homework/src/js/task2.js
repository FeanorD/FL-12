'use strict';

const ATTEMPTS_AMOUNT = 3;
const MIN_NUMBER = 0;
const MAX_NUMBER = 8;
const MAX_PRIZE = 100;
const MAX_NUMBER_MAGNIFIER = 4;
const MAX_PRIZE_MULTIPLIER = 2;

let usrPrize = 0;
let usrGuess;
let playGame = confirm('Do you want to play a game?');

if (!playGame) {
    alert('You did not become a billionaire, but can.');
} else {
    do {
        let winningNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
        let currentMaxNum = MAX_NUMBER;
        let currentMaxPrize = MAX_PRIZE;
        let currentAttemptPrize = currentMaxPrize;

        for (let attemptNum = 0; attemptNum < ATTEMPTS_AMOUNT; attemptNum++) {
            if (attemptNum > 0) {
                currentAttemptPrize /= 2;
            }

            usrGuess = parseInt(prompt(
`Choose a roulette pocket number from ${MIN_NUMBER} to ${currentMaxNum}
Attempts left: ${ATTEMPTS_AMOUNT - (attemptNum + 1)}
Total prize: ${usrPrize}$
Possible prize on current attempt: ${currentAttemptPrize}$`));

            if (usrGuess === winningNumber) {
                usrPrize += currentAttemptPrize;
                let continueGame = confirm(
`Congratulation, you won! Your prize is: ${currentAttemptPrize}$. 
Do you want to continue?`);
                if (continueGame) {
                    currentMaxNum += MAX_NUMBER_MAGNIFIER;
                    currentMaxPrize *= MAX_PRIZE_MULTIPLIER;
                    currentAttemptPrize = currentMaxPrize;
                    attemptNum = -1;
                } else {
                    break;
                }
            }
            
        }

        alert(`Thank you for your participation. Your prize is: ${usrPrize}$`);

    } while (confirm('Do you want to play again?'));
}