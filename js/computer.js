let popup = document.getElementById("myPopup");

function openRulesPopup() {
    popup.classList.toggle("show");
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
