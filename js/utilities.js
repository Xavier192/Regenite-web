const navMenu = document.querySelector('.nav__menu');
const displayNavButton = document.querySelector('.nav__hamburger');

/*******************Display nav**************/

displayNavButton.onclick = function() {
    navMenu.classList.toggle('display-menu');
}