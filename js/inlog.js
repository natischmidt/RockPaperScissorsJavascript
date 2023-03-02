import {updatePlayer, urlGetToken} from "./endpoints.js";
import {getUser} from "./functions.js";
import {rpsApi} from "./endpoints.js";

const logginButton = document.getElementsByClassName('loginbutton');

const setUsernameOnToken = (event) => {
   // event.preventDefault();
    const name = document.getElementById('email').value;
    rpsApi. setPlayerName(name);
    const password = document.getElementById('password').value;
    console.log(name, password);

    if (name && password) {
        localStorage.setItem('username', email);
        window.location = 'homepage.html';
    }

}

logginButton.addEventListener('click', setUsernameOnToken());

/*
async function createToken() {
    try {
        const response = await fetch(urlGetToken, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}


fetch(updatePlayer, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: getUser()
    })
})
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data))*/
