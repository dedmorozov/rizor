'use strict';

/* eslint-disable */

gsap.registerPlugin(ScrollTrigger);

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
    item.classList.toggle('menu');
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
      item.classList.toggle('menu');
    });

    navItems.forEach(item => {
      item.classList.toggle('menu');
    });
  });
});

window.onload = () => {
  gsap.to('.header', {
    y: 100,
  });

  gsap.to('.promo__background', {
    delay: 0.3,
    duration: 0.7,
    x: 300,
  });

  gsap.to('.left-side', {
    delay: 0.7,
    duration: 0.3,
    opacity: 1,
  });

  gsap.to('.right-side', {
    delay: 0.3,
    duration: 0.7,
    opacity: 1,
    x: -100,
  });

  gsap.to('.design', {
    scrub: 0,
    x: 100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.design',
      start: 'center bottom',
    },
  });

  gsap.to('.color', {
    x: -100,
    opacity: 1,

    scrollTrigger: {
      markers: true,
      trigger: '.color',
      start: 'top center+=30%',
    },
  });

  gsap.to('.advantages__img', {
    x: 100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.advantages__img',
      start: 'top center+=30%',
    },
  });

  gsap.to('.modes', {
    x: 100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.modes',
      start: 'top center+=30%',
    },
  });

  gsap.to('.modes__features', {
    delay: 0.5,
    y: -100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.modes__features',
      start: 'top top+=80%',
    },
  });

  gsap.to('.for-whom', {
    duration: 1,
    x: 100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.for-whom',
      start: 'top center+=30%',
    },
  });

  gsap.to('.footer__picture', {
    duration: 1,
    x: -100,
    opacity: 1,

    scrollTrigger: {
      trigger: '.footer__picture',
      start: 'top center+=30%',
    },
  });
};
