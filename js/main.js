/**
 * main.js — Core portfolio interactions
 * - Custom cursor
 * - Nav scroll state & active links
 * - Fade-in on scroll (IntersectionObserver)
 * - Project grid rendering + filtering
 * - Contact form handling
 * - Boot sequence
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

  // Smooth ring follow
  function animRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Hover state on interactive elements
  const hoverSel = 'a, button, .proj-card, .dlog-card, .blog-post-card, .filter-btn, .tag-chip, [data-hover]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSel)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSel)) document.body.classList.remove('cursor-hover');
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ════════════════ NAV ════════════════ */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Scroll state
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[data-section]');

  if (sections.length && navLinks.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io.observe(s));
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

/* ════════════════ FADE-IN ON SCROLL ════════════════ */
function initFadeIn() {
  const items = document.querySelectorAll('.fade-in');
  if (!items.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}

/* ════════════════ TICKER ════════════════ */
function initTicker() {
  const inner = document.querySelector('.ticker-inner');
  if (!inner) return;
  // Duplicate content for seamless loop
  inner.innerHTML += inner.innerHTML;
}

/* ════════════════ PROJECT GRID ════════════════ */
async function initProjectGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let allProjects = [];

  try {
    const res = await fetch('data/projects.json');
    const data = await res.json();
    allProjects = data.projects;
  } catch (e) {
    grid.innerHTML = '<p style="font-family:var(--mono);color:var(--dim);padding:20px">Could not load projects.</p>';
    return;
  }

  function renderGrid(filter = 'all') {
    const lang = window.I18n ? I18n.lang : 'en';
    let list = allProjects;

    if (filter === 'unreal')  list = allProjects.filter(p => p.engine.toLowerCase().includes('unreal'));
    if (filter === 'unity')  list = allProjects.filter(p => p.engine.toLowerCase().includes('unity'));
    if (filter === 'jam')    list = allProjects.filter(p => p.tags.some(t => t.toLowerCase().includes('jam')));
    if (filter === 'studio') list = allProjects.filter(p => p.studio === 'ppc');

    // Featured first
    list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    grid.innerHTML = list.map(p => renderCard(p, lang)).join('');

    // Tetris layout only when showing all projects
    grid.classList.toggle('proj-grid--tetris', filter === 'all');

    // Orphan handler: stretch the last card to fill its row (filtered views only)
    if (filter !== 'all') {
      const spanMap = { '16:9': 8, '4:3': 6, '1:1': 4, '9:16': 4 };
      let col = 0;
      list.forEach(p => { col = (col + (spanMap[p.ratio] || 6)) % 12; });
      if (col !== 0) {
        const cards = grid.querySelectorAll('.proj-card');
        const lastCard = cards[cards.length - 1];
        const lastSpan = spanMap[list[list.length - 1].ratio] || 6;
        lastCard.style.gridColumn = `span ${lastSpan + (12 - col)}`;
      }
    }

    // Stagger animation
    grid.querySelectorAll('.proj-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 70);
    });
  }

  function tagClass(tag) {
    const t = tag.toLowerCase();
    if (['c#', 'python', 'lua', 'gdscript', 'javascript'].some(l => t.includes(l))) return 'lang';
    if (['vr', 'meta quest', 'xr', 'ar'].some(v => t.includes(v)))                  return 'vr';
    if (['jam', 'ggj', 'global game jam'].some(j => t.includes(j)))                  return 'jam';
    if (['jrpg', 'horror', 'platformer', 'metroidvania', 'visual novel', 'renpy'].some(g => t.includes(g))) return 'genre';
    if (['procedural', 'narrative', 'experimental', 'story rich'].some(d => t.includes(d))) return 'design';
    return '';
  }

  // Converts Imgur .gifv to .gif so it works as a background-image
  function fixImgurUrl(url) {
    if (!url) return url;
    return url.replace(/\.gifv$/, '.gif');
  }

  function renderCard(p, lang) {
    const title     = p.title[lang] || p.title.en;
    const shortDesc = p.shortDesc[lang] || p.shortDesc.en;
    const statusKey = `status.${p.status}`;
    const statusTxt = window.I18n ? I18n.t(statusKey) : p.status;

    const fixedThumb = fixImgurUrl(p.thumbnail);
    const thumbClass = p.thumbClass || 'thumb-pattern-1';

    // MP4 thumbnails can't use background-image — inject a <video> element instead
    let thumbStyle   = '';
    let thumbInner   = '';
    if (isMp4Thumb) {
      thumbInner = `<video src="${fixedThumb}" autoplay muted loop playsinline
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;"></video>`;
    } else if (fixedThumb && !fixedThumb.includes('placeholder')) {
      thumbStyle = `style="background-image:url('${fixedThumb}')"`;
    }

    return `
<a class="proj-card" data-ratio="${p.ratio}" data-featured="${p.featured}" data-project="${p.id}" href="project.html?project=${p.id}">
  <div class="proj-inner">
    <div class="proj-thumb ${thumbClass}" ${thumbStyle}>${thumbInner}</div>
    <div class="proj-fade"></div>
    <div class="proj-hover-overlay"></div>
    <div class="proj-hover-line"></div>
    <div class="proj-corner"></div>
    <div class="proj-info">
      <div class="proj-tags">
        <span class="ptag engine">${p.engine}</span>
        ${p.studio === 'ppc' ? '<span class="ptag studio">PPC</span>' : ''}
        <span class="ptag ${p.status === 'wip' ? 'wip' : 'done'}">${statusTxt}</span>
        ${p.tags.map(t => `<span class="ptag ${tagClass(t)}">${t}</span>`).join('')}
      </div>
      <div class="proj-title">${title}</div>
      <div class="proj-desc">${shortDesc}</div>
    </div>
    <div class="proj-arrow">›</div>
  </div>
</a>`;
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    });
  });

  // Re-render on language change
  document.addEventListener('langchange', () => {
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    renderGrid(activeFilter);
  });

  renderGrid();
}

/* ════════════════ STUDIO PROJECTS FILTER ════════════════ */
function initStudioProjects() {
  const container = document.getElementById('studio-projects');
  if (!container) return;

  fetch('data/projects.json')
      .then(r => r.json())
      .then(data => {
        const lang = window.I18n ? I18n.lang : 'en';
        const studioProjects = data.projects.filter(p => p.studio === 'ppc').slice(0, 3);
        container.innerHTML = studioProjects.map(p => {
          const title = p.title[lang] || p.title.en;
          return `<a href="project.html?project=${p.id}" class="studio-proj-mini">
          <div class="spm-thumb ${p.thumbClass || 'thumb-pattern-1'}"></div>
          <span class="spm-title">${title}</span>
          <span class="spm-engine">${p.engine}</span>
        </a>`;
        }).join('');
      })
      .catch(() => {});
}

/* ════════════════ CONTACT FORM ════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = '...';
    btn.disabled = true;

    // Replace with your actual form endpoint (e.g. Formspree)
    const endpoint = form.dataset.action || 'https://formspree.io/f/YOUR_FORM_ID';
    const body = new FormData(form);

    fetch(endpoint, {
      method: 'POST',
      body,
      headers: { 'Accept': 'application/json' }
    })
        .then(r => {
          if (r.ok) {
            form.innerHTML = `<p style="font-family:var(--mono);color:var(--pink);font-size:13px;letter-spacing:.1em;">
          ✓ MESSAGE SENT. I'LL GET BACK TO YOU SOON.
        </p>`;
          } else {
            throw new Error('Form error');
          }
        })
        .catch(() => {
          btn.textContent = window.I18n ? I18n.t('contact.form.send') : 'Send';
          btn.disabled = false;
          const err = document.createElement('p');
          err.style.cssText = 'font-family:var(--mono);color:var(--accent);font-size:11px;margin-top:10px;';
          err.textContent = 'Could not send — try emailing directly.';
          form.appendChild(err);
        });
  });
}

/* ════════════════ SKILL BARS ANIMATION ════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = e.target.dataset.width || '80%';
        e.target.style.width = target;
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    bar.style.width = '0';
    bar.style.transition = 'width 1s ease';
    io.observe(bar);
  });
}

/* ════════════════ HERO CAROUSEL ════════════════ */
function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  // ── Edit this array to add / remove your own Imgur images or GIFs ──
  const slides = [
    {
      src:   'https://i.imgur.com/l7SI2IB.gif',
      label: 'Break the Bubble'
    },
    {
      src:   'https://i.imgur.com/JSl88oB.png',
      label: 'Car-Loop'
    },
    {
      src:   'https://i.imgur.com/omz9qFD.gif',
      label: 'Boombastic'
    }
  ];

  const AUTO_DELAY = 4500; // ms between auto-advances

  const track   = document.getElementById('hc-track');
  const dotsEl  = document.getElementById('hc-dots');
  const prevBtn = document.getElementById('hc-prev');
  const nextBtn = document.getElementById('hc-next');
  const label   = document.getElementById('hc-label');

  if (!track || !dotsEl) return;

  let current = 0;
  let timer   = null;

  // Build slides
  slides.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'hc-slide' + (i === 0 ? ' active' : '');

    const isMp4 = /\.mp4(\?|$)/i.test(s.src);
    if (isMp4) {
      const vid       = document.createElement('video');
      vid.src         = s.src;
      vid.muted       = true;
      vid.loop        = true;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      if (i === 0) vid.autoplay = true;
      div.appendChild(vid);
    } else {
      const img   = document.createElement('img');
      img.src     = s.src;
      img.alt     = s.label || '';
      img.loading = i === 0 ? 'eager' : 'lazy';
      div.appendChild(img);
    }

    track.appendChild(div);
  });

  // Build dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hc-dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    btn.style.setProperty('--hc-duration', AUTO_DELAY + 'ms');
    btn.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(btn);
  });

  // Counter badge
  const counter = document.createElement('span');
  counter.className = 'hc-counter';
  carousel.querySelector('.hc-ui').appendChild(counter);

  function goTo(idx) {
    const slideEls = track.querySelectorAll('.hc-slide');
    const dotEls   = dotsEl.querySelectorAll('.hc-dot');

    // Pause any video leaving
    const leavingVid = slideEls[current].querySelector('video');
    if (leavingVid) leavingVid.pause();

    slideEls[current].classList.remove('active');
    dotEls[current].classList.remove('active');

    current = (idx + slides.length) % slides.length;

    slideEls[current].classList.add('active');
    dotEls[current].classList.add('active');

    // Play any video entering
    const enteringVid = slideEls[current].querySelector('video');
    if (enteringVid) enteringVid.play().catch(() => {});

    if (label) {
      label.style.opacity = '0';
      setTimeout(() => {
        label.textContent = slides[current].label || '';
        label.style.opacity = '1';
      }, 200);
    }

    counter.textContent = `${String(current + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;

    // Restart progress animation on active dot
    dotEls[current].style.setProperty('--hc-duration', '0ms');
    void dotEls[current].offsetWidth; // force reflow
    dotEls[current].style.setProperty('--hc-duration', AUTO_DELAY + 'ms');

    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), AUTO_DELAY);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', resetTimer);

  // Init
  if (label) label.textContent = slides[0].label || '';
  counter.textContent = `01 / ${String(slides.length).padStart(2,'0')}`;

  resetTimer();
}

/* ════════════════ BOOT ════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  // Init i18n first so translations are ready
  if (window.I18n) await I18n.init();

  initCursor();
  initNav();
  initTicker();
  initFadeIn();
  initHeroCarousel();
  initProjectGrid();
  initStudioProjects();
  initContactForm();
  initSkillBars();

  // Devlog preview — initial load
  const devlogContainer = document.getElementById('devlog-posts');
  if (devlogContainer && window.BlogLoader) {
    BlogLoader.renderDevlogPreview(devlogContainer);
  }

  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.I18n) I18n.setLang(btn.dataset.lang);
    });
  });
});

// Re-render devlog preview on language change
document.addEventListener('langchange', () => {
  const devlogContainer = document.getElementById('devlog-posts');
  if (devlogContainer && window.BlogLoader) {
    BlogLoader.renderDevlogPreview(devlogContainer);
  }
});