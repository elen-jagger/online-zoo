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