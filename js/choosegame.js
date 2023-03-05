import {getUser, startNewGame} from "./functions.js";


function openRulesPopup() {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle("show");
}

const startGame = document.getElementById('start');

getUser().then(username => document.getElementById('brand-title').innerHTML = username);

startGame.addEventListener('click', (e) => startNewGame(e));
