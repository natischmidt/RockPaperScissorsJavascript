import {getGameList, getUser} from "./functions.js";

getUser().then(username => document.getElementById('brand-title').innerHTML = username);

getGameList()
    .then(game => document.getElementById('gamelist').innerHTML = game)
    .then(data => console.log(data))






