import { getUser } from "./functions.js";
import { rpsApi } from "./endpoints.js";

function openRulesPopup() {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle("show");
}

const startGame = document.getElementById('start');

async function startNewGame() {
    const userToken = rpsApi.getTokenFromStorage();
    const { gamestatusid } = await rpsApi.createNewGame(userToken);
    rpsApi.setGameIdStorage(gamestatusid);
    window.location = 'game.html';
}

startGame.addEventListener('click', () => startNewGame())

getUser().then(username => document.getElementById('brand-title').innerHTML = username);
