import {rpsApi} from "./endpoints.js";

const loginButton = document.getElementById('loginbutton');

/* Funktion som tar det spelaren skriver in som sitt användarnamn,
sätter tokenet som skapas till användaren och för en vidare */
const setUsernameOnToken = async (event) => {
    /*event.preventDefault();*/
    const name = document.getElementById('email').value;
    // Kontrollerar så input fältet har fyllts i
    if(name) {
        try {
            await rpsApi.setPlayerName(name);
            window.location = 'homepage.html';
        } catch (error) {
            console.log(error)
        }
    }
}

loginButton.addEventListener('click', setUsernameOnToken);



