const btn1 = document.querySelector('.nav-rotate-one');
const btn2 = document.querySelector('.nav-rotate-tow');
const rotate1 = document.querySelector('.rotate-one');
const rotate2 = document.querySelector('.rotate-tow');
const showFirstList = document.querySelector('.dropdown-list');
const showSecondList = document.querySelector('.dropdown-list-tow');

const btnMobile1 = document.querySelector('.btn-mobile-one');
const btnMobile2 = document.querySelector('.btn-mobile-tow');
const rotateMobile1 = document.querySelector('.rotate-mobile-one');
const rotateMobile2 = document.querySelector('.rotate-mobile-tow');
const showFirstListMobile = document.querySelector('.dropdown-mobile-one');
const showSecondListMobile = document.querySelector('.dropdown-mobile-tow');

const btnShowMenu = document.querySelector('.navbar-toggler');
const addMenu = document.querySelector('.offcanvas-end');

btnShowMenu.addEventListener('click', function () {
    addMenu.classList.toggle('show-menu');
    addMenu.classList.remove('show');
    btnShowMenu.classList.toggle('rotate-btn');

});


btnMobile1.addEventListener('click', function () {
    showFirstListMobile.classList.toggle('show');
    btnMobile1.classList.toggle('show');
    rotateMobile1.classList.toggle('rotate');

    showSecondListMobile.classList.remove('show');
    btnMobile2.classList.remove('show');
    rotateMobile2.classList.remove('rotate');
});

btnMobile2.addEventListener('click', function () {
    showSecondListMobile.classList.toggle('show');
    btnMobile2.classList.toggle('show');
    rotateMobile2.classList.toggle('rotate');

    showFirstListMobile.classList.remove('show');
    btnMobile1.classList.remove('show');
    rotateMobile1.classList.remove('rotate');
});

btn1.addEventListener('click', function () {
    showFirstList.classList.toggle('show');
    btn1.classList.toggle('show');
    rotate1.classList.toggle('rotate');

    showSecondList.classList.remove('show');
    btn2.classList.remove('show');
    rotate2.classList.remove('rotate');
});

btn2.addEventListener('click', function () {
    showSecondList.classList.toggle('show');
    btn2.classList.toggle('show');
    rotate2.classList.toggle('rotate');

    showFirstList.classList.remove('show');
    btn1.classList.remove('show');
    rotate1.classList.remove('rotate');
});