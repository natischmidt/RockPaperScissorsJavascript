import {rpsApi} from "./endpoints.js";

export async function getUser() {
    const userToken = rpsApi.getStorage();
    const username = await rpsApi.getPlayerName(userToken)
    console.log(username);

    if (username){
        return username
    }
}

export async function getGameList(){
    const game = await rpsApi.getListOfOpenGames();

    if(game){
        return game;
    }
}

export function startNewGame(){
    const userToken = rpsApi.getStorage();
    rpsApi.createNewGame(userToken);
}

export function removeUser() {
    sessionStorage.removeItem('username');
}

export function computerMove() {
    const choices = ['Rock', 'Scissor', 'Paper'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

export function createMove(move) {
    switch (move) {
        case 'Rock':
            const rockimage = document.createElement('img');
            rockimage.src = 'img/rock-img.png';
            rockimage.alt = 'picture of rock';
            return rockimage;
        case 'Scissor':
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

export function clearChildren(elementId) {
    const element = document.getElementById(elementId)
    for (const child of element.children) {
        element.removeChild(child);
    }
}

export function scoreboard(totalPlayer, totalOpponent){
    if(totalPlayer === 1){
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 1');
    } else if (totalPlayer === 2){
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 2');
    } else if (totalPlayer === 3){
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 3');
    } else {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 0');
    }

    if(totalOpponent === 1){
        document.getElementById('computer-score').innerHTML = 'Computer score: 1';
    } else if (totalOpponent === 2){
        document.getElementById('computer-score').innerHTML = 'Computer score: 2';
    } else if (totalOpponent === 3){
        document.getElementById('computer-score').innerHTML = 'Computer score: 3';
    } else {
        document.getElementById('computer-score').innerHTML = 'Computer score: 0';
    }
}

export function scoreboardPvp(totalPlayer, totalOpponent){
    if(totalPlayer === 1){
        document.getElementById('player-score').innerHTML = 'Your score: 1';
    } else if (totalPlayer === 2){
        document.getElementById('player-score').innerHTML = 'Your score: 2';
    } else if (totalPlayer === 3){
        document.getElementById('player-score').innerHTML = 'Your score: 3';
    } else {
        document.getElementById('player-score').innerHTML = 'Your score: 0';
    }

    if(totalOpponent === 1){
        document.getElementById('opponent-score').innerHTML = 'HämtaUserPls: 1';
    } else if (totalOpponent === 2){
        document.getElementById('opponent-score').innerHTML = 'HämtaUserPls: 2';
    } else if (totalOpponent === 3){
        document.getElementById('opponent-score').innerHTML = 'HämtaUserPls: 3';
    } else {
        document.getElementById('opponent-score').innerHTML = 'HämtaUserPls: 0';
    }
}



