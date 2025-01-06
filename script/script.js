let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.dots li');

let active = 0;
let lengthitems = items.length - 1;

// Auto-slide functionality
let autoslide = setInterval(() => {
    active = (active + 1 > lengthitems) ? 0 : active + 1;
    reloadslider();
}, 5000);

// Reload slider to update the visible item and active dot
function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastactiveDot = document.querySelector('.dots li.active');
    if (lastactiveDot) lastactiveDot.classList.remove('active');
    
    dots[active].classList.add('active');
}

// Handle dot click
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadslider();
    });
});



// ------------------------ 
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.auto_slider'); // Select all sliders

    sliders.forEach((slider) => {
        const leftArrow = slider.querySelector('.auto_slider_innerSide_left img');
        const rightArrow = slider.querySelector('.auto_slider_innerSide_right img');

        leftArrow.addEventListener('click', () => {
            // Add class 'auto_slider_click' and remove 'auto_slider' for the current slider
            slider.classList.add('auto_slider');
            slider.classList.remove('auto_slider_click');
        });

        rightArrow.addEventListener('click', () => {
            // Add class 'auto_slider' and remove 'auto_slider_click' for the current slider

            slider.classList.add('/');
            slider.classList.remove('auto_slider');
        });
    });
});



