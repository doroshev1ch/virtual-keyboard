const burgerMenu = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const link = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', function() {
    body.style.overflow = 'hidden';
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  for (let i = 0; i < link.length; i++) {
    link[i].classList.add('active');
  }
});
menu.addEventListener('click', function(){
    body.style.overflow = 'auto';
    burgerMenu.classList.remove('active');
    menu.classList.remove('active');
})
// link.addEventListener('click', function(){
//     link.classList.remove('active');
//     menu.classList.remove('active');
// })
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
    
        const sectionID = anchor.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const slider = document.querySelector('.pets-slider');
const sliderCards = document.querySelectorAll('.pets-card');
const sliderBtnPrev = document.querySelector('#left_arrow');
const sliderBtnNext = document.querySelector('#right_arrow');

const CARDS_PER_PAGE = 3;
const CARD_WIDTH = sliderCards[0].offsetWidth;
let sliderOffset = 0;

const updateSliderOffset = () => {
  slider.style.transform = `translateX(${-sliderOffset}px)`;
};

sliderBtnNext.addEventListener('click', () => {
  sliderOffset += CARD_WIDTH * CARDS_PER_PAGE;

  if (sliderOffset >= CARD_WIDTH * sliderCards.length) {
    sliderOffset = 0;
  }

  updateSliderOffset();
});

sliderBtnPrev.addEventListener('click', () => {
  sliderOffset -= CARD_WIDTH * CARDS_PER_PAGE;

  if (sliderOffset < 0) {
    sliderOffset = CARD_WIDTH * (sliderCards.length - CARDS_PER_PAGE);
  }

  updateSliderOffset();
});
