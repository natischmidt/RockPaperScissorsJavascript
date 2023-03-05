import {startNewGame} from "./functions.js";


function openRulesPopup() {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle("show");
}

const startGame = document.getElementById('start');

startGame.addEventListener('click', (e) => startNewGame(e));
