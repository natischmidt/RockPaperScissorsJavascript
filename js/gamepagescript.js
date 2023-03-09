import {
    computerMove,
    clearChildren,
    createMove,
    getPlayerNames,
    getUser,
    getGameInfo,
} from "./functions.js";
import { rpsApi } from "./endpoints.js";

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const gameInfo = getGameInfo();
const refreshButton = document.getElementById('refresh');

const refreshFn = async () => {
    const response = await getGameInfo();
    console.log('refreshed data', response);
    const { opponentMove: player2Move, playerMove: player1Move, gameStatus } = response;

    console.log(player2Move, player1Move);
    if (player1Move) {
        const player1 = document.getElementById('player1');
        clearChildren("player1")
        player1.appendChild(createMove(player1Move.toLowerCase()));
        console.log("children pl1", player1.children)
    }

    if (player2Move) {
        const player2 = document.getElementById('player2');
        clearChildren("player2")
        player2.appendChild(createMove(player2Move.toLowerCase()));
        console.log("children pl2", player2.children)
    }



    const { player1Name, player2Name } = await getPlayerNames();
    document.getElementById('player2Name').innerHTML = player2Name + ':'
    document.getElementById('player1Name').innerHTML = player1Name + ':'

    document.getElementById('brand-title').innerHTML = await getUser();
}

refreshButton.addEventListener('click', refreshFn)


/*


WIP-todo
 Skapa en timer för spelet och om ingen gör nåt slumpas ett move fram,

 Skapa loop som kollar när du gör move om motståndaren gör move annars - waiting for opponent to make move,
 om båda gjort move - checkgameresult



*/

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

refreshFn()


const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');


export function checkPvpResult(playerMove, opponentMove) {

    if (playerMove === opponentMove) {
        console.log('Draw');
        return;
    }
    if (playerMove === 'rock') {

        if (opponentMove === 'scissor') {

            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
        if (opponentMove === 'paper') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
    }
    if (playerMove === 'scissor') {
        if (opponentMove === 'rock') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
        if (opponentMove === 'paper') {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');
        }
    }
    if (playerMove === 'paper') {
        if (opponentMove === 'rock') {
            getUser().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
        if (opponentMove === 'scissor') {
            getOpponent().then(username => document.getElementById('scoreboard').innerHTML = username + 'wins');

        }
    }

}



rock.addEventListener("click", async () => {
    await rpsApi.makeMove('ROCK');
    await refreshFn();
    /*     const closeGame = document.createElement('button');
    
        closeGame.innerHTML = 'Click to close the game';
        document.getElementById('restart').appendChild(closeGame);
        closeGame.addEventListener('click', () => {
            window.location = 'homepage.html';
        }) */
})

scissor.addEventListener("click", async () => {
    await rpsApi.makeMove('SCISSOR');
    await refreshFn();
    /*     const closeGame = document.createElement('button');
    
        closeGame.innerHTML = 'Click to close the game';
        document.getElementById('restart').appendChild(closeGame);
        closeGame.addEventListener('click', () => {
            window.location = 'homepage.html';
        }) */
})

paper.addEventListener("click", async () => {
    await rpsApi.makeMove('PAPER');
    await refreshFn();
    /*     const closeGame = document.createElement('button');
    
        closeGame.innerHTML = 'Click to close the game';
        document.getElementById('restart').appendChild(closeGame);
        closeGame.addEventListener('click', () => {
            window.location = 'homepage.html';
        }) */
})