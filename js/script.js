/*******************Declarations**********************/

const carouselItems = Array.from(document.querySelector('.carousel__slide').children);
const leftArrow = document.querySelector('.carousel__control--left');
const rightArrow = document.querySelector('.carousel__control--right');
const indicators = Array.from(document.querySelector('.carousel__indicators').children);
let slideCounter = 0;


/******************Utilities*********************/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/******************Start******************/
window.onload = function() {
    startCarousel();
}

async function startCarousel() {
    while (true) {
        await sleep(13000);
        slideCounter++;
        reset([carouselItems, indicators], ['visible', 'active']);
    }
}

/***************Carousel functionality****************/

leftArrow.onclick = function() {
    slideCounter--;
    reset([carouselItems, indicators], ['visible', 'active']);
}

rightArrow.onclick = function() {
    slideCounter++;
    reset([carouselItems, indicators], ['visible', 'active']);
}

indicators.forEach(function(item, index) {
    item.onclick = function() {
        slideCounter = index;
        reset([carouselItems, indicators], ['visible', 'active']);
    }
});

function reset(subject, clas) {
    if (slideCounter < 0) {
        slideCounter = 2;
    }

    for (let i = 0; i < subject.length; i++) {
        subject[i].forEach(item => item.classList.remove(clas[i]));
        subject[i][Math.abs(slideCounter % subject[0].length)].classList.add(clas[i]);
    }
}