// PRELOADER
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// PRELOADER

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;
const html = document.documentElement;

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll');
});

function setFullHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setFullHeight();
window.addEventListener('resize', setFullHeight);

// Закрытие меню при клике на пункт
const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
    });
});



// ANIMATION FOR SECTION HERO
window.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.hero__image');
    const content = document.querySelector('.hero__content');

    setTimeout(() => {
        image.classList.add('visible');
    }, 300); // после 0.3 секунды

    setTimeout(() => {
        content.classList.add('visible');
    }, 600); // после 0.9 секунды
});
// ANIMATION FOR SECTION HERO

// ARROW
document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('scrollArrow');
    const nextSection = document.getElementById('next-section');

    arrow.addEventListener('click', () => {
        nextSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ARROW

// POPUP
document.addEventListener('DOMContentLoaded', function () {
    // Подключю Flatpickr
    flatpickr("input[name='date']", {
        dateFormat: "d.m.Y",
        altInput: true,
        altFormat: "d.m.Y",
        locale: "de",
        minDate: "today",
        allowInput: true,
        defaultDate: null,
        ariaDateFormat: "d.m.Y"
    });

    const popup = document.getElementById('popupForm');
    const html = document.documentElement;
    const body = document.body;

    // Открытие попапа
    document.getElementById('openPopup').addEventListener('click', () => {
        popup.classList.add('active');
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
    });

    // Функция закрытия попапа
    const closePopup = () => {
        popup.classList.remove('active');
        html.style.overflow = '';
        body.style.overflow = '';
    };

    // Закрытие по кнопке
    document.getElementById('closePopup').addEventListener('click', closePopup);

    // Закрытие по клику на тёмный фон
    document.querySelector('.popup__overlay').addEventListener('click', closePopup);

    // Закрытие после отправки формы
    document.getElementById('appointmentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Die Anfrage wurde gesendet!');
        closePopup();
    });
});






// POPUP


// ANIMATION FOR ANGEBOT
const cards = document.querySelectorAll('.angebot__card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Убираем отслеживание после появления
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // 20% карточки должно быть видно
});

cards.forEach(card => {
    observer.observe(card);
});
// ANIMATION FOR ANGEBOT

// TOUCHED FOR MOBILES
document.querySelectorAll('.angebot__card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.add('is-touched');

        setTimeout(() => {
            card.classList.remove('is-touched');
        }, 300); // длительность подсветки
    });
});
// TOUCHED FOR MOBILES

// ANIMATION FOR SECTION DARUM
document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                if (entry.isIntersecting) {
                    target.classList.add("in-view");
                } else {
                    target.classList.remove("in-view");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    animatedItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});
// ANIMATION FOR SECTION DARUM

// SLIDER FOR REVIEWS/TESTIMONIALS
new Swiper(".testimonials__slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// SLIDER FOR REVIEWS/TESTIMONIALS

// ARROW
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
    const burgerIsActive = document.getElementById('burger').classList.contains('active');

    if (!burgerIsActive && window.scrollY > 200) {
        scrollUp.classList.add('visible');
    } else {
        scrollUp.classList.remove('visible');
    }
});






// ARROW

