const showListDescOne = document.querySelector('.nav-rotate-one');
const showListDescTow = document.querySelector('.nav-rotate-tow');
const rotateArrowOne = document.querySelector('.rotate-one');
const rotateArrowTow = document.querySelector('.rotate-tow');
const showFirstList = document.querySelector('.dropdown-list');
const showSecondList = document.querySelector('.dropdown-list-tow');

const btnMobileOne = document.querySelector('.btn-mobile-one');
const btnMobileTow = document.querySelector('.btn-mobile-tow');
const rotateMobile1 = document.querySelector('.rotate-mobile-one');
const rotateMobile2 = document.querySelector('.rotate-mobile-tow');
const showFirstListMobile = document.querySelector('.dropdown-mobile-one');
const showSecondListMobile = document.querySelector('.dropdown-mobile-tow');

const btnShowMenu = document.querySelector('.navbar-toggler');
const addMenu = document.querySelector('.offcanvas-end');



//Show list in menu Desktop
showListDescOne.addEventListener('click', function () {
    showFirstList.classList.toggle('show');
    showListDescOne.classList.toggle('show');
    rotateArrowOne.classList.toggle('rotate');

    showSecondList.classList.remove('show');
    showListDescTow.classList.remove('show');
    rotateArrowTow.classList.remove('rotate');
});
showListDescTow.addEventListener('click', function () {
    showSecondList.classList.toggle('show');
    showListDescTow.classList.toggle('show');
    rotateArrowTow.classList.toggle('rotate');

    showFirstList.classList.remove('show');
    showListDescOne.classList.remove('show');
    rotateArrowOne.classList.remove('rotate');
});

// Show list menu in mobile
btnMobileOne.addEventListener('click', function () {
    showFirstListMobile.classList.toggle('show');
    btnMobileOne.classList.toggle('show');
    rotateMobile1.classList.toggle('rotate');

    showSecondListMobile.classList.remove('show');
    btnMobileTow.classList.remove('show');
    rotateMobile2.classList.remove('rotate');
});

btnMobileTow.addEventListener('click', function () {
    showSecondListMobile.classList.toggle('show');
    btnMobileTow.classList.toggle('show');
    rotateMobile2.classList.toggle('rotate');

    showFirstListMobile.classList.remove('show');
    btnMobileOne.classList.remove('show');
    rotateMobile1.classList.remove('rotate');
});


//open the menu bar
btnShowMenu.addEventListener('click', function () {
    addMenu.classList.toggle('show-menu');
    addMenu.classList.remove('show');
    btnShowMenu.classList.toggle('rotate-btn');

});

