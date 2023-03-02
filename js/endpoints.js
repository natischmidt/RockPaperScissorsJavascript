const rpsApi = {
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
                'token': sessionStorage.getItem('token'),
            },
            body: JSON.stringify({username: name})
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    },

    /*
    setPlayerName: (name) => {
        return fetch('http://localhost:8080/user/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': rpsApi.getStorage(),
            },
            body: JSON.stringify({username: name})
        })
            .then(response => response.text())
            .catch(error => console.log(error))
    }, */

    createNewGame: () => {
        fetch('http://localhost:8080/start', {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem('token'),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },

    getListOfOpenGames: () => {
        fetch('http://localhost:8080/games')
            .then(response => console.log(response.text()))
    },

    getGameInfoFromGame: (gameToken) => {
        fetch('http://localhost:8080/games/{id}', {
            method: 'GET',
            headers: {
                'token': sessionStorage.getItem(gameToken),
                'Content-Type': 'application/json'},
        })
            .then(response => console.log(response.text()))
    },

    joinGame: (gameToken) => {
        fetch('http://localhost:8080/join/{id}', {
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