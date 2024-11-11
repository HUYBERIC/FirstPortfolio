

// --- H A M B U R G E R ---  //

// v a r i a b l e s

const menuIcon = document.querySelector('#menu-icon')
const navBar = document.querySelector('.navbar')

// f u n c t i o n s

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

// --- D I S C O R D  B U T T O N S ---  //

// v a r i a b l e s

const discordBtns = document.querySelectorAll('.discordBtn')

// f u n c t i o n s

discordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const textToCopy = '263325233283334145';
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "ID copied successfully",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'custom-popup-class',
                    title: 'custom-title-class',
                    icon: 'custom-icon-class',
                }
            });
        })
        .catch(err => {
            console.error("Copy error", err);
        });
    });
});


// --- M O D A L - R E A D M O R E //

// v a r i a b l e s

const modalReadMore = document.querySelector('.modal-read-more')
const overlay = document.querySelector('.overlay')
const closingBtn = document.querySelector('.closing-modal')
const btnReadMore = document.querySelector('.btn-read-more')

// f u n c t i o n s

btnReadMore.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
});

function handleEscape(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        closeModal();
        closeSkillsModal();
    }
}

function openModal() {
    modalReadMore.classList.remove('hidden');
    document.documentElement.classList.add('no-scroll');
}

function closeModal() {
    modalReadMore.classList.add('hidden');
    document.documentElement.classList.remove('no-scroll');
}

btnReadMore.addEventListener('click', openModal);
closingBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', handleEscape);

// --- M O D A L - S K I L L S //

// v a r i a b l e s

const modalSkills = document.querySelector('.modal-skills')
const overlaySkills = document.querySelector('.overlay-skills')
const closingBtnSkills = document.querySelector('.closing-modal-skills')
const btnSkills = document.querySelector('.btn-skills')

// f u n c t i o n s

btnSkills.addEventListener('click', (event) => {
    event.preventDefault();
    openSkillsModal();
});

function openSkillsModal() {
    modalSkills.classList.remove('hidden');
    document.documentElement.classList.add('no-scroll');
}

function closeSkillsModal() {
    modalSkills.classList.add('hidden');
    document.documentElement.classList.remove('no-scroll');
}

btnSkills.addEventListener('click', openSkillsModal);
closingBtnSkills.addEventListener('click', closeSkillsModal);
overlaySkills.addEventListener('click', closeSkillsModal);

// --- T Y P E S . J S --- //

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


