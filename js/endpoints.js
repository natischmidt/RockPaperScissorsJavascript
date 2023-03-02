export const urlGetToken = 'http://localhost:8080/auth/token';
export const updatePlayer = 'http://localhost:8080/user/name';
export const createGame = 'http://localhost:8080/start';
export const getAllOpenGames = 'http://localhost:8080/games';
export const getGameInfo = 'http://localhost:8080/games/{id}';
export const joinExistingGame = 'http://localhost:8080/join/game';
export const makeMove = 'http://localhost:8080/games/move/{sign}';


const rpsApi = {
    setStorage: (token) => {sessionStorage.setItem('token', token)},
    getStorage: () => {sessionStorage.getItem('token')},

    getToken: () => {
        fetch(urlGetToken)
          .then(response => response.text())
            .then(text => sessionStorage.setItem('token', text))

    },

    setPlayerName: (name) => {
        fetch(updatePlayer, {
            method: 'POST',
            headers: {'token': sessionStorage.getItem('token'),
                'Content-Type': 'application/json'},
            body: JSON.stringify({'username': name})
        })
            .then(response => response.text())
    },

    createNewGame: () => {
        fetch(createGame, {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem('token'),
                'Content-Type': 'application/json'},
        })
            .then(response => response.text())
    },

    getListOfOpenGames: () => {
        fetch(getAllOpenGames)
            .then(response => response.text())
    },

    getGameInfoFromGame: (gameToken) => {
        fetch(getGameInfo, {
            method: 'GET',
            headers: {
                'token': sessionStorage.getItem(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => response.text())
    },

    joinGame: (gameToken) => {
        fetch(joinExistingGame, {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => response.text())
    },


};

if(sessionStorage.getItem('token') == null){
    rpsApi.getToken();
}