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

// =============================================
// HERO — scroll-driven sun brightening
// =============================================
(function () {
  const stage = document.querySelector('.hero-stage');
  if (!stage || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const sunBack  = stage.querySelector('.hero-sun--back');
  const sunFront = stage.querySelector('.hero-sun--front');
  const city     = stage.querySelector('.hero-city');

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    const cityProxy = { b: 0.64, s: 0.90 };

    const tl = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
      },
    });

    tl
      .to(sunBack,  { opacity: 0.88, top: '47%', duration: 1 }, 0)
      .to(sunFront, { opacity: 0.36,              duration: 1 }, 0)
      .to(cityProxy, {
        b: 0.92, s: 1.08, duration: 1,
        onUpdate() {
          city.style.setProperty('--city-b', cityProxy.b.toFixed(3));
          city.style.setProperty('--city-s', cityProxy.s.toFixed(3));
        },
      }, 0);

    return () => {
      gsap.set([sunBack, sunFront], { clearProps: 'all' });
      city.style.removeProperty('--city-b');
      city.style.removeProperty('--city-s');
    };
  });
}());

// =============================================
// TIMELINE — linia światła (draw-on-scroll + węzły)
// =============================================
(function () {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  // 1) Rysowanie linii ze scrollem — scrub ustawia --line-progress (0–1).
  //    Tylko gdy użytkownik nie prosi o ograniczenie ruchu; w przeciwnym
  //    razie CSS (reduced-motion) trzyma linię w pełni narysowaną.
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const proxy = { p: 0 };
      const tween = gsap.to(proxy, {
        p: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timeline,
          // 'bottom bottom' kończy dokładnie przy maksymalnym scrollu —
          // dzięki temu linia DOCHODZI do ostatniej sekcji nawet przy
          // pustym footerze (brak zapasu miejsca pod timeline).
          start: 'top center',
          end: 'bottom bottom',
          scrub: 0.6,
        },
        onUpdate() {
          timeline.style.setProperty('--line-progress', proxy.p.toFixed(4));
        },
      });

      return () => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
        timeline.style.removeProperty('--line-progress');
      };
    });
  }

  // 2) Zapalanie węzłów + reveal kart, gdy linia do nich dochodzi.
  //    Jednorazowo — przebyty ślad zostaje zapalony (narracja drogi).
  const sections = timeline.querySelectorAll('section[id]');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const node = e.target.querySelector('.timeline-node');
      const card = e.target.querySelector('.section-card');
      if (node) node.classList.add('is-lit');
      if (card) card.classList.add('is-revealed');
      revealObs.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -35% 0px', threshold: 0.15 });

  sections.forEach((s) => revealObs.observe(s));
}());

// =============================================
// MISJA — SVG fork draw-on-scroll + oświetlanie węzłów
// =============================================
(function () {
  const section = document.querySelector('#misja');
  if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const mergeNode   = section.querySelector('.misja-merge-node');
  const forkNodes   = section.querySelectorAll('.misja-fork-node');
  const pillarCards = section.querySelectorAll('.misja-pillar-card');

  // Reduced-motion: ujawnij wszystko od razu
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.style.setProperty('--misja-progress', '1');
    forkNodes.forEach((n) => n.classList.add('is-lit'));
    pillarCards.forEach((c) => c.classList.add('is-revealed'));
    mergeNode?.classList.add('is-lit');
    return;
  }

  let branchLit = false, mergeLit = false;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const proxy = { p: 0 };
    const tween = gsap.to(proxy, {
      p: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 0.5,
      },
      onUpdate() {
        const p = proxy.p;
        section.style.setProperty('--misja-progress', p.toFixed(4));

        // Pozioma belka dochodzi do węzłów bocznych (~32% postępu ścieżki).
        // Przy ~35% linia jest dość daleko — zapalamy węzły + karty.
        if (p > 0.35 && !branchLit) {
          branchLit = true;
          forkNodes.forEach((n) => n.classList.add('is-lit'));
          pillarCards.forEach((c) => c.classList.add('is-revealed'));
        }

        // Węzeł scalenia zapala się gdy gałęzie wracają do centrum (~85%)
        if (p > 0.85 && !mergeLit) {
          mergeLit = true;
          mergeNode?.classList.add('is-lit');
        }
      },
    });

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      section.style.removeProperty('--misja-progress');
    };
  });
}());
