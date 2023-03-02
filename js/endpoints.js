

export const rpsApi = {
    setStorage: (token) => {sessionStorage.setItem('token', token)},
    getStorage: () => {sessionStorage.getItem('token')},

    getToken: () => {
        fetch('http://localhost:8080/auth/register')
          .then(response => console.log(response.text()))
            .then(text => sessionStorage.setItem('token', text))

    },

    getUuid: () => {
        fetch('http://localhost:8080/auth/authenticate')
            .then(response => console.log(response.text()))
            .then(text => sessionStorage.setItem('token', text))

    },

    setPlayerName: (name) => {
        fetch(updatePlayer, {
            method: 'POST',
            headers: {'token': sessionStorage.getItem('token'),
                'Content-Type': 'application/json'},
            body: JSON.stringify({'username': name})
        })
            .then(response => console.log(response.text()))
    },

    createNewGame: () => {
        fetch(createGame, {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem('token'),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },

    getListOfOpenGames: () => {
        fetch(getAllOpenGames)
            .then(response => console.log(response.text()))
    },

    getGameInfoFromGame: (gameToken) => {
        fetch(getGameInfo, {
            method: 'GET',
            headers: {
                'token': sessionStorage.getItem(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },

    joinGame: (gameToken) => {
        fetch(joinExistingGame, {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },


};

if(sessionStorage.getItem('token') == null){
    rpsApi.getToken();
}