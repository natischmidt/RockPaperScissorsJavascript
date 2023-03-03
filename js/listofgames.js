import {createList} from "./functions.js";
import {rpsApi} from "./endpoints.js";

createList();
const openGames = document.getElementById('gamelist');

openGames.innerHTML = rpsApi.getListOfOpenGames();


