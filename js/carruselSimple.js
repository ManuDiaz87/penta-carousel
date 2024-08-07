const carruselItems = document.querySelectorAll('.carrusel__item');

const nextItemBtn = document.querySelector('#nextItemBtn')
const prevItemBtn = document.querySelector('#prevItemBtn')


let posActual = 0;

nextItemBtn.addEventListener('click', (e) => {
    prevItemBtn.disabled=false;
    //AL ACTUAL LE SACO EL ACTIVE Y LO SUBO.
    carruselItems[posActual].classList.remove('carrusel__item--active');
    carruselItems[posActual].classList.add('carrusel__item--translateUp');
    //AL SIGUIENTE LE AGREGO ACTIVE.
    carruselItems[posActual+1].classList.add('carrusel__item--active');
    posActual++;
    // SI LLEGO AL ULTIMO DESACTIVO EL BOTON DE SIGUIENTE.
    if(posActual == carruselItems.length - 1){
        nextItemBtn.disabled=true;
    }

    

})

prevItemBtn.addEventListener('click', (e) => {
    nextItemBtn.disabled=false;
       //AL ACTUAL LE SACO EL ACTIVE Y BAJA
    carruselItems[posActual].classList.remove('carrusel__item--active');
    //AL SIGUIENTE LO BAJO Y LE AGREGO ACTIVE.
    carruselItems[posActual-1].classList.remove('carrusel__item--translateUp');
    carruselItems[posActual-1].classList.add('carrusel__item--active');   
    posActual--;
    // SI LLEGO AL PRMERO DESACTIVO EL BOTON DE PREVIO.
    if(posActual == 0){
        prevItemBtn.disabled=true;
    }
   
})