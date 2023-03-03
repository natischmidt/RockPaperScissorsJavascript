import {getUser, startNewGame} from "./functions.js";

document.getElementById('username').innerHTML = `${getUser()}`;

function openRulesPopup() {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle("show");
}

const startGame = document.getElementById('start');

startGame.addEventListener('click', (e) => startNewGame(e));
