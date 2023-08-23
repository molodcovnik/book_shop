const btnPrev = document.querySelector('.prev');
const itBtnSlider = document.querySelector('.it');
const btnNext = document.querySelector('.next');

const slider = document.querySelector('.promo');

const sliderItems = Array.from(slider.children);

const styleFunction = function(nextSlideIndex) {
    if (nextSlideIndex === 1) {
        btnPrev.style.backgroundColor = '#d7d6dd';
        itBtnSlider.style.backgroundColor = '#9E98DC';
    } else if (nextSlideIndex === 2){
        itBtnSlider.style.backgroundColor = '#d7d6dd';
        btnNext.style.backgroundColor = '#9E98DC';
    } else if (nextSlideIndex === 0) {
        btnNext.style.backgroundColor = '#d7d6dd';
        btnPrev.style.backgroundColor = '#9E98DC';
    }
}

export const sliderFunction = function(){
    sliderItems.forEach(function (slide, index) {

    if (index !== 0) {
        slide.classList.add('hidden');
    }
    
    //добавляем индексы
    slide.dataset.index = index;

    // дата атрибут active
    sliderItems[0].setAttribute('data-active', '');

    //клик по слайдам
    slide.addEventListener('click', function() {
        
        //скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        //расчитываем индекс след слайда
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
       
        // стилизуем кнопки при изменении слайда
        styleFunction(nextSlideIndex);

        //находим след слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        //показываем след слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');

    })
})}

export const nextClickFunction = function() {btnNext.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    

    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    styleFunction(nextSlideIndex);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}
}

btnPrev.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    console.log(nextSlideIndex);
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    if (nextSlideIndex === 1) {
        btnNext.style.backgroundColor = '#d7d6dd';
        itBtnSlider.style.backgroundColor = '#9E98DC';
    } else if (nextSlideIndex === 2){
        btnNext.style.backgroundColor = '#9E98DC';
        btnPrev.style.backgroundColor = '#d7d6dd';
    } else if (nextSlideIndex === 0) {
        btnPrev.style.backgroundColor = '#9E98DC';
        itBtnSlider.style.backgroundColor = '#d7d6dd';
    }

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}