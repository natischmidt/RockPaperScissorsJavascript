import {clearChildren, computerMove, createMove, getUser} from "./functions.js";

let popup = document.getElementById("myPopup");

function openRulesPopup() {
    popup.classList.toggle("show");
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let showbody = document.getElementById("start-btn");

function openBody(){
    showbody.classList.toggle("bodyid");
}

document.getElementById('username').innerHTML = `${getUser()}`;

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
        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'Computer wins!';
        document.getElementById('scoreboard').appendChild(winner);
    }
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
        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'Computer wins!';
        document.getElementById('scoreboard').appendChild(winner);
    }
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
        winner.innerHTML = totalPlayer === MAX_NUMBER_OF_WINS ? getUser() + ' wins!' : 'Game Over! Computer wins!';
        document.getElementById('scoreboard').appendChild(winner);
    }
})

