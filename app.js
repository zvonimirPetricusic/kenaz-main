window.onload = function(){
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
console.log(prevBtn);

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter>=carouselImages.length -1)  return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

    const carouselSlidet = document.querySelector('.carousel-slide-2');
    const carouselImagest = document.querySelectorAll('.carousel-slide-2 img');
    
    const prevBtnt = document.querySelector('#prev-2');
    const nextBtnt = document.querySelector('#next-2');
    
    
    let countert = 1;
    const sizet = carouselImagest[0].clientWidth;
    
    carouselSlidet.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    
    nextBtnt.addEventListener('click',()=>{
        if(countert>=carouselImagest.length -1)  return;
        carouselSlidet.style.transition = "transform 0.4s ease-in-out";
        countert++;
        carouselSlidet.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    });
    
    prevBtnt.addEventListener('click',()=>{
        if(countert<=0) return;
        carouselSlidet.style.transition = "transform 0.4s ease-in-out";
        countert--;
        carouselSlidet.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    });
    
    carouselSlidet.addEventListener('transitionend', ()=>{
        if(carouselImagest[counter].id === 'lastClone-2'){
            carouselSlidet.style.transition = "none";
            countert = carouselImagest.length -2; 
            carouselSlidet.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
        }
        if(carouselImagest[countert].id === 'firstClone-2'){
            carouselSlidet.style.transition = "none";
            countert = carouselImagest.length -countert; 
            carouselSlidet.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
        }
    });

    

};


    
