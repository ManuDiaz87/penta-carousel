const carruselItems = document.querySelectorAll('.carrusel__item');

const nextItemBtn = document.querySelector('#nextItemBtn')
const prevItemBtn = document.querySelector('#prevItemBtn')


let posActual = 0;

nextItemBtn.addEventListener('click', () => {
    carruselItems[posActual].classList.remove('carrusel__item--active');

    
    if(posActual+1 == carruselItems.length){
        posActual = 0; 
        carruselItems.forEach((item, index) => {
            if (index === posActual) {
                item.classList.add('carrusel__item--active');
            }
            item.classList.remove('carrusel__item--translateUp');
        });
                 
    }else{
        carruselItems[posActual].classList.add('carrusel__item--translateUp');
        posActual = (posActual + 1 == carruselItems.length) ? 0 : posActual + 1;
        carruselItems[posActual].classList.add('carrusel__item--active');
    }
  
    
})

prevItemBtn.addEventListener('click', () => {
    //posActual = (posActual - 1 + carruselItems.length) % carruselItems.length;
    posActual = (posActual - 1  < 0) ? carruselItems.length-1 : posActual - 1;
    console.log(posActual);
    carruselItems.forEach((item, index) => {
        item.classList.remove('carrusel__item--active');
        if (index === posActual) {
            item.classList.add('carrusel__item--active');
        }
    });
})