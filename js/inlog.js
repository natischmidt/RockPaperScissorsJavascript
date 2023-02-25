
const loginButton = document.getElementById('loginbutton')

const redirectOnLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    if(email && password){
        localStorage.setItem('username', email)
        window.location = 'homepage.html';
    }
}

loginButton.addEventListener('click', redirectOnLogin)