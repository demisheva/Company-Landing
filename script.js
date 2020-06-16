let tabsGallery = document.querySelectorAll('.tabs li');
console.log(tabsGallery);

tabsGallery.forEach(element => {
    element.addEventListener('click', event => {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.show-tab').classList.remove('show-tab');
        element.classList.add('active');
        document.getElementById(`${element.getAttribute('data-gallary')}`).classList.add('show-tab');
    })
});

