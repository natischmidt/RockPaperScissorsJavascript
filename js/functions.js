import {rpsApi} from "./endpoints.js";

export async function getUser() {
    const userToken = rpsApi.getTokenFromStorage();
    const username = await rpsApi.getPlayerName(userToken)
    console.log(username);

    if (username) {
        return username
    }
}

export async function getGameInfo() {
    const gameToken = rpsApi.getGameId();
    const gameInfo = await rpsApi.getGameInfoFromGame(gameToken);


    console.log(gameToken);
    return gameInfo;
}

/*


    {
    "gamestatusid": "dc6a034f-73b1-4439-bd97-6b61a8756317",
    "playerOne": {
        "userId": "a3197fa4-137b-46ac-ae76-13bcf7f151eb",
        "username": "alex"
    },
    "playerMove": "SCISSORS",
    "gameStatus": "ACTIVE",
    "playerTwo": {
        "userId": "a32c09a3-c2c8-41b4-9d4b-f65e758240fc",
        "username": "oliveros"
    },
    "opponentMove": "ROCK"
}
 */

async function refresh() {
    await getGameInfo();
    setTimeout(refresh, 5000);
    location.reload();
}

export async function getOpponent() {
    const gameInfo = await getGameInfo();
    const myToken = rpsApi.getTokenFromStorage();


    console.log('HEJ', gameInfo);
    if (!gameInfo.player1 || !gameInfo.player2) {
        setTimeout(refresh, 5000);
        return 'Waiting for other player...'
    }

    if (gameInfo.player1.userId === myToken) {
        clearTimeout(refresh);
        return gameInfo.player2.username;
    } else {
        clearTimeout(refresh);
        return gameInfo.player1.username;
    }
}

export async function joinGame(gameID) {
    rpsApi.joinGame(gameID)

}

export async function getGameList() {
    const game = await rpsApi.getListOfOpenGames();

    if (game) {
        return game;
    }
}

export function removeUser() {
    sessionStorage.removeItem('username');
}

export function computerMove() {
    const choices = ['Rock', 'Scissor', 'Paper'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

export function createMove(move) {
    switch (move) {
        case 'Rock':
            const rockimage = document.createElement('img');
            rockimage.src = 'img/rock-img.png';
            rockimage.alt = 'picture of rock';
            return rockimage;
        case 'Scissor':
            const scissorimage = document.createElement('img');
            scissorimage.src = 'img/scissor-img.png';
            scissorimage.alt = 'picture of scissor';
            return scissorimage;
        default:
            const paperimage = document.createElement('img');
            paperimage.src = 'img/paper-img.png';
            paperimage.alt = 'picture of paper';
            return paperimage;
    }
}

export function clearChildren(elementId) {
    const element = document.getElementById(elementId)
    for (const child of element.children) {
        element.removeChild(child);
    }
}

export function scoreboard(totalPlayer, totalOpponent) {
    if (totalPlayer === 1) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 1');
    } else if (totalPlayer === 2) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 2');
    } else if (totalPlayer === 3) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 3');
    } else {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 0');
    }

    if (totalOpponent === 1) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 1';
    } else if (totalOpponent === 2) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 2';
    } else if (totalOpponent === 3) {
        document.getElementById('computer-score').innerHTML = 'Computer score: 3';
    } else {
        document.getElementById('computer-score').innerHTML = 'Computer score: 0';
    }
}

export function scoreboardPvp(totalPlayer, totalOpponent) {
    if (totalPlayer === 1) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 1');
    } else if (totalPlayer === 2) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 2');
    } else if (totalPlayer === 3) {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 3');
    } else {
        getUser().then(username => document.getElementById('player-score').innerHTML = username + ' score: 0');
    }

    if (totalOpponent === 1) {
        getOpponent().then(username => document.getElementById('opponent-score').innerHTML = username + ' score: 1');
    } else if (totalOpponent === 2) {
        getOpponent().then(username => document.getElementById('opponent-score').innerHTML = username + ' score: 2');
    } else if (totalOpponent === 3) {
        getOpponent().then(username => document.getElementById('opponent-score').innerHTML = username + ' score: 3');
    } else {
        getOpponent().then(username => document.getElementById('opponent-score').innerHTML = username + ' score: 0');
    }
}



