const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
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
