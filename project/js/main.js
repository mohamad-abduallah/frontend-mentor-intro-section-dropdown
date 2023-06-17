const btn1 = document.querySelector('.nav-rotate-one');
const btn2 = document.querySelector('.nav-rotate-tow');
const rotate1 = document.querySelector('.rotate-one');
const rotate2 = document.querySelector('.rotate-tow');

btn1.addEventListener('click', function () {
    rotate1.classList.toggle('rotate');
    rotate1.classList.add('rotate-one');
    rotate2.classList.remove('rotate');
});

btn2.addEventListener('click', function () {
    rotate2.classList.toggle('rotate');
    rotate2.classList.add('rotate-one');
    rotate1.classList.remove('rotate');
});