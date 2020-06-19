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
                showRightImg(index);
            } else if (event.srcElement.className == "fa fa-angle-left" || event.srcElement.className == "slider-control slider-control-left" || event.keyCode == 37) {
                showLeftImg(index);
            }
            break;
        }
    }
}

function showRightImg(index) {
    if (galleryFigure[index + 1] == galleryFigure[galleryFigure.length]) {
        galleryFigure[0].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[0].innerHTML;
    } else {
        galleryFigure[index + 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[index + 1].innerHTML;
    }
    galleryFigure[index].classList.remove("active-img");
}

function showLeftImg(index) {
    if (index - 1 == -1) {
        galleryFigure[galleryFigure.length - 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[galleryFigure.length - 1].innerHTML;
    } else {
        galleryFigure[index - 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[index - 1].innerHTML;
    }
    galleryFigure[index].classList.remove("active-img");
}


nextTestimonial.addEventListener("click", showNextPrevNextTestimonial);

prevTestimonial.addEventListener("click", showNextPrevNextTestimonial);

function showNextPrevNextTestimonial() {
    for (let index = 0; index < testimonials.length; index++) {
        if (testimonials[index].classList.contains("show-testimonial")) {
            if (event.srcElement.className == "fa fa-angle-right") {
                showRightTestimonial(index);
            } else if (event.srcElement.className == "fa fa-angle-left") {
                showLeftTestimonial(index);
            }
            break;
        }
    }
}
function showRightTestimonial(index) {
    if (testimonials[index + 1] == testimonials[testimonials.length]) {
        testimonials[0].classList.add("show-testimonial");
        testimonials.innerHTML = testimonials[0].innerHTML;
    } else {
        testimonials[index + 1].classList.add("show-testimonial");
        testimonials.innerHTML = testimonials[index + 1].innerHTML;
    }
    testimonials[index].classList.remove("show-testimonial");
}

function showLeftTestimonial(index) {
    if (index - 1 == -1) {
        testimonials[testimonials.length - 1].classList.add("show-testimonial");
        testimonials.innerHTML = testimonials[testimonials.length - 1].innerHTML;
    } else {
        testimonials[index - 1].classList.add("show-testimonial");
        testimonials.innerHTML = testimonials[index - 1].innerHTML;
    }
    testimonials[index].classList.remove("show-testimonial");
}

setInterval(caruselTestimonial, 5000);

function caruselTestimonial() {
    for (let index = 0; index < testimonials.length; index++) {
        if (testimonials[index].classList.contains("show-testimonial")) {
            showRightTestimonial(index);
            break;
        }
    }
}