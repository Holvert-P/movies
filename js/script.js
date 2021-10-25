const animation = document.querySelector('.navbar');
const button = document.querySelector('.container__button');
const navbar__menu = document.querySelector('.container__menu');
const button__search = document.querySelector('.search__button');

button.addEventListener('click', () => {
    animation.classList.toggle('navbar__animation');
    navbar__menu.classList.toggle('animation__menu');
    button.classList.toggle('animation__button')
    button__search.classList.toggle('search__button--toggle')
})

button.addEventListener("blur", function(event) {
    animation.classList.toggle('navbar__animation');
    navbar__menu.classList.toggle('animation__menu');
    button.classList.toggle('animation__button')
    button__search.classList.toggle('search__button')
}, true);
