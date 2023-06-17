const btn1 = document.querySelector('.nav-rotate-1');
const btn2 = document.querySelector('.nav-rotate-2');
const rotate1 = document.querySelector('.move1');
const rotate2 = document.querySelector('.move2');

btn1.addEventListener('click', function () {
    rotate1.classList.toggle('rotate');
});

btn2.addEventListener('click', function () {
    rotate2.classList.toggle('rotate');
});