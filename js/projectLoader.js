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

  // ── META ──
  document.title = project.title.en;
  setMeta('description', project.shortDesc.en);
  setMeta('og:image', `${window.location.origin}/${base}/thumb.webp`);

  // ── TITLE ──
  document.getElementById('proj-title').textContent = project.title.en;

  // ── HERO ──
  const hero = document.getElementById('proj-hero-thumb');
  if (hero) {
    if (project.hasVideoThumb) {
      hero.innerHTML = `<video src="${base}/cover.mp4" autoplay muted loop playsinline></video>`;
    } else {
      hero.style.backgroundImage = `url('${base}/thumb.webp')`;
    }
  }

  // ── DESCRIPTION ──
  document.getElementById('proj-description').innerHTML = project.fullDesc.en;

  // ── GALLERY ──
  const gallery = document.getElementById('proj-gallery');

  if (gallery && project.screenshots) {
    gallery.innerHTML = project.screenshots.map(img =>
        `<img src="${base}/gallery/${img}" loading="lazy">`
    ).join('');
  }

  // ── VIDEOS ──
  const videos = document.getElementById('proj-videos');

  if (videos && project.videos) {
    videos.innerHTML = project.videos.map(v =>
        `<video src="${base}/videos/${v}" controls></video>`
    ).join('');
  }
}

/* INIT */
document.addEventListener('DOMContentLoaded', loadProject);