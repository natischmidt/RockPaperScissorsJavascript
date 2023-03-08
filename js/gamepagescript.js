import {clearChildren, computerMove, createMove, getOpponent, getUser, scoreboardPvp, getGameInfo} from "./functions.js";


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', async () => {
    const response = await getGameInfo();
    console.log(response);
    location.reload();
})


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

getUser().then(username => document.getElementById('brand-title').innerHTML = username);

getUser().then(username => document.getElementById('player').innerHTML = username + ':');
getOpponent().then(username => document.getElementById('opponent').innerHTML = username + ':');

const player = document.getElementById('player');
const opponent = document.getElementById('opponent');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const MAX_NUMBER_OF_WINS = 3;
let totalPlayer = 0;
let totalOpponent = 0;

function checkResult(playerMove, opponentMove){
    if(playerMove === opponentMove){
        console.log('Draw');
        return;
    }
    if(playerMove === 'Rock'){
        if(opponentMove === 'Scissor'){
            totalPlayer += 1;
        }
        if(opponentMove === 'Paper'){
            totalOpponent += 1;
        }
    }
    if(playerMove === 'Scissor'){
        if(opponentMove === 'Rock'){
            totalOpponent += 1;
        }
        if(opponentMove === 'Paper'){
            totalPlayer += 1;
        }
    }
    if(playerMove === 'Paper'){
        if(opponentMove === 'Rock'){
            totalPlayer += 1;
        }
        if(opponentMove === 'Scissor'){
            totalOpponent += 1;
        }
    }
}


rock.addEventListener("click", () => {
    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('Rock', opponentMove);
    player.appendChild(createMove('Rock'));
    opponent.appendChild(createMove(opponentMove));

    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        const winner = document.createElement('h2');
        const restart = document.createElement('button');

        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'HämtaUserPls wins!';
        restart.innerHTML = 'Restart game';
        document.getElementById('scoreboard').appendChild(winner);
        document.getElementById('restartGamePVP').appendChild(restart);

        restart.addEventListener('click', () =>  {
            window.location = 'game.html';
        })
    }

    scoreboardPvp(totalPlayer, totalOpponent);
})

scissor.addEventListener("click", () => {
    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('Scissor', opponentMove);
    player.appendChild(createMove('Scissor'));
    opponent.appendChild(createMove(opponentMove));

    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        const winner = document.createElement('h2');
        const restart = document.createElement('button');

        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'HämtaUserPls wins!';
        restart.innerHTML = 'Restart game';
        document.getElementById('scoreboard').appendChild(winner);
        document.getElementById('restartGamePVP').appendChild(restart);

        restart.addEventListener('click', () =>  {
            window.location = 'game.html';
        })
    }

    scoreboardPvp(totalPlayer, totalOpponent);
})

paper.addEventListener("click", () => {
    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        return
    }

    clearChildren('player');
    clearChildren('opponent');

    const opponentMove = computerMove();
    checkResult('Paper', opponentMove);
    player.appendChild(createMove('Paper'));
    opponent.appendChild(createMove(opponentMove));

    if(totalPlayer === MAX_NUMBER_OF_WINS || totalOpponent === MAX_NUMBER_OF_WINS){
        const winner = document.createElement('h2');
        const restart = document.createElement('button');

        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'HämtaUserPls wins!';
        restart.innerHTML = 'Restart game';
        document.getElementById('scoreboard').appendChild(winner);
        document.getElementById('restartGamePVP').appendChild(restart);

        restart.addEventListener('click', () =>  {
            window.location = 'game.html';
        })
    }

    scoreboardPvp(totalPlayer, totalOpponent);
})