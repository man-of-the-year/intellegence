// BURGER
const main = document.querySelector('.main');
const buttonBURGER = document.querySelector('.burger__button');
const wrapper = document.querySelector('.burger__wrapper');
const nav = document.querySelector('.burger__nav');
const title = document.querySelector('.burger__title');
const topLine = document.querySelector('.burger__topLine');
const midLine = document.querySelector('.burger__midLine');
const botLine = document.querySelector('.burger__botLine');
const buttons = document.querySelectorAll('button');


for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = function() {
    window.alert('This feature is not configured yet')
  }
}

buttonBURGER.onclick = function() {
  wrapper.classList.toggle('_active');
  nav.classList.toggle('_active');
  main.classList.toggle('_inactive');
  topLine.classList.toggle('_active');
  midLine.classList.toggle('_active');
  botLine.classList.toggle('_active');
}