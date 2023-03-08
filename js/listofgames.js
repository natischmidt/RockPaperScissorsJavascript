import {getGameList, getUser, joinGame} from "./functions.js";
import {rpsApi} from "./endpoints.js";

getUser().then(username => document.getElementById('brand-title').innerHTML = username);

getGameList()

    .then(data => {
        // Data returnerar en Array med objekt
        // Gör en forloop som loopar igenom arrayen

        console.log('DATA, getGameList', data);
        for (let key in data) {
            console.log(data[key]);
            const list = document.querySelector('#gamelist')
            const a = document.createElement('a');
            a.append(` ${data[key].player1.username}'s game`);

            a.onclick = function() {
                joinGame(data[key].gameId);
                rpsApi.setGameIdStorage(data[key].gameId);

                window.location = 'game.html'
            }
            list.appendChild(a);
        }
    })






