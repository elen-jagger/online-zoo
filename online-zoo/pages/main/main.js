//  Burger menu
const btn = document.querySelector('.header__bgr-icon');
const menu = document.querySelector('.menu');
const headerShadow = document.querySelector('.header__shadow');
const html = document.querySelector('.html');
const menuItem = document.querySelectorAll('.menu__item');

function toggleMenu() {
  btn.classList.toggle("header__bgr-icon_open");               
  menu.classList.toggle("menu__open");  
  headerShadow.classList.toggle("header__shadow_open");
}

function closeMenu() {
  btn.classList.remove("header__bgr-icon_open");               
  menu.classList.remove("menu__open");  
  headerShadow.classList.remove("header__shadow_open");
}

btn.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
headerShadow.addEventListener('click', closeMenu);


// Pets slider
const leftBtn = document.querySelector('.pets__btn_left');
const rightBtn = document.querySelector('.pets__btn_right');
const slidesContainer = document.querySelectorAll('.pets__slide');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  if( n > slidesContainer.length ) {slideIndex = 1}
  if( n < 1 ) {slideIndex = slidesContainer.length}

  for( i = 0; i < slidesContainer.length; i++ ) {
    slidesContainer[i].style.display = "none";
  }
//Randomizing cards
  let slide = slidesContainer[slideIndex-1].querySelectorAll('.pets-card-gradient');
  let orders = [0, 1, 2, 3, 4, 5];
  orders.sort(() => 0.5 - Math.random());

  for( i = 0; i < slide.length; i++ ) {
    slide[i].style.order = orders[i];
  }  
//
  slidesContainer[slideIndex-1].style.display = "flex";
}

leftBtn.addEventListener('click', () => plusSlides(-1));
rightBtn.addEventListener('click', () => plusSlides(1));


// Popup
const cards = document.querySelectorAll('.testimonials-card__gradient');
const testimonialsShadow = document.querySelector('.testimonials__shadow');
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');

function popupOpen(e) {
  const card = e.currentTarget;
  const popup = card.parentElement;

  popup.classList.add("testimonials-popup", "testimonials-popup_open");
  testimonialsShadow.classList.add('testimonials__shadow_open');
}

function popupClose(e) {
  const btn = e.currentTarget;
  const popup = btn.parentElement;
  
  popup.classList.remove('testimonials-popup_open', 'testimonials-popup');
  testimonialsShadow.classList.remove('testimonials__shadow_open');
  console.log('hi');
}

function shadowPopupClose() {
  const openedPopup = document.querySelector('.testimonials-popup_open');
  openedPopup.classList.remove('testimonials-popup_open', 'testimonials-popup');
  testimonialsShadow.classList.remove('testimonials__shadow_open');
}


cards.forEach((el) => el.addEventListener('click', popupOpen));

popupCloseBtn.forEach((el) => el.addEventListener('click', popupClose));
testimonialsShadow.addEventListener('click', shadowPopupClose)

//Testimonials slider
const carousel = document.querySelector('.testimonials__slider-container');
const carouselContent = document.querySelector('.testimonials-cards-container');
const input = document.querySelector('.testimonials__progress-bar');

let initValue = 1;

function moveCarousel() {
  let width = cards[0].offsetWidth;
  
  let gap = 30;
  let newValue = (input.value - initValue);
  console.log(input.value);
  console.log(newValue);
  let scrollX;

  scrollX = (width + gap) * newValue;
  console.log(scrollX);
  carousel.scrollBy(scrollX, 0);
  initValue = input.value;
}

function startCarousel() {
  input.removeEventListener('input', moveCarousel);
}

function endCarousel() {
  moveCarousel();
  input.addEventListener('input', moveCarousel);
}

input.addEventListener('input', moveCarousel);
input.addEventListener('touchstart', startCarousel);
input.addEventListener('touchend', endCarousel);