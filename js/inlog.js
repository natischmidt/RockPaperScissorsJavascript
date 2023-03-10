import {rpsApi} from "./endpoints.js";

const loginButton = document.getElementById('loginbutton');

const setUsernameOnToken = async (event) => {
    /*event.preventDefault();*/
    const name = document.getElementById('email').value;
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



