/**
 * i18n.js — Lightweight bilingual system (EN / ES)
 * Usage:
 *   I18n.init()          — load translations, apply to DOM
 *   I18n.t('key')        — translate a key
 *   I18n.setLang('es')   — switch language
 *   I18n.lang            — current language string
 */
const I18n = (() => {
  let _data = {};
  let _lang = localStorage.getItem('mhv_lang') || 'en';

  /** Fetch and parse translations.json */
  async function init() {
    try {
      const res = await fetch('data/translations.json');
      _data = await res.json();
    } catch (e) {
      console.warn('i18n: could not load translations.json', e);
    }
    _applyAll();
  }

  /** Translate a single key, with optional fallback to EN */
  function t(key) {
    return _data[_lang]?.[key] ?? _data['en']?.[key] ?? key;
  }

  /** Apply all data-i18n attributes in the DOM */
  function _applyAll() {
    // Standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.dataset.i18nHtml) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.dataset.i18nTitle);
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.documentElement.lang = _lang;

    // Notify other modules
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: _lang } }));

    // Update toggle button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === _lang);
    });
  }

  /** Switch language and re-apply */
  function setLang(lang) {
    if (!_data[lang]) { console.warn(`i18n: language "${lang}" not loaded`); return; }
    _lang = lang;
    localStorage.setItem('mhv_lang', lang);
    _applyAll();
  }

  /** Toggle between EN and ES */
  function toggle() {
    setLang(_lang === 'en' ? 'es' : 'en');
  }

  return {
    init,
    t,
    setLang,
    toggle,
    get lang() { return _lang; }
  };
})();

window.I18n = I18n;
