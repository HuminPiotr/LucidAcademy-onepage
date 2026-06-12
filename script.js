'use strict';

// =============================================
// NAWIGACJA — HAMBURGER + INTERSECTION OBSERVER
// =============================================

const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');
const navLinkEls = document.querySelectorAll('.nav-link');
const logo      = document.querySelector('.nav-logo');

// --- Hamburger toggle ---
hamburger.addEventListener('click', () => {
  const opening = !hamburger.classList.contains('is-open');
  hamburger.classList.toggle('is-open', opening);
  navLinks.classList.toggle('is-open', opening);
  hamburger.setAttribute('aria-expanded', opening);
  hamburger.setAttribute(
    'aria-label',
    opening ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'
  );
});

// --- Zamknij menu po kliknięciu linka (mobile) ---
navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Otwórz menu nawigacji');
  });
});

// --- Logo: płynne przewijanie na górę ---
logo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Intersection Observer: aktywny link w nav ---
const sections = document.querySelectorAll('section[id]');

const setActiveLink = (id) => {
  navLinkEls.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, {
  rootMargin: '-80px 0px -60% 0px', // -80px = --nav-height
  threshold: 0,
});

sections.forEach(section => sectionObserver.observe(section));
