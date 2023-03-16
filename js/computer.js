import { clearChildren, computerMove, createMove, getUser, scoreboard } from "./functions.js";

/*  Hämtar alla element vi behöver med i och sätter username i navbar/där spelarens namn visas  */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


getUser().then(username => document.getElementById('brand-title').innerHTML = username);
getUser().then(username => document.getElementById('player').innerHTML = username + ':');


const player = document.getElementById('player');
const opponent = document.getElementById('opponent');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');


const MAX_NUMBER_OF_WINS = 3;
let totalPlayer = 0;
let totalOpponent = 0;

/* Används för att räkna och jämföra spelarens/datorn poäng */




/* Funktion om tar in usermove och computer move och jämför samt räknar - bäst till 3 */
function checkResult(playerMove, opponentMove) {
    if (playerMove === opponentMove) {
        console.log('Draw');
        return;
    }
    if (playerMove === 'rock') {
        if (opponentMove === 'scissor') {
            totalPlayer += 1;
        }
        if (opponentMove === 'paper') {
            totalOpponent += 1;
        }
    }
    if (playerMove === 'scissor') {
        if (opponentMove === 'rock') {
            totalOpponent += 1;
        }
        if (opponentMove === 'paper') {
            totalPlayer += 1;
        }
    }
    if (playerMove === 'paper') {
        if (opponentMove === 'rock') {
            totalPlayer += 1;
        }
        if (opponentMove === 'scissor') {
            totalOpponent += 1;
        }
    }
}


/* Onclick event när du väljer rock som kollar om någon har 3 poäng annars rensar move-rutan från föregående move
och sedan lägger till rock som du klickat på
OM spelet är över skrivs vinnare ut som restart knapp skapas */
rock.addEventListener("click", () => {
    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('rock', opponentMove);
    player.appendChild(createMove('rock'));
    opponent.appendChild(createMove(opponentMove));

    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        const restart = document.createElement('button');

        if (totalPlayer === MAX_NUMBER_OF_WINS) {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + ' wins');

            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        } else if (totalOpponent === MAX_NUMBER_OF_WINS) {
            document.getElementById('scoreboard').innerHTML = 'Computer wins!';
            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        }

        document.getElementById('restart').appendChild(restart);

        restart.addEventListener('click', () => {
            window.location = 'computer.html';
        })
    }

    scoreboard(totalPlayer, totalOpponent);

})

/* Onclick event när du väljer scissor som kollar om någon har 3 poäng annars rensar move-rutan från föregående move
och sedan lägger till scissor som du klickat på
OM spelet är över skrivs vinnare ut som restart knapp skapas */
scissor.addEventListener("click", () => {
    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('scissor', opponentMove);
    player.appendChild(createMove('scissor'));
    opponent.appendChild(createMove(opponentMove));

    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        const restart = document.createElement('button');

        if (totalPlayer === MAX_NUMBER_OF_WINS) {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + ' wins');

            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        } else if (totalOpponent === MAX_NUMBER_OF_WINS) {
            document.getElementById('scoreboard').innerHTML = 'Computer wins!';
            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        }
    }

    scoreboard(totalPlayer, totalOpponent);
})

/* Onclick event när du väljer paper som kollar om någon har 3 poäng annars rensar move-rutan från föregående move
och sedan lägger till paper som du klickat på
OM spelet är över skrivs vinnare ut som restart knapp skapas */
paper.addEventListener("click", () => {
    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('paper', opponentMove);
    player.appendChild(createMove('paper'));
    opponent.appendChild(createMove(opponentMove));

    if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
        const restart = document.createElement('button');

        if (totalPlayer === MAX_NUMBER_OF_WINS) {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + ' wins');

            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        } else if (totalOpponent === MAX_NUMBER_OF_WINS) {
            document.getElementById('scoreboard').innerHTML = 'Computer wins!';
            restart.innerHTML = 'Restart game';
            document.getElementById('restart').appendChild(restart);
            restart.addEventListener('click', () => {
                window.location = 'computer.html';
            })
        }
    }

    scoreboard(totalPlayer, totalOpponent);
})

