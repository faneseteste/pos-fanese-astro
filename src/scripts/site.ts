const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const menu = document.querySelector<HTMLElement>('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('is-open', !open);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  });
});

const slides = [...document.querySelectorAll<HTMLElement>('.hero-slide')];
const dots = [...document.querySelectorAll<HTMLButtonElement>('.hero-dot')];
const hero = document.querySelector<HTMLElement>('.hero');
const swipeSurface = document.querySelector<HTMLElement>('.hero-slides');
let currentSlide = 0;
let slideTimer: number | undefined;
let pointerStartX = 0;
let pointerStartY = 0;
let pointerActive = false;
let suppressClick = false;

function clearDragPosition() {
  hero?.style.removeProperty('--hero-drag-x');
}

function showSlide(index: number) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  dots.forEach((dot) => {
    dot.classList.toggle('is-active', Number(dot.dataset.slideTo) === currentSlide);
  });
}

function startSlides() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || slides.length < 2) return;
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 7000);
}

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetSlide = Number(dot.dataset.slideTo);
    if (Number.isFinite(targetSlide)) showSlide(targetSlide);
    startSlides();
  });
});

swipeSurface?.addEventListener('dragstart', (event) => event.preventDefault());

swipeSurface?.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  pointerActive = true;
  suppressClick = false;
  window.clearInterval(slideTimer);
  hero?.classList.add('is-dragging');
});

window.addEventListener('pointermove', (event) => {
  if (!pointerActive) return;
  const distanceX = event.clientX - pointerStartX;
  const distanceY = event.clientY - pointerStartY;

  if (Math.abs(distanceX) > Math.abs(distanceY)) {
    event.preventDefault();
    const limitedDistance = Math.max(-140, Math.min(140, distanceX));
    hero?.style.setProperty('--hero-drag-x', `${limitedDistance}px`);
  }
});

window.addEventListener('pointerup', (event) => {
  if (!pointerActive) return;
  const distanceX = event.clientX - pointerStartX;
  const distanceY = event.clientY - pointerStartY;
  pointerActive = false;
  hero?.classList.remove('is-dragging');
  clearDragPosition();

  if (Math.abs(distanceX) >= 45 && Math.abs(distanceX) > Math.abs(distanceY)) {
    suppressClick = true;
    showSlide(currentSlide + (distanceX < 0 ? 1 : -1));
  }
  startSlides();
});

window.addEventListener('pointercancel', () => {
  pointerActive = false;
  hero?.classList.remove('is-dragging');
  clearDragPosition();
  startSlides();
});

swipeSurface?.addEventListener('click', (event) => {
  if (!suppressClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressClick = false;
}, true);

startSlides();
