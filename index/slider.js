// slider - https://www.youtube.com/watch?v=jTsufbSgM8Y

function openNav() {
    document.getElementById("responsiveNav").style.width = "100%";
    document.getElementById("responsiveNav").style.height = "100%";
    document.getElementById("topnav").style.height = "0%";
}

function closeNav() {
    document.getElementById("responsiveNav").style.width = "0%";
    document.getElementById("responsiveNav").style.height = "0%";
    document.getElementById("topnav").style.height = "59px";
}

let pressed = false;

function autoSlide() {
    if (pressed === false) {
        console.log(pressed);
        nextSlide();
    } else {
        pressed = false;
        console.log(pressed);
    }
}

window.onload = function () {


    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    prevBtn.addEventListener("click", function () {
        prevSlide();
        pressed = true;
        console.log(pressed);
    });
    nextBtn.addEventListener("click", function () {
        nextSlide();
        pressed = true;
        console.log(pressed);
    });
    if (pressed === false) {
        setInterval(autoSlide, 7000);
    }
}
let slideNumber = 0;
const prevSlide = () => {
    const slides = document.getElementsByClassName('slides');
    const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if (slideNumber == 0) {
        slideNumber = slides.length - 1;
    } else {
        slideNumber = slideNumber - 1;
    }
    slides[slideNumber].classList.add("current");
}
const nextSlide = () => {
    const slides = document.getElementsByClassName('slides');
    const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if (slideNumber == (slides.length - 1)) {
        slideNumber = 0;
    } else {
        slideNumber = slideNumber + 1;
    }
    slides[slideNumber].classList.add("current");
}