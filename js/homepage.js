import {getUser, removeUser} from "./functions.js";



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/* Kallar på getUser metoden i functions och tillsätter spelarens username på element i html för att visa namnet */
getUser().then(username => document.getElementById('brand-title').innerHTML = 'Welcome ' + username);

const logoutButton = document.getElementById('logout-button');

/* Tar bort en spelares username från session storage om spelaren klickar på logout knappet i menyfältet */
logoutButton.addEventListener("click", removeUser);

