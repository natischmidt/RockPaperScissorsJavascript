import {getUser} from "./functions.js";

document.getElementById('username').innerHTML = `${getUser()}`;

let popup = document.getElementById("myPopup");

function openRulesPopup() {
    popup.classList.toggle("show");
}