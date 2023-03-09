import {
    clearChildren,
    computerMove,
    createMove,
    getOpponent,
    getUser,
    getGameInfo,
} from "./functions.js";
import {rpsApi} from "./endpoints";

getUser().then(username => document.getElementById('brand-title').innerHTML = username);



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const gameInfo = getGameInfo();
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', async () => {
    const response = await getGameInfo();
    console.log(response);
    location.reload();
})


/*


WIP-todo
 Skapa en timer för spelet och om ingen gör nåt slumpas ett move fram,

 Skapa loop som kollar när du gör move om motståndaren gör move annars - waiting for opponent to make move,
 om båda gjort move - checkgameresult



*/

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

getUser().then(username => document.getElementById('brand-title').innerHTML = username);

let user = getUser().then(username => document.getElementById('player').innerHTML = username + ':');
getOpponent().then(username => document.getElementById('opponent').innerHTML = username + ':');

const player = document.getElementById('player');
const opponent = document.getElementById('opponent');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');


export function checkPvpResult(playerMove, opponentMove) {

    if (playerMove === opponentMove) {
        console.log('Draw');
        return;
    }
    if (playerMove === 'Rock') {

        if (opponentMove === 'Scissor') {

            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
        if (opponentMove === 'Paper') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
    }
    if (playerMove === 'Scissor') {
        if (opponentMove === 'Rock') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
        if (opponentMove === 'Paper') {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
    }
    if (playerMove === 'Paper') {
        if (opponentMove === 'Rock') {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
        if (opponentMove === 'Scissor') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
    }

}



    rock.addEventListener("click", () => {

        player.appendChild(createMove('Rock'))
        rpsApi.makeMove('ROCK').then(response => console.log(response))
        const closeGame = document.createElement('button');

        closeGame.innerHTML = 'Click to close the game';
        document.getElementById('restart').appendChild(closeGame);
        closeGame.addEventListener('click', () => {
            window.location = 'homepage.html';
        })
    })



    scissor.addEventListener("click", () => {
        if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
            return
        }

        clearChildren('player');
        clearChildren('opponent');

        const opponentMove = computerMove();
        checkResult('Scissor', opponentMove);
        player.appendChild(createMove('Scissor'));
        opponent.appendChild(createMove(opponentMove));

        if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
            const winner = document.createElement('h2');
            const restart = document.createElement('button');

            winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'HämtaUserPls wins!';
            restart.innerHTML = 'Restart game';
            document.getElementById('scoreboard').appendChild(winner);
            document.getElementById('restartGamePVP').appendChild(restart);

            restart.addEventListener('click', () => {
                window.location = 'game.html';
            })
        }

        scoreboardPvp(totalPlayer, totalOpponent);
    })

    paper.addEventListener("click", () => {
        if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
            return
        }

        clearChildren('player');
        clearChildren('opponent');

        const opponentMove = computerMove();
        checkResult('Paper', opponentMove);
        player.appendChild(createMove('Paper'));
        opponent.appendChild(createMove(opponentMove));

        if (totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS) {
            const winner = document.createElement('h2');
            const restart = document.createElement('button');

            winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'HämtaUserPls wins!';
            restart.innerHTML = 'Restart game';
            document.getElementById('scoreboard').appendChild(winner);
            document.getElementById('restartGamePVP').appendChild(restart);

            restart.addEventListener('click', () => {
                window.location = 'game.html';
            })
        }

        scoreboardPvp(totalPlayer, totalOpponent);
    })