'use strict';

(function () {
  // =============================================
  // NAWIGACJA
  // =============================================
  const nav        = document.getElementById('main-nav');
  const hamburger  = document.getElementById('nav-hamburger');
  const navLinks   = document.getElementById('nav-links');
  const navLinkEls = document.querySelectorAll('.nav-link');
  const logo       = document.querySelector('.nav-logo');

  hamburger.addEventListener('click', () => {
    const opening = !hamburger.classList.contains('is-open');
    hamburger.classList.toggle('is-open', opening);
    navLinks.classList.toggle('is-open', opening);
    hamburger.setAttribute('aria-expanded', String(opening));
    hamburger.setAttribute('aria-label', opening ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji');
  });

  navLinkEls.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Otwórz menu nawigacji');
    });
  });

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Aktywny link w nav (Intersection Observer)
  const sections    = document.querySelectorAll('section[id]');
  const setActive   = (id) => navLinkEls.forEach((l) =>
    l.classList.toggle('active', l.getAttribute('href') === `#${id}`)
  );
  const sectionObs  = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
  sections.forEach((s) => sectionObs.observe(s));

  // Topbar glassmorphism po scrollu
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
