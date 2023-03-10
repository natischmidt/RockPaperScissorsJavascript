import {
    clearChildren,
    createMove,
    getUser,
    getGameInfo,
} from "./functions.js";
import { rpsApi } from "./endpoints.js";

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const gameInfo = getGameInfo();
document.getElementById('brand-title').innerHTML = rpsApi.getUsername();

let startInterval = setInterval(async () => {
    rpsApi.getGameInfoFromGame(rpsApi.getGameId()).then(game => {
        document.querySelector("#player2Name").innerHTML = `Waiting for other player...`;
        if (game.playerOne !== null && game.playerTwo !== null) {
            console.log(game);
            document.querySelector("#player1Name").innerHTML = `${game.player1.username}:`;
            document.querySelector("#player2Name").innerHTML = `${game.player2.username}:`;
            refreshFn();
            waitingForMove();
        }
    });
}, 500)

export async function waitingForMove() {
     clearInterval(startInterval);
     await refreshFn();
    let timer = setInterval(  () => {
        getGameInfo()
            .then(game => {
                if (game.playerMove !== null && game.opponentMove !== null) {
                    refreshFn();
                    checkPvpResult(game.player1.username, game.player2.username, game.playerMove, game.opponentMove);
                    clearInterval(timer);
                }
            })
            .catch(e => console.log(e));
    }, 1000)
}

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


/*
    const { player1Name, player2Name } = await getPlayerNames();
    document.getElementById('player2Name').innerHTML = player2Name + ':'
    document.getElementById('player1Name').innerHTML = player1Name + ':'
*/
    document.getElementById('brand-title').innerHTML = await getUser();
}
/*


WIP-todo
 Skapa en timer för spelet och om ingen gör nåt slumpas ett move fram,

 Skapa loop som kollar när du gör move om motståndaren gör move annars - waiting for opponent to make move,
 om båda gjort move - checkgameresult



*/

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');


export function checkPvpResult(playerOne, playerTwo, playerMove, opponentMove) {

    const result = document.getElementById('player-score');



    if (playerMove === opponentMove) {
        result.innerHTML = 'Draw!';


    }
    if (playerMove === 'ROCK') {

        if (opponentMove === 'SCISSORS') {
            result.innerHTML = playerOne + ' wins!';
        }
        if (opponentMove === 'PAPER') {
            result.innerHTML = playerTwo + ' wins!';
        }
    }
    if (playerMove === 'SCISSORS') {
        if (opponentMove === 'ROCK') {
            result.innerHTML = playerTwo + ' wins!';

        }
        if (opponentMove === 'PAPER') {
            result.innerHTML = playerOne + ' wins!';
        }
    }
    if (playerMove === 'PAPER') {
        if (opponentMove === 'ROCK') {
            result.innerHTML = playerOne + ' wins!';

        }
        if (opponentMove === 'SCISSORS') {
            result.innerHTML = playerTwo + ' wins!';

        }
    }
    const closeGame = document.createElement('button');

     closeGame.innerHTML = 'Click to close the game';
     document.getElementById('player-score').appendChild(closeGame);
     closeGame.addEventListener('click', () => {
         window.location = 'homepage.html';
     })

    rock.classList.toggle('disable');
    scissor.classList.toggle('disable');
    paper.classList.toggle('disable');
}


rock.addEventListener("click", async () => {
    await rpsApi.makeMove('ROCK');
    await refreshFn();
})

scissor.addEventListener("click", async () => {
    await rpsApi.makeMove('SCISSOR');
    await refreshFn();
})

paper.addEventListener("click", async () => {
    await rpsApi.makeMove('PAPER');
    await refreshFn();
})