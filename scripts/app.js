const $ = document;
const navBtn = $.querySelector('.nav__btn');
const navMenu = $.querySelector('.nav-menu');
const mobileMenuLinks = $.querySelectorAll('.nav-menu__btn');
let activeItem = null;

// Add or Remove Class on Click Button
const toggleClassFunc = () => {
    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('nav__btn--open');
        navMenu.classList.toggle('nav-menu--open');
        console.log('Clicked');
    });
}
toggleClassFunc();