let popup = document.getElementById("myPopup");

function openRulesPopup() {
    popup.classList.toggle("show");
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


let showbody = document.getElementById("start-btn");
function openBody(){
    showbody.classList.toggle("bodyid");
}
