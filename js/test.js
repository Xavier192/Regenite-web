

const clock = document.querySelector('.indicators__time-counter');
const progress = document.querySelector('.indicators__progress-img');
const paginationLeft = document.querySelector('.pagination__button--left');
const paginationRight = document.querySelector('.pagination__button--right');
const carouselItems = Array.from(document.querySelectorAll('.questions__item'));
const carouselContainer = document.querySelector('.q_cont');
const width = carouselItems[0].clientWidth;
let fase = 0;


/*****************Action Listener********************/

paginationRight.addEventListener('click',progresoAdelante);
paginationLeft.addEventListener('click',progresoAtras);

window.onload = function () {
    minusClock();
    moverPreguntas();
}

/*****************Clock*******************/

async function minusClock() {
    let hora = {
        "min":5,
        "sec":0
    }
    
    while (hora.sec > 0 || hora.min > 0) {
        await sleep(1000);
        hora = actualizarHora(hora);
        clock.innerHTML = refactorClock(hora.min,hora.sec);
    }
}

function actualizarHora(hora){
    hora.sec--;

    if (hora.sec < 0) {
        hora.sec = 59;
        hora.min--;
    }

    return hora;
}

function refactorClock(min,sec){

    if(min < 10){
        min = `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }
    
    return `00:${min}:${sec}`;
}

/****************Mover barra progreso*****************/


function moverPreguntas(){
    carouselItems.forEach( (item,index) => item.style.left = width*index+'px');
    carouselContainer.style.transition = 'transform 1s ease-in-out';
}

function progresoAdelante(){
    fase++;
    
    if(fase > 2){
        fase = 2;
    }

    carouselContainer.style.transform ='translateX('+(-width*fase)+'px)';
    progress.src = 'img/progress-'+fase+'.svg';
    window.scrollTo(0, 0);
}

function progresoAtras(){
    fase--;

    if(fase < 0){
        fase = 0;
    }

    carouselContainer.style.transform ='translateX('+(-width*fase)+'px)';
    progress.src = 'img/progress-'+fase+'.svg';
    window.scrollTo(0, 0);
}