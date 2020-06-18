let tabsGallery = document.querySelectorAll('.tabs li');
let galleryFigure = document.querySelectorAll('.show-tab figure');
const nextSlide = document.querySelector('.slider-control-right');
const prevSlide = document.querySelector('.slider-control-left');
const closeSlideBtn = document.querySelector('.slider-close');
const bigSliderImg = document.getElementById('big-img');

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
                showRightSlide(index);
            } else if (event.srcElement.className == "fa fa-angle-left" || event.srcElement.className == "slider-control slider-control-left" || event.keyCode == 37) {
                showLeftSlide(index);
            }
            break;
        }
    }
}

function showRightSlide(index) {
    if (galleryFigure[index + 1] == galleryFigure[galleryFigure.length]) {
        galleryFigure[0].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[0].innerHTML;
    } else {
        galleryFigure[index + 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[index + 1].innerHTML;
    }
    galleryFigure[index].classList.remove("active-img");
}

function showLeftSlide(index) {
    if (index - 1 == -1) {
        galleryFigure[galleryFigure.length - 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[galleryFigure.length - 1].innerHTML;
    } else {
        galleryFigure[index - 1].classList.add("active-img");
        bigSliderImg.innerHTML = galleryFigure[index - 1].innerHTML;
    }
    galleryFigure[index].classList.remove("active-img");
}

