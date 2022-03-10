const newsCarousel = function () {
    /*DOM OBJECTS*/
    const leftButton = document.querySelector('.news__control--left');
    const rightButton = document.querySelector('.news__control--right');
    const carouselContainer = document.querySelector('.news__slider');
    const indicator = document.querySelector('.news__bubbles');
    const indicators = document.querySelectorAll('.news__indicator');
    let width = carouselContainer.clientWidth;
    let sliderCount = 1;
    let indicatorCount = 0;

    carouselContainer.style.transform = `translateX(-${(width + 20) * sliderCount}px)`;

    window.onresize = function () {
        width = carouselContainer.clientWidth;
        carouselContainer.style.transform = `translateX(-${(width + 20) * sliderCount}px)`;
    }

    leftButton.onclick = function () {
        sliderCount--;
        indicatorCount--;

        if (sliderCount < 0) {
            return;
        }

        if (indicatorCount >= 0) {
            indicators[(indicatorCount + 1)].classList.remove('news__indicator--active');
            indicators[indicatorCount].classList.add('news__indicator--active');
        }

        moveCarousel();
    }

    rightButton.onclick = function () {
        sliderCount++;
        indicatorCount++;

        if (sliderCount > carouselContainer.children.length - 1) {
            return;
        }

        if ((indicatorCount - 1) < carouselContainer.children.length - 3) {
            indicators[(indicatorCount - 1)].classList.remove('news__indicator--active');
            indicators[indicatorCount].classList.add('news__indicator--active');
        }

        moveCarousel();
    }

    carouselContainer.addEventListener('transitionend', () => {
        carouselContainer.style.transition = 'none';
        if (sliderCount < 1) {
            sliderCount = carouselContainer.children.length - 2;
            carouselContainer.style.transform = `translateX(-${(width + 20) * sliderCount}px)`;
            indicatorCount = carouselContainer.children.length - 3;
            indicators[indicatorCount].classList.add('news__indicator--active');
            indicators[0].classList.remove('news__indicator--active');
        }
        if (sliderCount > carouselContainer.children.length - 2) {
            sliderCount = 1;
            carouselContainer.style.transform = `translateX(-${(width + 20) * sliderCount}px)`;
            indicatorCount = 0;
            indicators[0].classList.add('news__indicator--active');
            indicators[carouselContainer.children.length - 3].classList.remove('news__indicator--active');
        }
    });

    indicator.onclick = function (event) {
        indicatorCount = searchIndicator(event.target);
        sliderCount = indicatorCount + 1;

        removeAllClasses();
        indicators[indicatorCount].classList.add('news__indicator--active');
        moveCarousel();
    }

    function removeAllClasses() {
        for (let indicatorCounter = 0, indicatorsLength = indicators.length; indicatorCounter < indicatorsLength; indicatorCounter++) {
            indicators[indicatorCounter].classList.remove('news__indicator--active');
        }
    }

    function searchIndicator(indicator) {
        let indicatorPosition = null;

        for (let indicatorCounter = 0, indicatorsLength = indicators.length; indicatorCounter < indicatorsLength; indicatorCounter++) {
            if (indicators[indicatorCounter] == indicator) {
                indicatorPosition = indicatorCounter;
            }
        }

        return indicatorPosition;
    }

    function moveCarousel() {
        carouselContainer.style.transition = 'transform ease-in-out .85s';
        carouselContainer.style.transform = `translateX(-${(width + 20) * sliderCount}px)`;
    }

}();