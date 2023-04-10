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