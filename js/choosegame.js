import {getUser} from "./functions.js";

document.getElementById('username').innerHTML = `${getUser()}`;

function openRulesPopup() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}