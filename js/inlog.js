const loginButton = document.getElementById('loginbutton');

const setUsernameOnToken = () => {
    const name = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(name);
    rpsApi.setPlayerName(name)
        .then(data => {
            console.log(data);
            /*
            if (name && password) {
                localStorage.setItem('username', name);
                window.location = 'homepage.html';
            } */
        });
}



