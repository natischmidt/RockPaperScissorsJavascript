export const rpsApi = {
    setToken: (token) => sessionStorage.setItem('token', token),
    getTokenFromStorage: () => sessionStorage.getItem('token'),
    setGameIdStorage: (gameID) => sessionStorage.setItem('gameId', gameID),
    getGameId: () => sessionStorage.getItem('gameId'),

    getToken: () => {
        return fetch('http://localhost:8080/auth/token')
            .then(response => response.json()
            )
            .then(response => rpsApi.setToken(response))
            .then(text => console.log(text))
    },

    setPlayerName: (name) => {
        return fetch('http://localhost:8080/user/name', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': rpsApi.getTokenFromStorage()
            },
            body: JSON.stringify({ username: name })
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    },

    getPlayerName: (token) => {
        return fetch('http://localhost:8080/user/username', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': rpsApi.getTokenFromStorage()
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log('getPlayerName', response);
                return response.username;
            })
            .catch(e => console.log(e))
    },

    createNewGame: (token) => {
        return fetch('http://localhost:8080/start', {
            method: 'POST',
            headers: {
                'token': rpsApi.getTokenFromStorage(),
                'Content-Type': 'application/json'
            },
        }).then(response => response.json()).catch(e => console.log(e))
    },

    getListOfOpenGames: () => {
        return fetch('http://localhost:8080/games')
            .then(response => {
                console.log('getListOfOpenGames', response);
                return response.json()
            })
            .catch(e => console.log(e))
    },

    getGameInfoFromGame: (gameToken) => {
        return fetch(`http://localhost:8080/games/${gameToken}`, {
            method: 'GET',
            headers: {
                'token': rpsApi.getTokenFromStorage(),
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
    },

    joinGame: (gameToken) => {
        return fetch(`http://localhost:8080/join/${gameToken}`, {
            headers: {
                'token': rpsApi.getTokenFromStorage(),
                'Content-Type': 'application/json'
            },
        }).then(response => console.log(response.text()))
    },


    gameInfo: (gameId) => {
        const res = fetch(`http://localhost:8080/games/result/${gameId}`, {
            headers: {
                'Content-Type': 'application-json',
                token: rpsApi.getTokenFromStorage()
            }
        });
        let response = res.json();
        return rpsApi.getGameId(gameId);
    },
    makeMove: (move) => {
        return fetch(`http://localhost:8080/games/move/${move}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: rpsApi.getTokenFromStorage()
            },
            body: JSON.stringify({ gamestatusid: rpsApi.getGameId() })
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }
}



if (sessionStorage.getItem('token') == null) {
    rpsApi.getToken();
}