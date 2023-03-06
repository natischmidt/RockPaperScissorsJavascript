export const rpsApi = {
    setStorage: (token) => sessionStorage.setItem('token', token),
    getStorage: () => sessionStorage.getItem('token'),

    getToken: () => {
        fetch('http://localhost:8080/auth/token')
            .then(response => response.json()
            )
            .then(response => rpsApi.setStorage(response))
            .then(text => console.log(text))
    },

    setPlayerName: (name) => {
        return fetch('http://localhost:8080/user/name', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage.getItem('token')
            },
            body: JSON.stringify({username: name})
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    },

    getPlayerName:(token) => {
         return fetch('http://localhost:8080/user/username', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': rpsApi.getStorage('token')
            },
        })
             .then(response => response.json())
             .then(response => response.username)
             .catch(e => console.log(e))
    },

    createNewGame: (token) => {
        fetch('http://localhost:8080/start', {
            method: 'POST',
            headers: {
                'token': rpsApi.getStorage('token'),
                'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .catch(e => console.log(e))
    },

    getListOfOpenGames: () => {
        return fetch('http://localhost:8080/games')
            .then(response => response.json())
            .catch(e => console.log(e))
    },

    getGameInfoFromGame: (gameToken) => {
        fetch('http://localhost:8080/games/{id}', {
            method: 'GET',
            headers: {
                'token': rpsApi.getStorage(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },

    joinGame: (gameToken) => {
        fetch('http://localhost:8080/join/{id}', {
            method: 'POST',
            headers: {
                'token': rpsApi.getStorage(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },


};

if(sessionStorage.getItem('token') == null){
    rpsApi.getToken();
}