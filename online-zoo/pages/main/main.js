//  Burger menu
const btn = document.querySelector('.header__bgr-icon');
const menu = document.querySelector('.menu');
const shadow = document.querySelector('.header__shadow');
const html = document.querySelector('.html');
const menuItem = document.querySelectorAll('.menu__item');

function toggleMenu() {
  btn.classList.toggle("header__bgr-icon_open");               
  menu.classList.toggle("menu__open");  
  shadow.classList.toggle("header__shadow_open");
  //html.classList.toggle("no-scroll");
}

function closeMenu() {
  btn.classList.remove("header__bgr-icon_open");               
  menu.classList.remove("menu__open");  
  shadow.classList.remove("header__shadow_open");
  //html.classList.remove("no-scroll");
}

btn.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
shadow.addEventListener('click', closeMenu);
