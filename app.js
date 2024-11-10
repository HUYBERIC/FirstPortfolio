

// V A R I A B L E S

const menuIcon = document.querySelector('#menu-icon')
const navBar = document.querySelector('.navbar')

// F U N C T I O N S

// MenuHamburger

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

// TypeJS

const typed = new Typed(".multiple-text", {
    strings : [
        "Web Developer",
        "Frontend Developer",
        /* "Backend Developer", */
        "UI/UX Magician",
        "Fast Learner"
    ],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true,
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

// E V E N T L I S T E N E R S


