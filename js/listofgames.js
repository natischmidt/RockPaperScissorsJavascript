import {getGameList, getUser, joinGame} from "./functions.js";
import {rpsApi} from "./endpoints.js";

/* Kallar på getUser metoden i functions och tillsätter spelarens username på element i html för att visa namnet */
getUser().then(username => document.getElementById('brand-title').innerHTML = username);

/* Kallar på funktionen för att hämta alla spel som har status Open */
getGameList()
    .then(data => {
        console.log('DATA, getGameList', data);
        // Loopar igenom arrayen som kommer i json format
        for (let key in data) {
            console.log(data[key]);
            const list = document.querySelector('#gamelist')
            const a = document.createElement('a');
            // Skapar och tillsätter ahref taggar som ska få motståndare att kunna gå med i ett öppet spel
            a.append(` ${data[key].player1.username}'s game`);

            a.onclick = function() {
                /* Vid klick på ett spel som finns motståndare kallas joinGame funktionen som hämtar spelets information
                 och för motståndaren till spelets sida */
                joinGame(data[key].gameId);
                rpsApi.setGameIdStorage(data[key].gameId);

                window.location = 'game.html'
            }
            // Tillsätter alla öppna spel i en lista som visas för spelare som letar efter spel
            list.appendChild(a);
        }
    })






