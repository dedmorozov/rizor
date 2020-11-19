// import { gsap } from 'gsap';
// import { }
// 'use strict'

// const { gsap } = require('gsap');
// gsap.registerPlugin(ScrollTrigger);

const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger__line');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__link');
const headerLogo = document.querySelector('.header__logo');
const body = document.querySelector('.body');
const promoBackground = document.querySelector('.promo__background');

burger.addEventListener('click', () => {
  body.classList.toggle('menu');
  header.classList.toggle('menu');
  nav.classList.toggle('menu');
  burger.classList.toggle('menu');
  headerLogo.classList.toggle('menu');
  promoBackground.classList.toggle('menu');

  burgerLine.forEach(item => {
    item.classList.toggle('menu')
  });

  navItems.forEach(item => {
    item.classList.toggle('menu');
  });
});

navItems.forEach(element => {
  element.addEventListener('click', () => {
    body.classList.toggle('menu');
    header.classList.toggle('menu');
    nav.classList.toggle('menu');
    burger.classList.toggle('menu');
    headerLogo.classList.toggle('menu');
    promoBackground.classList.toggle('menu');

    burgerLine.forEach(item => {
      item.classList.toggle('menu')
    });

    navItems.forEach(item => {
      item.classList.toggle('menu');
    });
  });
});
