# Bug Fixes Applied - February 2026

## Issues Fixed

### 1. ✅ Cloudflare Email Protection 404 Error

**Problem:** 
```
GET https://mherreravsquez.github.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js 
net::ERR_ABORTED 404 (Not Found)
```

**Solution:**
Removed the Cloudflare email protection script references from the HTML. This was leftover code from a template and is not needed for your portfolio.

**What was changed:**
- Removed `<script data-cfasync="false" src="/cdn-cgi/scripts/..."></script>` tags

---

### 2. ✅ Blog Posts Not Displaying on Main Page

**Problem:**
Blog posts saved to GitHub (`blog-posts/posts`) weren't appearing on `mherreravsquez.github.io/portfolio.html`

**Solution:**
Added JavaScript function `loadBlogPosts()` that:
1. Fetches blog posts from your GitHub repository using the public API
2. Parses the Markdown frontmatter (title, date, language, excerpt)
3. Creates blog cards dynamically
4. Filters posts by selected language
5. Runs automatically when the page loads

**What was changed:**
- Added `loadBlogPosts()` function to `portfolio-admin.js`
- Added `fetchPostContent()` helper function
- Added `createBlogCard()` helper function
- Replaced placeholder blog posts in HTML with dynamic loading
- Blog posts now load from: `https://api.github.com/repos/mherreravsquez/blog-posts/contents/posts`

**How it works:**
1. Page loads → JavaScript runs
2. Fetches list of .md files from `/posts` folder in your blog-posts repo
3. Downloads each post's content
4. Parses the frontmatter to extract metadata
5. Creates blog cards and inserts them into the page
6. Filters based on selected language (EN/ES)

---

### 3. ✅ Language Toggle Only Updating Section Titles

**Problem:**
Language toggle (EN/ES) only updated section titles, not the actual content like project descriptions, About Me text, etc.

**Solution:**
Expanded the translation dictionary and `updateLanguage()` function to translate ALL content:

**Now translates:**
- ✅ Navigation menu
- ✅ Hero section (title, tagline, description)
- ✅ CTA buttons
- ✅ About Me (all 3 paragraphs)
- ✅ Section titles and descriptions
- ✅ Contact section (heading, intro text)
- ✅ Resume download section
- ✅ Footer text
- ✅ Blog posts (filters by language)

**What was changed:**
- Expanded `translations` object in `portfolio-admin.js` with all text content
- Updated `updateLanguage()` function to apply translations to all page elements
- Added Spanish translations for all sections

---

## How to Test

### Test Blog Loading:
1. Make sure you have posts in `blog-posts/posts/` on GitHub
2. Posts must be public or use the correct access token
3. Open browser console (F12) to see any loading errors
4. Posts should appear a few seconds after page load

### Test Language Toggle:
1. Click the ES/EN button in navigation
2. All text should change (hero, about, contact, footer)
3. Blog posts should filter (only show selected language)
4. Language preference is saved in browser

### Test Admin Panel:
1. Click "Admin" in navigation
2. Enter GitHub token and repo name
3. Should see list of existing posts
4. Can create/edit/delete posts
5. Changes appear immediately in GitHub

---

## Common Issues & Solutions

### "Blog posts not loading"
**Check:**
- Is your `blog-posts` repository public?
- Do you have posts in the `/posts` folder?
- Are post files named `something.md` (must end in .md)?
- Open browser console (F12) - any red errors?

**Solution:**
- Make repo public OR use authenticated API calls
- Create posts through admin panel
- Check console errors for specific issues

### "Language toggle not working on some text"
**Check:**
- Is the text in the `translations` object?
- Does the selector in `updateLanguage()` match the HTML?

**Solution:**
- Text must be added to both `en` and `es` in translations object
- Check browser console for JavaScript errors

### "Admin panel not saving posts"
**Check:**
- Is your GitHub token valid?
- Does it have `repo` scope?
- Is the repository name correct (username/repo-name)?

**Solution:**
- Create new token: https://github.com/settings/tokens/new
- Select "repo" checkbox
- Use format: `mherreravsquez/blog-posts`

---

## File Structure After Fixes

```
mherreravsquez.github.io/
├── portfolio.html (✅ Fixed - removed Cloudflare script)
└── portfolio-admin.js (✅ Enhanced - blog loading + full translation)

blog-posts/
└── posts/
    ├── example-blog-post.md (English post)
    └── ejemplo-post-espanol.md (Spanish post)
```

---

## Next Steps

1. **Upload the fixed files** to your GitHub Pages repo
2. **Create some blog posts** using the admin panel
3. **Test the language toggle** - everything should translate now
4. **Check browser console** (F12) if anything doesn't work

---

## Technical Details

### Blog Post Loading Flow:
```
Page Load
    ↓
loadBlogPosts() runs
    ↓
Fetch from GitHub API: /repos/mherreravsquez/blog-posts/contents/posts
    ↓
Get list of .md files
    ↓
For each file:
    - Download content
    - Parse frontmatter (title, date, language, excerpt)
    - Create blog card HTML
    - Insert into page
    ↓
Apply language filter
    ↓
Blog posts visible!
```

### Language Toggle Flow:
```
User clicks ES/EN button
    ↓
toggleLanguage() runs
    ↓
Switch currentLanguage variable
    ↓
updateLanguage() runs
    ↓
For each section:
    - Get translations from object
    - Find HTML elements
    - Update textContent
    ↓
filterBlogByLanguage() runs
    ↓
Show/hide posts based on language
    ↓
Save preference to localStorage
    ↓
All content translated!
```

---

All bugs fixed! Your portfolio should now work perfectly on GitHub Pages. 🎉
