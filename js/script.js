const nav = document.querySelector('nav');
const phone = document.querySelector('.call');
const startButton = document.querySelector('.clearfix li.first')
const aboutButton = document.querySelector('.clearfix li.second')
const galeryButton = document.querySelector('.clearfix li.third')
const contactButton = document.querySelector('.clearfix li.fourth')
const start  = document.querySelector('section.start');
const about  = document.querySelector('section.about');
const galery  = document.querySelector('section.galery');
const contact  = document.querySelector('section.contact');
const startPositionY = start.offsetTop;
const aboutPositionY = about.offsetTop;
const galeryPositionY = galery.offsetTop;
const contactPositionY = contact.offsetTop;
const navHeight = nav.offsetHeight;

// ZMIANA TŁA NAWIGACJI
function changeNav () {
    if (window.pageYOffset > 0) {
    nav.classList.add('active');
    }
    else if (window.pageYOffset == 0) {
        nav.classList.remove('active');
    }
}

window.addEventListener('scroll', changeNav);
// 


// NAPROWADZANIE NA POSZCZEGÓLNE SEKCJE
function goToStart () {
    window.scrollTo({
        top: startPositionY,
        left: 0,
        behavior: 'smooth'
      });
}

function goToAbout () {
    window.scrollTo({
        top: aboutPositionY - navHeight,
        left: 0,
        behavior: 'smooth'
      });
}

function goToGalery () {
    window.scrollTo({
        top: galeryPositionY - navHeight,
        left: 0,
        behavior: 'smooth'
      });
}

function goToContact () {
    window.scrollTo({
        top: contactPositionY - navHeight,
        left: 0,
        behavior: 'smooth'
      });
}


phone.addEventListener('click', goToContact);
startButton.addEventListener('click', goToStart);
aboutButton.addEventListener('click', goToAbout);
galeryButton.addEventListener('click', goToGalery);
contactButton.addEventListener('click', goToContact);
