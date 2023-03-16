export const rpsApi = {
    setToken: (token) => sessionStorage.setItem('token', token),
    getTokenFromStorage: () => sessionStorage.getItem('token'),
    setGameIdStorage: (gameID) => sessionStorage.setItem('gameId', gameID),
    getGameId: () => sessionStorage.getItem('gameId'),
    setUsername: (username) => sessionStorage.setItem('username', username),
    getUsername: () => sessionStorage.getItem('username'),

    /*    Funktioner för att sätta & hämta UUID i sessionstorage, sätta namn på token, sätta gameId i storage
        och sätta namn på användare
    */







    /*
    Alla fetchanrop till backenden
    */
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
            body: JSON.stringify({username: name})
        })
            .then(response => response.json())
            .then(response => rpsApi.setUsername(response.username))
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
            body: JSON.stringify({gamestatusid: rpsApi.getGameId()})
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }
}

/*
 Kollar om det finns någon token i sessionstorage annars skapar den ett
 */

if (sessionStorage.getItem('token') == null) {
    rpsApi.getToken();
}

