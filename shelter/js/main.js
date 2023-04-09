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
    })
})

// const slider = document.querySelector('.pets-slider');
// const cards = Array.from(document.querySelectorAll('.pets-card'));

// // Устанавливаем ширину слайдера
// const sliderWidth = slider.clientWidth;

// // Устанавливаем начальное положение слайдера
// let sliderPosition = 0;

// // Устанавливаем количество карточек для отображения
// const cardsToShow = 3;

// // Функция для обновления положения слайдера
// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${sliderPosition}px)`;
// }

// // Функция для переключения карточек вперед
// function slideNext() {
//   sliderPosition += sliderWidth / cardsToShow;
//   if (sliderPosition > sliderWidth * (cards.length - cardsToShow) / cardsToShow) {
//     sliderPosition = 0;
//   }
//   updateSliderPosition();
// }

// // Функция для переключения карточек назад
// function slidePrev() {
//   sliderPosition -= sliderWidth / cardsToShow;
//   if (sliderPosition < 0) {
//     sliderPosition = sliderWidth * (cards.length - cardsToShow) / cardsToShow;
//   }
//   updateSliderPosition();
// }

// // Добавляем обработчики событий на кнопки переключения
// document.querySelector('#left_arrow').addEventListener('click', slidePrev);
// document.querySelector('#right_arrow').addEventListener('click', slideNext);

const slider = document.querySelector('.pets-slider');
const cards = document.querySelectorAll('.pets-card');
const leftBtn = document.querySelector('#left_arrow');
const rightBtn = document.querySelector('#right_arrow');

let cardIndex = 0;
const cardWidth = cards[0].offsetWidth;
const cardMarginRight = parseInt(getComputedStyle(cards[0]).marginRight);

slider.style.width = `${(cardWidth + cardMarginRight) * cards.length}px`;

leftBtn.addEventListener('click', () => {
  cardIndex--;
  if (cardIndex < 0) {
    cardIndex = cards.length - 3;
    slider.style.transform = `translateX(-${(cardWidth + cardMarginRight) * (cards.length - 3)}px)`;
  } else {
    slider.style.transform = `translateX(-${(cardWidth + cardMarginRight) * cardIndex}px)`;
  }
});

rightBtn.addEventListener('click', () => {
  cardIndex++;
  if (cardIndex > cards.length - 3) {
    cardIndex = 0;
    slider.style.transform = 'translateX(0)';
  } else {
    slider.style.transform = `translateX(-${(cardWidth + cardMarginRight) * cardIndex}px)`;
  }
});