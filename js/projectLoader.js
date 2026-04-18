/**
 * projectLoader.js — LOCAL ASSETS VERSION
 */

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Format a releaseDate string ("YYYY-MM-DD") into a human-readable date */
function formatReleaseDate(project, lang) {
  if (!project.releaseDate) {
    return project.year ? String(project.year) : '—';
  }
  const [y, m, d] = project.releaseDate.split('-').map(Number);
  if (lang === 'es') {
    const months = ['enero','febrero','marzo','abril','mayo','junio',
      'julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return `${d} de ${months[m - 1]}, ${y}`;
  }
  const months = ['January','February','March','April','May','June',
    'July','August','September','October','November','December'];
  return `${d} of ${months[m - 1]}, ${y}`;
}

async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');

  if (!slug) {
    window.location.href = 'index.html';
    return;
  }

  let data;
  try {
    const res = await fetch('data/projects.json');
    data = await res.json();
  } catch {
    return;
  }

  const project = data.projects.find(p => p.id === slug);
  if (!project) return;

  const base = `assets/projects/${project.id}`;
  const lang = window.I18n?.lang || 'en';

  // ── META ──
  document.title = project.title[lang];
  setMeta('description', project.shortDesc[lang]);
  setMeta('og:image', `${window.location.origin}/${base}/thumb.webp`);

  // ── TITLE ──
  document.getElementById('proj-title').textContent = project.title[lang];

  // ── HERO ──
  const hero = document.getElementById('proj-hero-thumb');
  if (hero) {
    if (project.hasVideoThumb) {
      hero.innerHTML = `<video src="${base}/cover.mp4" autoplay muted loop playsinline></video>`;
    } else if (project.thumbClass) {
      hero.classList.add(project.thumbClass);
    } else {
      hero.style.backgroundImage = `url('${base}/thumb.webp')`;
    }
  }

  // ── PAGE TAGS ──
  const tagsEl = document.getElementById('proj-page-tags');
  if (tagsEl && project.tags) {
    tagsEl.innerHTML = project.tags.map(t => `<span class="ptag">${t}</span>`).join('');
  }

  // ── META FIELDS ──
  const engineEl = document.getElementById('proj-engine');
  const genreEl  = document.getElementById('proj-genre');
  const yearEl   = document.getElementById('proj-year');
  const statusEl = document.getElementById('proj-status');

  if (engineEl) engineEl.textContent = project.engine || '—';
  if (genreEl)  genreEl.textContent  = project.genre  || '—';
  if (statusEl) statusEl.textContent = window.I18n?.t(`status.${project.status}`) || project.status || '—';

  if (yearEl) {
    yearEl.textContent = formatReleaseDate(project, lang);
    // Re-format date on language change
    document.addEventListener('langchange', e => {
      yearEl.textContent = formatReleaseDate(project, e.detail.lang);
      if (statusEl) statusEl.textContent = window.I18n?.t(`status.${project.status}`) || project.status || '—';
    });
  }

  // ── DESCRIPTION ──
  document.getElementById('proj-description').innerHTML = project.fullDesc[lang];

  // Re-apply on language change
  document.addEventListener('langchange', e => {
    const l = e.detail.lang;
    document.getElementById('proj-title').textContent       = project.title[l];
    document.getElementById('proj-description').innerHTML   = project.fullDesc[l];
    document.title = project.title[l];
  });

  // ── GALLERY ──
  const gallery = document.getElementById('proj-gallery');
  const gallerySection = document.getElementById('proj-gallery-section');

  if (gallery && project.screenshots && project.screenshots.length) {
    gallery.innerHTML = project.screenshots.map(img => {
      // Support both string filenames and legacy {url} objects (Imgur migration)
      const src = typeof img === 'string' ? `${base}/gallery/${img}` : img.url;
      return `<img src="${src}" loading="lazy">`;
    }).join('');
  } else if (gallerySection) {
    gallerySection.style.display = 'none';
  }

  // ── VIDEOS ──
  const videos = document.getElementById('proj-videos');
  const videoSection = document.getElementById('proj-video-section');

  if (videos && project.videos && project.videos.length) {
    videos.innerHTML = project.videos.map(v =>
        `<video src="${base}/videos/${v}" controls></video>`
    ).join('');
  } else if (videoSection) {
    videoSection.style.display = 'none';
  }

  // ── EXTERNAL LINKS ──
  const linksEl = document.getElementById('proj-links-list');
  const linksSection = document.getElementById('proj-links-section');

  if (linksEl && project.links && project.links.length) {
    linksEl.innerHTML = project.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener" class="proj-ext-link">
        <span class="proj-ext-icon">${l.icon || '↗'}</span>
        <span>${l.label}</span>
        <span class="clink-arrow">↗</span>
      </a>`
    ).join('');
  } else if (linksSection) {
    linksSection.style.display = 'none';
  }

  // ── OTHER PROJECTS ──
  const otherEl = document.getElementById('proj-other-list');
  if (otherEl) {
    const others = data.projects.filter(p => p.id !== project.id).slice(0, 4);
    otherEl.innerHTML = others.map(p =>
        `<a href="project.html?project=${p.id}" class="proj-related-item">
        <span class="proj-related-title">${p.title[lang]}</span>
        <span class="proj-related-arrow">→</span>
      </a>`
    ).join('');
  }
}

/* INIT */
document.addEventListener('DOMContentLoaded', loadProject);