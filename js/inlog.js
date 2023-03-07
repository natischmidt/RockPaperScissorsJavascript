import {rpsApi} from "./endpoints.js";

const loginButton = document.getElementById('loginbutton');

const setUsernameOnToken = async (event) => {
    /*event.preventDefault();*/
    const name = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(name && password) {
        try {
            await rpsApi.setPlayerName(name);
            window.location = 'homepage.html';
        } catch (error) {
            console.log(error)
        }
    }
}

loginButton.addEventListener('click', setUsernameOnToken);



