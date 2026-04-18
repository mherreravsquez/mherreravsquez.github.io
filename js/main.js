/**
 * main.js — Core portfolio interactions (LOCAL ASSETS VERSION)
 */

/* ════════════════ CURSOR ════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  const hoverSel = 'a, button, .proj-card, .dlog-card, .blog-post-card, .filter-btn, .tag-chip, [data-hover]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSel)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSel)) document.body.classList.remove('cursor-hover');
  });
}

/* ════════════════ NAV ════════════════ */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

/* ════════════════ FADE-IN ════════════════ */
function initFadeIn() {
  const items = document.querySelectorAll('.fade-in');
  if (!items.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  });

  items.forEach(el => io.observe(el));
}

/* ════════════════ PROJECT GRID ════════════════ */
async function initProjectGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let projects = [];

  try {
    const res = await fetch('data/projects.json');
    const data = await res.json();
    projects = data.projects;
  } catch {
    grid.innerHTML = 'Error loading projects';
    return;
  }

  function renderCard(p) {
    const lang     = window.I18n?.lang || 'en';
    const thumb    = `assets/projects/${p.id}/thumb.webp`;
    const video    = `assets/projects/${p.id}/cover.mp4`;
    const hasVideo = p.hasVideoThumb === true;
    const tc       = p.thumbClass || '';

    let thumbContent;
    if (hasVideo) {
      thumbContent = `<video src="${video}" autoplay muted loop playsinline></video>`;
    } else if (tc) {
      thumbContent = ''; // CSS pattern class handles background
    } else {
      thumbContent = `<img src="${thumb}" alt="${p.title[lang]}">`;
    }

    return `
<a class="proj-card" href="project.html?project=${p.id}" data-project="${p.id}" data-ratio="${p.ratio || '16:9'}">
  <div class="proj-inner">
    <div class="proj-thumb ${tc}">${thumbContent}</div>
    <div class="proj-fade"></div>
    <div class="proj-hover-overlay"></div>
    <div class="proj-hover-line"></div>
    <div class="proj-corner"></div>
    <div class="proj-info">
      <div class="proj-title" data-proj-title="${p.id}">${p.title[lang]}</div>
      <div class="proj-desc"  data-proj-desc="${p.id}">${p.shortDesc[lang]}</div>
    </div>
    <div class="proj-arrow">↗</div>
  </div>
</a>`;
  }

  grid.innerHTML = projects.map(renderCard).join('');
  grid.classList.add('proj-grid--tetris');

  // Re-translate titles/descs on language switch
  document.addEventListener('langchange', e => {
    const lang = e.detail.lang;
    projects.forEach(p => {
      const titleEl = grid.querySelector(`[data-proj-title="${p.id}"]`);
      const descEl  = grid.querySelector(`[data-proj-desc="${p.id}"]`);
      if (titleEl) titleEl.textContent = p.title[lang];
      if (descEl)  descEl.textContent  = p.shortDesc[lang];
    });
  });
}

/* ════════════════ HERO CAROUSEL ════════════════ */
function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  const track   = document.getElementById('hc-track');
  const dotsEl  = document.getElementById('hc-dots');
  const prevBtn = document.getElementById('hc-prev');
  const nextBtn = document.getElementById('hc-next');

  if (!track || !dotsEl) return;

  const slides = [
    {
      src: 'assets/projects/bubble-ggj2025/cover.mp4',
      label: 'Break the Bubble'
    },
    {
      src: 'assets/projects/car-loop/cover.webp',
      label: 'Car Loop'
    },
    {
      src: 'assets/projects/boombastic/cover.mp4',
      label: 'Boombastic'
    }
  ];

  let current = 0;

  // Build slides
  slides.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'hc-slide' + (i === 0 ? ' active' : '');

    if (s.src.endsWith('.mp4')) {
      div.innerHTML = `<video src="${s.src}" autoplay muted loop playsinline></video>`;
    } else {
      div.innerHTML = `<img src="${s.src}" />`;
    }

    track.appendChild(div);
  });

  // Build dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hc-dot' + (i === 0 ? ' active' : '');
    btn.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(btn);
  });

  const labelEl = document.getElementById('hc-label');

  function goTo(i) {
    const slideEls = track.querySelectorAll('.hc-slide');
    const dotEls   = dotsEl.querySelectorAll('.hc-dot');

    slideEls[current].classList.remove('active');
    dotEls[current].classList.remove('active');

    current = i;

    slideEls[current].classList.add('active');
    dotEls[current].classList.add('active');

    if (labelEl) labelEl.textContent = slides[current].label;
  }

  // Set initial label
  if (labelEl) labelEl.textContent = slides[0].label;

  if (prevBtn) prevBtn.onclick = () => goTo((current - 1 + slides.length) % slides.length);
  if (nextBtn) nextBtn.onclick = () => goTo((current + 1) % slides.length);
}

/* ════════════════ BOOT ════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initFadeIn();
  initProjectGrid();
  initHeroCarousel();
});