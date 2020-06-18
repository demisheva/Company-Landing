let tabsGallery = document.querySelectorAll('.tabs li');
let galleryFigure = document.querySelectorAll('.show-tab figure');
let testimonials = document.querySelectorAll('.testimonial');
const nextSlide = document.querySelector('.slider-control-right');
const prevSlide = document.querySelector('.slider-control-left');
const closeSlideBtn = document.querySelector('.slider-close');
const bigSliderImg = document.getElementById('big-img');
const nextTestimonial = document.querySelector('.carusel-control-right');
const prevTestimonial = document.querySelector('.carusel-control-left');


clickOnImgShowSlider();

nextSlide.addEventListener("click", showNextPrevSlide);
document.querySelector('body').addEventListener('keyup', event => {
    if (event.keyCode == 39) { showNextPrevSlide(event) }
});

prevSlide.addEventListener("click", showNextPrevSlide);
document.querySelector('body').addEventListener('keyup', event => {
    if (event.keyCode == 37) { showNextPrevSlide(event) }
});

closeSlideBtn.addEventListener("click", closeSlider);
document.querySelector('body').addEventListener('keyup', event => {
    if (event.keyCode == 27) { closeSlider() }
});

tabsGallery.forEach(element => {
    element.addEventListener('click', event => {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.show-tab').classList.remove('show-tab');
        element.classList.add('active');
        document.getElementById(`${element.getAttribute('data-gallery')}`).classList.add('show-tab');
        galleryFigure = document.querySelectorAll('.show-tab figure');
        clickOnImgShowSlider();
    })
});

function clickOnImgShowSlider() {
    galleryFigure.forEach(element => {
        element.addEventListener('click', event => {
            element.classList.add('active-img');
            document.querySelector('.overlay').classList.remove('hide-block');
            bigSliderImg.innerHTML = element.innerHTML;
        })
    })
}

function closeSlider() {
    document.querySelector('.overlay').classList.add('hide-block');
}

function showNextPrevSlide(event) {
    for (let index = 0; index < galleryFigure.length; index++) {
        if (galleryFigure[index].classList.contains("active-img")) {
            if (event.srcElement.className == "fa fa-angle-right" || event.srcElement.className == "slider-control slider-control-right" || event.keyCode == 39) {
                showRightItem(index, galleryFigure, "active-img");
            } else if (event.srcElement.className == "fa fa-angle-left" || event.srcElement.className == "slider-control slider-control-left" || event.keyCode == 37) {
                showLeftSlide(index, galleryFigure, "active-img");
            }
            break;
        }
    }
}

function showRightItem(index, list, className) {
    if (list[index + 1] == list[list.length]) {
        list[0].classList.add(className);
        bigSliderImg.innerHTML = list[0].innerHTML;
    } else {
        list[index + 1].classList.add(className);
        bigSliderImg.innerHTML = list[index + 1].innerHTML;
    }
    list[index].classList.remove(className);
}

function showLeftSlide(index, list, className) {
    if (index - 1 == -1) {
        list[list.length - 1].classList.add(className);
        bigSliderImg.innerHTML = list[list.length - 1].innerHTML;
    } else {
        list[index - 1].classList.add(className);
        bigSliderImg.innerHTML = list[index - 1].innerHTML;
    }
    list[index].classList.remove(className);
}


nextTestimonial.addEventListener("click", showNextPrevNextTestimonial);

prevTestimonial.addEventListener("click", showNextPrevNextTestimonial);



function showNextPrevNextTestimonial() {
    for (let index = 0; index < testimonials.length; index++) {
        if (testimonials[index].classList.contains("show-testimonial")) {
            if (event.srcElement.className == "fa fa-angle-right") {
                showRightItem(index, testimonials, "show-testimonial");
            } else if (event.srcElement.className == "fa fa-angle-left") {
                showLeftSlide(index, testimonials, "show-testimonial");
            }
            break;
        }
    }
}
