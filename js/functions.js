import {rpsApi} from "./endpoints.js";



/* funktion vi använder överallt där vi måste hämta användare */
export async function getUser() {
    const userToken = rpsApi.getTokenFromStorage();
    const username = await rpsApi.getPlayerName(userToken)
    console.log(username);

    if (username) {
        return username
    }
}


/* funktion vi använder överallt där vi behöver hämta info om spelet  */
export async function getGameInfo() {
    const gameToken = rpsApi.getGameId();
    const gameInfo = await rpsApi.getGameInfoFromGame(gameToken);


    console.log(gameToken);
    return gameInfo;
}



/* funktion för att joina ett spel via fetch */
export async function joinGame(gameID) {
    rpsApi.joinGame(gameID)

}


/* funktion för att hämta lista på spel med status OPEN via fetch */
export async function getGameList() {
    const game = await rpsApi.getListOfOpenGames();

    if (game) {
        return game;
    }
}

export function removeUser() {
    sessionStorage.removeItem('username');
}


/* funktion som används i spela mot datorn som gör att datorn får ett random move */
export function computerMove() {
    const choices = ['rock', 'scissor', 'paper'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}


/* funktion som vi använder i spela mot datorn och pvp för att göra ett move med switch case */
export function createMove(move) {
    switch (move) {
        case 'rock':
            const rockimage = document.createElement('img');
            rockimage.src = 'img/rock-img.png';
            rockimage.alt = 'picture of rock';
            return rockimage;
        case 'scissor':
            const scissorimage = document.createElement('img');
            scissorimage.src = 'img/scissor-img.png';
            scissorimage.alt = 'picture of scissor';
            return scissorimage;
        default:
            const paperimage = document.createElement('img');
            paperimage.src = 'img/paper-img.png';
            paperimage.alt = 'picture of paper';
            return paperimage;
    }
}


/* funktion vi använder för att rensa element i olika scenarion */
export function clearChildren(elementId) {
    const element = document.getElementById(elementId)
    for (const child of element.children) {
        element.removeChild(child);
    }
}


/* funktion som används för att skriva ut resultat när man spelar mot datorn */
export function scoreboard(totalPlayer, totalOpponent) {
    if (totalPlayer === 1) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 1');
    } else if (totalPlayer === 2) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 2');
    } else if (totalPlayer === 3) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 3');
    } else {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 0');
    }

    if (totalOpponent === 1) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 1';
    } else if (totalOpponent === 2) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 2';
    } else if (totalOpponent === 3) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 3';
    } else {
        document.getElementById('computer-score').innerHTML = 'Computer score: 0';
    }
}


