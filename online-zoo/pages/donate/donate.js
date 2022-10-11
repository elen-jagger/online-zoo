//  Burger menu
const btn = document.querySelector('.header__bgr-icon');
const menu = document.querySelector('.menu');
const shadow = document.querySelector('.header__shadow');
const html = document.querySelector('.html');
const menuItem = document.querySelectorAll('.menu__item');

function toggleMenu() {
  btn.classList.toggle('header__bgr-icon_open');               
  menu.classList.toggle('menu__open');  
  shadow.classList.toggle('header__shadow_open');
}

function closeMenu() {
  btn.classList.remove('header__bgr-icon_open');               
  menu.classList.remove('menu__open');  
  shadow.classList.remove('header__shadow_open');
}

btn.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
shadow.addEventListener('click', closeMenu);

// Amount panel

const dotts = document.querySelectorAll('.feed-range__dott');
const amountInput = document.querySelector('.another-amount__input');

function selectDott(e) {
  const selectedDott = document.querySelector('.feed-range__dott_active');
  selectedDott.classList.remove('feed-range__dott_active');
  const newSelectedDott = e.currentTarget;

  newSelectedDott.classList.add('feed-range__dott_active');
}

function highlightText(e) {
  const activeTxt = document.querySelector('.feed__active-txt');
  const dott = e.currentTarget;
  const amount = dott.dataset.amount;
  const newActiveTxt = document.querySelector(`.${amount}`);

  activeTxt.classList.remove('feed__active-txt');
  newActiveTxt.classList.add('feed__active-txt');
}

function setAmount(e) {
  const dott = e.currentTarget;
  const amountInput = document.querySelector('.another-amount__input');
  const value = Number(dott.dataset.value);

  amountInput.value = value;
}

function setDott() {
  const amountInput = document.querySelector('.another-amount__input');
  const value = amountInput.value;
  let oldDott = document.querySelector('.feed-range__dott_active');
  oldDott.classList.remove('feed-range__dott_active');
  let oldTxt = document.querySelector('.feed__active-txt');
  oldTxt.classList.remove('feed__active-txt');

  dotts.forEach((el) => {
    let dottValue = Number(el.dataset.value);
    
    if( dottValue == value) {
      
      // let oldDott = document.querySelector('.feed-range__dott_active');
      // oldDott.classList.remove('feed-range__dott_active');
      el.classList.add('feed-range__dott_active');

      let txtClass = el.dataset.amount;
      
      let newTxt = document.querySelector(`.${txtClass}`);
      newTxt.classList.add('feed__active-txt');
    }
  }); 
}

dotts.forEach((el) => el.addEventListener('click', selectDott));
dotts.forEach((el) => el.addEventListener('click', highlightText));
dotts.forEach((el) => el.addEventListener('click', setAmount));
amountInput.addEventListener('input', setDott);
