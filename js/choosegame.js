import {getUser} from "./functions.js";

document.getElementById('username').innerHTML = `${getUser()}`;

const popup = document.getElementById("myPopup");
function openRulesPopup() {
    popup.classList.toggle("show");
}