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

/* ════════════════ HERO BACKGROUND CAROUSEL ════════════════ */
function initHeroBackgroundCarousel() {
  const container = document.getElementById('hero-bg-carousel');
  const track = document.getElementById('hbg-track');
  if (!container || !track) return;

  const slides = [
    { src: 'assets/projects/bubble-ggj2025/cover.mp4', type: 'video' },
    { src: 'assets/projects/car-loop/cover.webp',      type: 'image' },
    { src: 'assets/projects/boombastic/cover.mp4',     type: 'video' }
  ];

  let currentIndex = 0;
  let currentTimer = null;
  let isPlaying = true;
  let isPageVisible = true;

  slides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'hbg-slide' + (i === 0 ? ' active' : '');

    if (slide.type === 'video') {
      const video = document.createElement('video');
      video.src = slide.src;
      video.muted = true;
      video.loop = false;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.style.objectFit = 'cover';
      div.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = slide.src;
      img.style.objectFit = 'cover';
      div.appendChild(img);
    }

    track.appendChild(div);
  });

  function clearTimer() {
    if (currentTimer) {
      clearTimeout(currentTimer);
      currentTimer = null;
    }
  }

  function stopCurrentMedia() {
    const activeSlide = track.querySelector('.hbg-slide.active');
    if (!activeSlide) return;
    const video = activeSlide.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.removeEventListener('ended', onVideoEnd);
    }
  }

  function onVideoEnd() {
    if (!isPlaying || !isPageVisible) return;
    goToNext();
  }

  async function playCurrentMedia() {
    const activeSlide = track.querySelector('.hbg-slide.active');
    if (!activeSlide) return;
    const video = activeSlide.querySelector('video');
    const img = activeSlide.querySelector('img');

    if (video) {
      video.currentTime = 0;
      try {
        await video.play();
        video.addEventListener('ended', onVideoEnd, { once: true });
      } catch (err) {

        const retry = () => {
          if (isPlaying && isPageVisible) {
            video.play().catch(e => console.warn('Sigue bloqueado'));
          }
          document.removeEventListener('visibilitychange', retry);
        };
        document.addEventListener('visibilitychange', retry);
      }
    } else if (img) {
      clearTimer();
      currentTimer = setTimeout(() => {
        if (isPlaying && isPageVisible) goToNext();
      }, 5000);
    }
  }

  function goToNext() {
    const slidesNodes = track.querySelectorAll('.hbg-slide');
    if (slidesNodes.length === 0) return;

    slidesNodes[currentIndex].classList.remove('active');
    stopCurrentMedia();

    currentIndex = (currentIndex + 1) % slidesNodes.length;
    slidesNodes[currentIndex].classList.add('active');
    playCurrentMedia();
  }

  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
    if (!isPageVisible) {
      clearTimer();
      stopCurrentMedia();
    } else {
      if (isPlaying) playCurrentMedia();
    }
  });

  playCurrentMedia();
}

/* ════════════════ BOOT ════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  // Init i18n first so translations are ready before grid renders
  if (window.I18n) await I18n.init();

  // Wire up language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.I18n) I18n.setLang(btn.dataset.lang);
    });
  });

  initCursor();
  initNav();
  initFadeIn();
  initProjectGrid();
  initHeroBackgroundCarousel();
});