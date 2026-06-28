'use strict';

(function () {
  (function scrollNav() {
    const nav = document.getElementById('scroll-nav');
    const header = document.getElementById('site-header');
    if (!nav) return;
    const focusables = Array.from(nav.querySelectorAll('a, button'));
    const threshold = () => (header ? header.offsetHeight : 80) - 6;
    const onScroll = () => {
      const revealed = window.scrollY > threshold();
      nav.setAttribute('aria-hidden', String(!revealed));
      focusables.forEach((el) => { el.tabIndex = revealed ? 0 : -1; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  (function schoolsSlider() {
    const section = document.querySelector('.schools');
    const viewport = section && section.querySelector('.schools__viewport');
    const track = document.getElementById('schools-track');
    const dotsWrap = section && section.querySelector('.schools__dots');
    if (!section || !viewport || !track || !dotsWrap) return;

    const cards = Array.from(track.children);
    let dots = [];

    function buildDots() {
      if (dots.length) return;
      dots = cards.map((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', `Go to card ${i + 1}`);
        b.addEventListener('click', () => {
          const c = cards[i];
          viewport.scrollTo({ left: c.offsetLeft - (viewport.clientWidth - c.clientWidth) / 2, behavior: 'smooth' });
        });
        dotsWrap.appendChild(b);
        return b;
      });
    }
    function activeIndex() {
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      cards.forEach((c, i) => {
        const cc = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cc - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }
    function update() {
      const ai = activeIndex();
      dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === ai)));
    }

    buildDots();
    viewport.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  (function exhibitionSlider() {
    const section = document.querySelector('.exhibition');
    const viewport = section && section.querySelector('.exhibition__viewport');
    const track = document.getElementById('exhibition-track');
    if (!section || !viewport || !track) return;

    const cards = Array.from(track.children);
    const prevBtn = section.querySelector('.exhibition__arrow--prev');
    const nextBtn = section.querySelector('.exhibition__arrow--next');

    const step = () => (cards[0] ? cards[0].getBoundingClientRect().width + 32 : 300);

    function update() {
      const max = viewport.scrollWidth - viewport.clientWidth;
      if (prevBtn) prevBtn.disabled = viewport.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = viewport.scrollLeft >= max - 2;
    }
    if (nextBtn) nextBtn.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior: 'smooth' }));
    if (prevBtn) prevBtn.addEventListener('click', () => viewport.scrollBy({ left: -step(), behavior: 'smooth' }));

    viewport.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();
})();
