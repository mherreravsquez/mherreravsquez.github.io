/**
 * projectLoader.js
 * Reads ?project=slug from URL, fetches projects.json,
 * finds the matching project and populates project.html
 */

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
    galleryEl.innerHTML = project.screenshots.map(url => `
      <div class="gallery-img">
        <img src="${url}" alt="${title} screenshot" loading="lazy"
             onclick="openLightbox('${url}')">
      </div>`).join('');
  } else if (galSection) {
    galSection.style.display = 'none';
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
  const devlogsEl = document.getElementById('proj-devlogs-list');
  const devlogSection = document.getElementById('proj-devlogs-section');
  if (devlogsEl && project.devlogs?.length) {
    loadRelatedDevlogs(project.devlogs, devlogsEl, lang);
  } else if (devlogSection) {
    devlogSection.style.display = 'none';
  }

  // ── Other projects ──
  renderRelatedProjects(allProjects, project, lang);
}

async function loadRelatedDevlogs(slugs, container, lang) {
  const BLOG_BASE = window.BLOG_BASE || 'https://raw.githubusercontent.com/YOUR_GITHUB_USER/blog-posts/main';
  try {
    const res      = await fetch(`${BLOG_BASE}/index.json`);
    const manifest = await res.json();
    const related  = manifest.posts.filter(p => slugs.includes(p.slug)).slice(0, 4);
    if (!related.length) { container.closest('[id]').style.display = 'none'; return; }
    container.innerHTML = related.map(p => {
      const t = p.title?.[lang] || p.title?.en || p.slug;
      return `<a href="post.html?post=${p.slug}" class="proj-related-item">${t}</a>`;
    }).join('');
  } catch (e) {
    container.closest('[id]')?.style?.setProperty('display', 'none');
  }
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

// Simple lightbox
function openLightbox(src) {
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(4,6,10,.96);z-index:99990;display:flex;align-items:center;justify-content:center;cursor:none;';
  lb.innerHTML = `<img src="${src}" style="max-width:92vw;max-height:90vh;border:1px solid var(--line2);">`;
  lb.addEventListener('click', () => lb.remove());
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
