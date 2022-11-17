const toggleBtn = document.getElementById('toggle');
const navbarMenu = document.querySelector('.menu');

toggleBtn.addEventListener('click', menuToggle);

function menuToggle() {

    toggleBtn.classList.toggle('menu__toggle--active');
    toggleBtn.classList.toggle('menu__toggle');
    navbarMenu.classList.toggle('menu--active');
    navbarMenu.classList.toggle('menu');
}