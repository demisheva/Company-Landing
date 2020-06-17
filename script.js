// tabs
let tabsGallery = document.querySelectorAll('.tabs li');

tabsGallery.forEach(element => {
    element.addEventListener('click', event => {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.show-tab').classList.remove('show-tab');
        element.classList.add('active');
        document.getElementById(`${element.getAttribute('data-gallery')}`).classList.add('show-tab');
    })
});


// gallery
const galleryImages = document.querySelectorAll('.show-tab figure');
const nextSlide = document.querySelector('.slider-control-right');
const prevSlide = document.querySelector('.slider-control-left');
const closeSlideBtn = document.querySelector('.slider-close');
const bigSliderImg = document.getElementById('big-img');
console.log(galleryImages)
nextSlide.addEventListener("click", showNextSlide);
prevSlide.addEventListener("click", showPrevSlide);
closeSlideBtn.addEventListener("click", closeSlide);

galleryImages.forEach(element => {
    element.addEventListener('click', event => {
        element.classList.add('active-img');
        document.querySelector('.overlay').classList.remove('hide-block');
        bigSliderImg.innerHTML = element.innerHTML;
    })
})

function closeSlide() {
    document.querySelector('.overlay').classList.add('hide-block');
}

function showNextSlide() {

}

function showPrevSlide() {

}
