import {getUser, removeUser} from "./functions.js";



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

getUser().then(username => document.getElementById('brand-title').innerHTML = 'Welcome ' + username);

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener("click", removeUser);

