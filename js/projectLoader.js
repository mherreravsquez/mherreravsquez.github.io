/**
 * projectLoader.js
 * Reads ?project=slug from URL, fetches projects.json,
 * finds the matching project and populates project.html
 */

function fixImgurUrl(url) {
  if (!url) return url;
  return url.replace(/\.gifv$/, '.gif');
}

// Lightweight markdown → HTML (handles headings, bold, lists, code, paragraphs)
function simpleMarkdown(md) {
  if (!md) return '';
  let html = md
      // Escape HTML entities first
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      // Headings
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
      .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
      // Bold / italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,     '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Blockquote
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      // Unordered lists
      .replace(/^\- (.+)$/gm, '<li>$1</li>')
      // Ordered lists — wrap loose <li> in <ul>
      .replace(/(<li>.*<\/li>)(\n<li>)/g, '$1$2')
      // HR
      .replace(/^---$/gm, '<hr>');

  // Wrap <li> runs in <ul>
  html = html.replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Paragraphs — wrap non-tagged lines
  html = html.split(/\n{2,}/).map(chunk => {
    chunk = chunk.trim();
    if (!chunk) return '';
    if (/^<(h[1-6]|ul|ol|li|blockquote|pre|hr)/.test(chunk)) return chunk;
    return `<p>${chunk.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return html;
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`) ||
      document.querySelector(`meta[property="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function renderNotFound() {
  document.getElementById('proj-hero')?.remove();
  document.getElementById('proj-body')?.remove();
  const page = document.querySelector('.page');
  if (page) {
    page.innerHTML += `
      <div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:40px;">
        <div style="font-family:var(--head);font-weight:900;font-size:80px;color:var(--accent);line-height:1;">404</div>
        <div style="font-family:var(--mono);font-size:11px;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;">Project Not Found</div>
        <a href="index.html" class="btn-ghost" style="margin-top:12px;">← Back to Portfolio</a>
      </div>`;
  }
}

async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get('project');

  if (!slug) { window.location.href = 'index.html'; return; }

  let allProjects;
  try {
    const res  = await fetch('data/projects.json');
    const data = await res.json();
    allProjects = data.projects;
  } catch (e) {
    console.error('Could not load projects.json', e);
    renderNotFound(); return;
  }

  const project = allProjects.find(p => p.id === slug);
  if (!project) { renderNotFound(); return; }

  const lang  = window.I18n ? I18n.lang : 'en';
  const title = project.title[lang] || project.title.en;

  // ── Document meta ──
  document.title = `${title} — Marcelo Herrera Vásquez`;
  setMeta('description', (project.shortDesc[lang] || project.shortDesc.en));
  setMeta('og:title',    document.title);
  if (project.thumbnail && !project.thumbnail.includes('placeholder')) {
    setMeta('og:image', project.thumbnail);
  }

  // ── Hero section ──
  const thumbEl = document.getElementById('proj-hero-thumb');
  if (thumbEl) {
    if (project.thumbnail && !project.thumbnail.includes('placeholder')) {
      thumbEl.style.backgroundImage = `url('${project.thumbnail}')`;
    } else {
      thumbEl.className += ` ${project.thumbClass || 'thumb-pattern-1'}`;
    }
  }

  const statusTxt = window.I18n ? I18n.t(`status.${project.status}`) : project.status;

  _setText('proj-title',  title);
  _setText('proj-engine', project.engine);
  _setText('proj-genre',  project.genre || '—');
  _setText('proj-year',   project.year || '—');
  _setText('proj-status', statusTxt);

  // Status color
  const statusEl = document.getElementById('proj-status');
  if (statusEl) {
    statusEl.style.color = project.status === 'wip' ? 'var(--warn)' : 'var(--cyan)';
  }

  // Tags
  const tagsEl = document.getElementById('proj-page-tags');
  if (tagsEl) {
    const tags = [
      project.engine,
      project.studio === 'ppc' ? 'Plants Path Collective' : null,
      project.personal === 'perso' ? 'Personal' : null,
      ...(project.tags || [])
    ].filter(Boolean);
    tagsEl.innerHTML = tags.map(t =>
        `<span class="ptag ${t === project.engine ? 'engine' : ''} ${t === 'Plants Path Collective' ? 'studio' : ''}">${t}</span>`
    ).join('');
  }

  // ── Description ──
  const descEl = document.getElementById('proj-description');
  if (descEl) {
    const mdText = project.fullDesc?.[lang] || project.fullDesc?.en || '';
    if (window.marked) {
      descEl.innerHTML = marked.parse(mdText);
    } else {
      descEl.innerHTML = simpleMarkdown(mdText);
    }
  }

  // ── Screenshots ──
  const galleryEl = document.getElementById('proj-gallery');
  const galSection = document.getElementById('proj-gallery-section');
  if (galleryEl && project.screenshots?.length) {
    galleryEl.innerHTML = project.screenshots.map(s => {
      const url    = fixImgurUrl(s.url || s);
      const isMp4  = /\.mp4(\?|$)/i.test(url);
      if (isMp4) {
        return `
      <div class="gallery-img">
        <video src="${url}" autoplay muted loop playsinline
          style="width:100%;height:100%;object-fit:cover;cursor:pointer;"
          onclick="openLightbox('${url}', true)"></video>
      </div>`;
      }
      return `
      <div class="gallery-img">
        <img src="${url}" alt="${title} screenshot" loading="lazy"
             onclick="openLightbox('${url}')">
      </div>`;
    }).join('');
  }

  // ── Videos ──
  const videosEl = document.getElementById('proj-videos');
  const vidSection = document.getElementById('proj-video-section');

  if (videosEl && project.videos?.length) {
    videosEl.innerHTML = project.videos.map(v => {
      if (v.platform === 'youtube') {
        const id = v.url.match(/(?:youtu\.be\/|v=)([^&?]+)/)?.[1];
        if (id) return `<div style="aspect-ratio:16/9;margin-bottom:12px;">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}"
          frameborder="0" allowfullscreen style="border:1px solid var(--line2);"></iframe>
      </div>`;
      }
      // MP4 — Imgur or any direct .mp4 link
      if (/\.mp4(\?|$)/i.test(v.url)) {
        return `<video src="${v.url}" autoplay muted loop playsinline controls
          style="width:100%;border:1px solid var(--line2);margin-bottom:12px;display:block;"></video>`;
      }
      if (v.url.match(/imgur\.com.*\.(gif|gifv)$/i)) {
        const gifUrl = fixImgurUrl(v.url);
        return `<img src="${gifUrl}" alt="${v.label || 'Gameplay'}"
        style="width:100%;border:1px solid var(--line2);margin-bottom:12px;">`;
      }
      return `<a href="${v.url}" target="_blank" class="proj-ext-link">${v.label || v.platform} ↗</a>`;
    }).join('');
  } else if (vidSection) {
    vidSection.style.display = 'none';
  }

  // ── External links ──
  const linksEl = document.getElementById('proj-links-list');
  const linkSection = document.getElementById('proj-links-section');
  if (linksEl && project.links?.length) {
    linksEl.innerHTML = project.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener" class="proj-ext-link">
        <span>${l.icon ? l.icon + '  ' : ''}${l.label}</span>
        <span>↗</span>
      </a>`
    ).join('');
  } else if (linkSection) {
    linkSection.style.display = 'none';
  }

  // ── Related devlogs ──
  const devlogSection = document.getElementById('proj-devlogs-section');
  const mainSection   = document.getElementById('proj-devlogs-main');
  // Always attempt — matches by project.id automatically, devlogs array is an optional override
  loadRelatedDevlogs(project.id, project.devlogs || [], lang);
  // Hide sidebar; main content section visibility is handled inside loadRelatedDevlogs

  // ── Other projects ──
  renderRelatedProjects(allProjects, project, lang);
}

async function loadRelatedDevlogs(projectId, devlogSlugs, lang) {
  const mainSection = document.getElementById('proj-devlogs-main');
  const cardsEl     = document.getElementById('proj-devlogs-cards');
  const sidebarSection = document.getElementById('proj-devlogs-section');

  // Sidebar panel not used — devlogs live in main content
  if (sidebarSection) sidebarSection.style.display = 'none';
  if (!mainSection || !cardsEl) return;

  let manifest;
  try {
    // Reuse BlogLoader's fetchManifest so the base URL is always consistent
    manifest = await window.BlogLoader.fetchManifest();
  } catch (e) {
    mainSection.style.display = 'none';
    return;
  }

  // Match posts by either:
  //   1. p.project === projectId  (primary — automatic, no need to list slugs manually)
  //   2. devlogSlugs includes p.slug  (explicit override list in projects.json)
  // Then filter by language: posts with no lang field are shown in both languages
  const related = (manifest.posts || [])
      .filter(p =>
          (p.project === projectId || (devlogSlugs && devlogSlugs.includes(p.slug))) &&
          (!p.lang || p.lang === lang)
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);

  if (!related.length) {
    mainSection.style.display = 'none';
    return;
  }

  cardsEl.innerHTML = related.map(post => {
    const title   = post.title?.[lang] || post.title?.en || post.slug;
    const excerpt = post.excerpt?.[lang] || post.excerpt?.en || post.excerpt || '';
    const type    = post.type || 'update';
    return `
<a href="post.html?post=${post.slug}" class="dlog-card t-${type}">
  <div class="dlog-bar"></div>
  <div class="dlog-body">
    <div class="dlog-meta">
      <span class="dlog-date">${post.date || ''}</span>
      <span class="dlog-type ${type}">${type}</span>
    </div>
    <div class="dlog-title">${title}</div>
    ${excerpt ? `<div class="dlog-excerpt">${excerpt}</div>` : ''}
  </div>
</a>`;
  }).join('');

  mainSection.style.display = 'block';
}

function renderRelatedProjects(projects, current, lang) {
  const el = document.getElementById('proj-other-list');
  if (!el) return;
  const others = projects.filter(p => p.id !== current.id).slice(0, 3);
  el.innerHTML = others.map(p =>
      `<a href="project.html?project=${p.id}" class="proj-related-item">
      ${p.title[lang] || p.title.en}
      <span style="font-size:9px;color:var(--dim);margin-left:6px;">${p.engine}</span>
    </a>`
  ).join('');
}

// Simple lightbox — supports images and MP4 videos
function openLightbox(src, isVideo = false) {
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(4,6,10,.96);z-index:99990;display:flex;align-items:center;justify-content:center;cursor:none;';

  let media;
  if (isVideo || /\.mp4(\?|$)/i.test(src)) {
    media = document.createElement('video');
    media.src         = src;
    media.autoplay    = true;
    media.muted       = true;
    media.loop        = true;
    media.playsInline = true;
    media.controls    = true;
    media.setAttribute('playsinline', '');
    media.style.cssText = 'max-width:92vw;max-height:90vh;border:1px solid var(--line2);';
  } else {
    media = document.createElement('img');
    media.src = src;
    media.style.cssText = 'max-width:92vw;max-height:90vh;border:1px solid var(--line2);';
  }

  lb.appendChild(media);
  lb.addEventListener('click', () => {
    if (media.tagName === 'VIDEO') media.pause();
    lb.remove();
  });
  document.body.appendChild(lb);
}
window.openLightbox = openLightbox;

function _setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined && value !== null) el.textContent = value;
}

// Re-run on language change
document.addEventListener('langchange', loadProject);
document.addEventListener('DOMContentLoaded', async () => {
  if (window.I18n) await I18n.init();
  loadProject();
});