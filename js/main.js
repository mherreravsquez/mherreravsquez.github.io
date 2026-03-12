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

  function renderCard(p, lang) {
    const title     = p.title[lang] || p.title.en;
    const shortDesc = p.shortDesc[lang] || p.shortDesc.en;
    const statusKey = `status.${p.status}`;
    const statusTxt = window.I18n ? I18n.t(statusKey) : p.status;

    const thumbStyle = p.thumbnail && !p.thumbnail.includes('placeholder')
      ? `style="background-image:url('${p.thumbnail}')"` : '';
    const thumbClass = p.thumbClass || 'thumb-pattern-1';

    return `
<a class="proj-card" data-size="${p.size}" href="project.html?project=${p.id}">
  <div class="proj-inner">
    <div class="proj-thumb ${thumbClass}" ${thumbStyle}></div>
    <div class="proj-fade"></div>
    <div class="proj-hover-overlay"></div>
    <div class="proj-hover-line"></div>
    <div class="proj-corner"></div>
    <div class="proj-info">
      <div class="proj-tags">
        <span class="ptag engine">${p.engine}</span>
        ${p.studio === 'ppc' ? '<span class="ptag studio">PPC</span>' : ''}
        <span class="ptag ${p.status === 'wip' ? 'wip' : 'done'}">${statusTxt}</span>
        ${p.genre ? `<span class="ptag">${p.genre}</span>` : ''}
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

/* ════════════════ BOOT ════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  // Init i18n first so translations are ready
  if (window.I18n) await I18n.init();

  initCursor();
  initNav();
  initTicker();
  initFadeIn();
  initProjectGrid();
  initStudioProjects();
  initContactForm();
  initSkillBars();

  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.I18n) I18n.setLang(btn.dataset.lang);
    });
  });
});
