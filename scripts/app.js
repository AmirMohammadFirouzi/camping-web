const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const likeIcon = $.querySelectorAll(".place__like-icon");
let activeItem = null;

// Add or Remove Class on Click Button
const toggleClassFunc = () => {
    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle("nav__btn--open");
        navMenu.classList.toggle("nav-menu--open");
        console.log('Clicked');
    });
}

const likeBtnFunc = () => {
    likeIcon.forEach(like => {
        like.addEventListener('click', () => {
            like.classList.toggle("place__like-icon--fill");
        })
    });
}

toggleClassFunc();
likeBtnFunc();