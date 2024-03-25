document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar nav a[href*="' + id + '"]').classList.add('active');
            }
        });
    };

    /*==================== Sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar ====================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1,.about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p,.about-content', { origin: 'right'});

 /*==================== Type.js ====================*/
 const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'Web Designer', 'Java Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
    

 })