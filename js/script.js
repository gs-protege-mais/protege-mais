// navbar

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/fechar.png";
    }
}


// faq

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        const arrow = accordion.querySelector('.arrow');

        body.classList.toggle('active');
        arrow.classList.toggle('rotate');

    })
})


