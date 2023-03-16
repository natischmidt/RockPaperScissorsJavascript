import { getUser } from "./functions.js";
import { rpsApi } from "./endpoints.js";

const startGame = document.getElementById('start');


/*
async await funktion som hämtar UUID från storage och startar ett nytt game med användarens id
*/
async function startNewGame() {
    const userToken = rpsApi.getTokenFromStorage();
    const { gamestatusid } = await rpsApi.createNewGame(userToken);
    rpsApi.setGameIdStorage(gamestatusid);
    window.location = 'game.html';
}

startGame.addEventListener('click', () => startNewGame())

getUser().then(username => document.getElementById('brand-title').innerHTML = username);
