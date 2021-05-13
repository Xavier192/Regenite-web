const carouselSlide = document.querySelector('.carousel__slide');
const carouselItems = Array.from(carouselSlide.children);
const itemWidth = carouselItems[0].clientWidth;
const leftArrow = document.querySelector('.carousel__control--left');
const rightArrow = document.querySelector('.carousel__control--right');
const indicators = Array.from(document.querySelector('.carousel__indicators').children);
let slideCounter = 0;



indicators.forEach(function(button, index) {
    button.onclick = function() {
        removeActive();
        indicators[index].classList.add('active');
        carouselItems[slideCounter].classList.remove('visible');
        carouselItems[index].classList.add('visible');
        slideCounter = index;
    }
});

leftArrow.onclick = function() {
    slideCounter--;
    if (slideCounter < -1) return;
    if (slideCounter < 0) {
        comeForward();
    } else {
        carouselItems[slideCounter + 1].classList.remove('visible');
        carouselItems[slideCounter].classList.add('visible');
        moveButton(slideCounter + 1, slideCounter);
    }
}

rightArrow.onclick = function() {
    slideCounter++;
    if (slideCounter > carouselItems.length) return;
    if (slideCounter > carouselItems.length - 1) {
        comeBack();
    } else {
        carouselItems[slideCounter - 1].classList.remove('visible');
        carouselItems[slideCounter].classList.add('visible');
        moveButton(slideCounter - 1, slideCounter);
    }
}

function comeBack() {
    slideCounter = 0;
    carouselItems[carouselItems.length - 1].classList.remove('visible');
    carouselItems[slideCounter].classList.add('visible');
    moveButton(carouselItems.length - 1, slideCounter);
}

function comeForward() {
    slideCounter = carouselItems.length - 1;
    carouselItems[0].classList.remove('visible');
    carouselItems[slideCounter].classList.add('visible');
    moveButton(0, slideCounter);
}

function moveButton(posActual, posDestino) {
    indicators[posActual].classList.remove('active');
    indicators[posDestino].classList.add('active');
}

function removeActive() {
    indicators.forEach(button => button.classList.remove('active'));
}