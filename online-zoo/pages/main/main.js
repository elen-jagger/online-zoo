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
  //html.classList.toggle("no-scroll");
}

function closeMenu() {
  btn.classList.remove("header__bgr-icon_open");               
  menu.classList.remove("menu__open");  
  headerShadow.classList.remove("header__shadow_open");
  //html.classList.remove("no-scroll");
}

btn.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
headerShadow.addEventListener('click', closeMenu);

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