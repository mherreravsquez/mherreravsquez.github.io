/**
 * blogLoader.js
 * Fetches Markdown posts from the separate `blog-posts` GitHub repository.
 *
 * Expected blog-posts repo structure:
 *   blog-posts/
 *   ├── en/
 *   │   └── YYYY-MM-DD-slug.md
 *   ├── es/
 *   │   └── YYYY-MM-DD-slug.md
 *   └── index.json     ← post manifest, updated by admin.html
 *
 * index.json format:
 * { "posts": [{ "slug", "title": {"en","es"}, "date", "type", "lang", "project", "tags", "excerpt" }] }
 *
 * Set window.BLOG_BASE before including this script, e.g.:
 *   window.BLOG_BASE = 'https://raw.githubusercontent.com/YOUR_USER/blog-posts/main';
 */

const BLOG_BASE = window.BLOG_BASE || 'https://raw.githubusercontent.com/mherreravsquez/blog-posts/main';

/* ── Frontmatter parser ── */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };

  const fm = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    let   val = line.slice(colon + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    // Parse arrays
    if (val.startsWith('[')) {
      try { val = JSON.parse(val); } catch (_) {}
    }
    fm[key] = val;
  });

  return { frontmatter: fm, body: match[2].trim() };
}

/* ── Fetch manifest ── */
async function fetchManifest() {
  const res = await fetch(`${BLOG_BASE}/index.json`);
  if (!res.ok) throw new Error(`Manifest fetch failed: ${res.status}`);
  return res.json();
}

/* ── Fetch a single post ── */
async function fetchPost(slug, lang) {
  const url = `${BLOG_BASE}/${lang}/${slug}.md`;
  const res = await fetch(url);
  if (!res.ok) {
    if (lang !== 'en') return fetchPost(slug, 'en'); // fallback
    throw new Error(`Post not found: ${slug}`);
  }
  const raw = await res.text();
  const { frontmatter, body } = parseFrontmatter(raw);
  const html = window.marked ? marked.parse(body) : fallbackMarkdown(body);
  return { frontmatter, body, html };
}

/* ── Minimal markdown fallback (used if marked.js not loaded) ── */
function fallbackMarkdown(md) {
  return md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,     '<em>$1</em>')
    .replace(/`([^`]+)`/g,     '<code>$1</code>')
    .replace(/^> (.+)$/gm,     '<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm,    '<li>$1</li>')
    .replace(/^---$/gm,        '<hr>')
    .replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    .split(/\n{2,}/).map(c => {
      c = c.trim(); if (!c) return '';
      if (/^<(h[1-6]|ul|blockquote|hr)/.test(c)) return c;
      return `<p>${c.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');
}

/* ════════════════════════════════════════════════════════════
   BLOG LISTING PAGE — blog.html
════════════════════════════════════════════════════════════ */
async function renderBlogList(containerEl) {
  const lang = window.I18n ? I18n.lang : 'en';

  containerEl.innerHTML = `<div class="blog-loading">
    <span class="loading-spinner"></span>&nbsp;&nbsp;
    ${window.I18n ? I18n.t('devlog.loading') : 'Fetching posts...'}
  </div>`;

  let manifest;
  try {
    manifest = await fetchManifest();
  } catch (e) {
    containerEl.innerHTML = `<p style="font-family:var(--mono);color:var(--dim);font-size:12px;padding:32px 0;">
      Could not load posts. Check the BLOG_BASE URL in blogLoader.js.
    </p>`;
    return;
  }

  let posts = manifest.posts || [];

  // Sort by date descending
  posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!posts.length) {
    containerEl.innerHTML = `<p style="font-family:var(--mono);color:var(--dim);font-size:12px;padding:32px 0;">
      ${window.I18n ? I18n.t('devlog.empty') : 'No posts found.'}
    </p>`;
    return;
  }

  containerEl.innerHTML = posts.map(post => {
    const title   = post.title?.[lang] || post.title?.en || post.slug;
    const excerpt = post.excerpt?.[lang] || post.excerpt?.en || post.excerpt || '';
    const type    = post.type || 'update';
    return `
<a href="post.html?post=${post.slug}" class="blog-post-card t-${type}">
  <div class="bpc-bar"></div>
  <div class="bpc-content">
    <div class="bpc-meta">
      <span class="bpc-date">${post.date || ''}</span>
      <span class="bpc-type ${type}">${type}</span>
      ${post.project ? `<span style="font-family:var(--mono);font-size:9px;color:var(--dimmer);text-transform:uppercase;letter-spacing:.1em;">⌥ ${post.project}</span>` : ''}
    </div>
    <div class="bpc-title">${title}</div>
    ${excerpt ? `<div class="bpc-excerpt">${excerpt}</div>` : ''}
  </div>
</a>`;
  }).join('');

  // Populate tag sidebar
  const tagSet = new Set();
  posts.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));
  const tagCloud = document.getElementById('blog-tag-cloud');
  if (tagCloud) {
    tagCloud.innerHTML = [...tagSet].map(tag =>
      `<span class="tag-chip" onclick="filterByTag('${tag}', this)">${tag}</span>`
    ).join('');
  }
}

/* ── Tag filtering ── */
window.filterByTag = function(tag, el) {
  document.querySelectorAll('.blog-post-card').forEach(card => {
    card.style.display = '';
  });
  // TODO: filter by tag using post.tags in manifest if needed
  document.querySelectorAll('.tag-chip').forEach(c => c.style.borderColor = '');
  if (el) el.style.borderColor = 'var(--accent)';
};

/* ════════════════════════════════════════════════════════════
   SINGLE POST PAGE — post.html
════════════════════════════════════════════════════════════ */
async function renderSinglePost() {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get('post');
  if (!slug) { window.location.href = 'blog.html'; return; }

  const lang = window.I18n ? I18n.lang : 'en';

  // Set loading state
  const bodyEl = document.getElementById('post-body');
  if (bodyEl) bodyEl.innerHTML = `<div class="blog-loading"><span class="loading-spinner"></span></div>`;

  let postData;
  try {
    postData = await fetchPost(slug, lang);
  } catch (e) {
    if (bodyEl) bodyEl.innerHTML = `<p style="font-family:var(--mono);color:var(--accent);">Post not found.</p>`;
    return;
  }

  const fm = postData.frontmatter;
  const title = fm.title || slug;

  // Update page title and meta
  document.title = `${title} — Devlog — Marcelo Herrera Vásquez`;

  // Populate header fields
  _setPostText('post-title', title);
  _setPostText('post-date',  fm.date || '');

  const typeEl = document.getElementById('post-type');
  if (typeEl) {
    typeEl.textContent = fm.type || 'update';
    typeEl.className = `bpc-type ${fm.type || 'update'}`;
  }

  const projEl = document.getElementById('post-project');
  if (projEl) {
    if (fm.project) {
      projEl.innerHTML = `<a href="project.html?project=${fm.project}" style="color:var(--dim);font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid var(--dimmer);">⌥ ${fm.project}</a>`;
    } else {
      projEl.style.display = 'none';
    }
  }

  // Tags
  const tagsEl = document.getElementById('post-tags');
  if (tagsEl && fm.tags) {
    const tags = Array.isArray(fm.tags) ? fm.tags : fm.tags.split(',').map(t => t.trim());
    tagsEl.innerHTML = tags.map(t => `<span class="ptag">${t}</span>`).join('');
  }

  // Body
  if (bodyEl) bodyEl.innerHTML = postData.html;
}

function _setPostText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ════════════════════════════════════════════════════════════
   HOMEPAGE DEVLOG PREVIEW — index.html
════════════════════════════════════════════════════════════ */
async function renderDevlogPreview(containerEl, limit = 4) {
  const lang = window.I18n ? I18n.lang : 'en';

  containerEl.innerHTML = `<div style="padding:20px;font-family:var(--mono);font-size:10px;color:var(--dim);">
    <span class="loading-spinner"></span>
  </div>`;

  let manifest;
  try {
    manifest = await fetchManifest();
  } catch (e) {
    containerEl.innerHTML = `<p style="font-family:var(--mono);color:var(--dim);font-size:11px;">
      Devlog coming soon.
    </p>`;
    return;
  }

  const posts = (manifest.posts || [])
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  if (!posts.length) {
    containerEl.innerHTML = `<p style="font-family:var(--mono);color:var(--dim);font-size:11px;">No posts yet.</p>`;
    return;
  }

  containerEl.innerHTML = posts.map(post => {
    const title   = post.title?.[lang] || post.title?.en || post.slug;
    const excerpt = post.excerpt?.[lang] || post.excerpt?.en || post.excerpt || '';
    const type    = post.type || 'update';
    return `
<a href="post.html?post=${post.slug}" class="dlog-card t-${type} fade-in">
  <div class="dlog-bar"></div>
  <div class="dlog-body">
    <div class="dlog-meta">
      <span class="dlog-date">${post.date || ''}</span>
      <span class="dlog-type ${type}">${type}</span>
      ${post.project ? `<span class="dlog-proj-link">⌥ ${post.project}</span>` : ''}
    </div>
    <div class="dlog-title">${title}</div>
    ${excerpt ? `<div class="dlog-excerpt">${excerpt}</div>` : ''}
  </div>
</a>`;
  }).join('');

  // Trigger fade-ins
  requestAnimationFrame(() => {
    containerEl.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });

  // Populate sidebar tag cloud on index page
  const indexTagCloud = document.getElementById('devlog-tag-cloud');
  if (indexTagCloud) {
    const tagSet = new Set();
    (manifest.posts || []).forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));
    indexTagCloud.innerHTML = [...tagSet].slice(0, 12).map(tag =>
      `<span class="tag-chip">${tag}</span>`
    ).join('');
  }

  // Project filter links in sidebar
  const projFilter = document.getElementById('devlog-proj-filter');
  if (projFilter) {
    const projSet = new Set();
    (manifest.posts || []).forEach(p => { if (p.project) projSet.add(p.project); });
    projFilter.innerHTML = [...projSet].map(proj =>
      `<a href="project.html?project=${proj}" class="tag-chip">${proj}</a>`
    ).join('');
  }
}

window.BlogLoader = { renderBlogList, renderSinglePost, renderDevlogPreview, fetchPost };
