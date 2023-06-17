const show = document.querySelector('.nav-link');
const slowlyShow = document.querySelector('.fa-solid');

show.addEventListener('click', function () {
    slowlyShow.classList.toggle('rotate');
});