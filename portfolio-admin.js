// ======================
// LANGUAGE TOGGLE
// ======================

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            games: "Games",
            blog: "Blog",
            contact: "Contact",
            admin: "Admin"
        },
        hero: {
            title: "Game Developer",
            subtitle: "& Creative Coder",
            tagline: "Making experimental and fun games with code",
            cta1: "View My Games",
            cta2: "Get In Touch"
        },
        about: {
            number: "01.",
            title: "About Me",
            description: "Gameplay programmer passionate about experimental development"
        },
        skills: {
            number: "02.",
            title: "Skills & Technologies",
            description: "The tools and technologies I use to bring games to life"
        },
        games: {
            number: "03.",
            title: "Game Projects",
            description: "Professional game projects I've contributed to"
        },
        blog: {
            number: "04.",
            title: "Development Blog",
            description: "Thoughts, tutorials, and insights from my development journey"
        },
        contact: {
            number: "05.",
            title: "Get In Touch",
            description: "Let's create something amazing together"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            games: "Juegos",
            blog: "Blog",
            contact: "Contacto",
            admin: "Admin"
        },
        hero: {
            title: "Desarrollador de Juegos",
            subtitle: "& Programador Creativo",
            tagline: "Creando juegos experimentales y divertidos con código",
            cta1: "Ver Mis Juegos",
            cta2: "Contactar"
        },
        about: {
            number: "01.",
            title: "Sobre Mí",
            description: "Programador de gameplay apasionado por el desarrollo experimental"
        },
        skills: {
            number: "02.",
            title: "Habilidades y Tecnologías",
            description: "Las herramientas y tecnologías que uso para dar vida a los juegos"
        },
        games: {
            number: "03.",
            title: "Proyectos de Juegos",
            description: "Proyectos de juegos profesionales en los que he contribuido"
        },
        blog: {
            number: "04.",
            title: "Blog de Desarrollo",
            description: "Pensamientos, tutoriales e ideas de mi viaje de desarrollo"
        },
        contact: {
            number: "05.",
            title: "Contacto",
            description: "Creemos algo increíble juntos"
        }
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    document.querySelector('.language-toggle').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguage() {
    const lang = translations[currentLanguage];
    
    // Update navigation
    document.querySelectorAll('nav a').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (lang.nav[key]) {
            link.textContent = lang.nav[key];
        }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${lang.hero.title}<br><span class="accent-text">${lang.hero.subtitle}</span>`;
    }
    
    const heroTagline = document.querySelector('.hero .subtitle');
    if (heroTagline) {
        heroTagline.textContent = lang.hero.tagline;
    }
    
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].textContent = lang.hero.cta1;
    if (ctaButtons[1]) ctaButtons[1].textContent = lang.hero.cta2;
    
    // Update section headers
    updateSection('about', lang.about);
    updateSection('skills', lang.skills);
    updateSection('games', lang.games);
    updateSection('blog', lang.blog);
    updateSection('contact', lang.contact);
    
    // Filter blog posts by language
    filterBlogByLanguage();
}

function updateSection(sectionId, content) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const number = section.querySelector('.section-number');
    const title = section.querySelector('.section-title');
    const description = section.querySelector('.section-description');
    
    if (number) number.textContent = content.number;
    if (title) title.textContent = content.title;
    if (description) description.textContent = content.description;
}

function filterBlogByLanguage() {
    // This will be implemented when blog posts are loaded
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        const cardLang = card.getAttribute('data-lang');
        if (cardLang && cardLang !== currentLanguage) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
        document.querySelector('.language-toggle').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
        updateLanguage();
    }
});

// ======================
// GITHUB BLOG ADMIN
// ======================

let githubToken = '';
let githubRepo = '';
let currentEditingFile = '';

// Open/Close Admin Panel
function openAdmin() {
    document.getElementById('adminPanel').classList.add('active');
    // Check if already authenticated
    const savedToken = localStorage.getItem('github_token');
    const savedRepo = localStorage.getItem('github_repo');
    if (savedToken && savedRepo) {
        githubToken = savedToken;
        githubRepo = savedRepo;
        document.getElementById('githubToken').value = savedToken;
        document.getElementById('githubRepo').value = savedRepo;
        showEditor();
    }
}

function closeAdmin() {
    document.getElementById('adminPanel').classList.remove('active');
}

// GitHub Authentication
async function authenticateGitHub() {
    githubToken = document.getElementById('githubToken').value.trim();
    githubRepo = document.getElementById('githubRepo').value.trim();
    
    if (!githubToken || !githubRepo) {
        alert('Please enter both GitHub token and repository name');
        return;
    }
    
    try {
        // Test the token by fetching user info
        const response = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Invalid GitHub token');
        }
        
        const userData = await response.json();
        
        // Save credentials
        localStorage.setItem('github_token', githubToken);
        localStorage.setItem('github_repo', githubRepo);
        
        // Show success
        document.getElementById('githubUsername').textContent = userData.login;
        showEditor();
        
        // Load existing posts
        loadPosts();
        
    } catch (error) {
        alert('Failed to authenticate with GitHub. Please check your token and try again.\n\nError: ' + error.message);
    }
}

function showEditor() {
    document.getElementById('githubAuth').style.display = 'none';
    document.getElementById('authStatus').style.display = 'block';
    document.getElementById('blogEditor').classList.add('active');
}

function logout() {
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_repo');
    githubToken = '';
    githubRepo = '';
    document.getElementById('githubAuth').style.display = 'block';
    document.getElementById('authStatus').style.display = 'none';
    document.getElementById('blogEditor').classList.remove('active');
}

// Load Posts from GitHub
async function loadPosts() {
    try {
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts`, {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            if (response.status === 404) {
                console.log('Posts directory does not exist yet. It will be created when you save your first post.');
                document.getElementById('postsList').innerHTML = '<p style="color: var(--text-dim); padding: 2rem; text-align: center;">No posts yet. Create your first post!</p>';
                return;
            }
            throw new Error('Failed to load posts');
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        if (markdownFiles.length === 0) {
            document.getElementById('postsList').innerHTML = '<p style="color: var(--text-dim); padding: 2rem; text-align: center;">No posts yet. Create your first post!</p>';
            return;
        }
        
        displayPosts(markdownFiles);
        
    } catch (error) {
        console.error('Error loading posts:', error);
        document.getElementById('postsList').innerHTML = '<p style="color: var(--accent); padding: 2rem; text-align: center;">Error loading posts: ' + error.message + '</p>';
    }
}

function displayPosts(files) {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';
    
    files.forEach(file => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <div class="post-item-info">
                <h4>${file.name.replace('.md', '')}</h4>
                <p>Last modified: ${new Date(file.sha).toLocaleDateString()}</p>
            </div>
            <div class="post-item-actions">
                <button onclick="editPost('${file.name}')">Edit</button>
                <button onclick="deletePost('${file.name}', '${file.sha}')">Delete</button>
            </div>
        `;
        postsList.appendChild(postItem);
    });
}

// Edit existing post
async function editPost(filename) {
    try {
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts/${filename}`, {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to load post content');
        }
        
        const fileData = await response.json();
        const content = atob(fileData.content);
        
        // Parse frontmatter and content
        const parts = content.split('---\n');
        const frontmatter = parts[1];
        const markdown = parts.slice(2).join('---\n').trim();
        
        // Parse frontmatter fields
        const titleMatch = frontmatter.match(/title: "(.*?)"/);
        const dateMatch = frontmatter.match(/date: "(.*?)"/);
        const langMatch = frontmatter.match(/language: "(.*?)"/);
        const tagsMatch = frontmatter.match(/tags: \[(.*?)\]/);
        const excerptMatch = frontmatter.match(/excerpt: "(.*?)"/);
        
        // Fill in the form
        document.getElementById('postTitle').value = titleMatch ? titleMatch[1] : '';
        document.getElementById('postDate').value = dateMatch ? dateMatch[1] : '';
        document.getElementById('postLanguage').value = langMatch ? langMatch[1] : 'en';
        document.getElementById('postSlug').value = filename.replace('.md', '');
        document.getElementById('postTags').value = tagsMatch ? tagsMatch[1].replace(/"/g, '').split(',').map(t => t.trim()).join(', ') : '';
        document.getElementById('postExcerpt').value = excerptMatch ? excerptMatch[1] : '';
        document.getElementById('postContent').value = markdown;
        
        currentEditingFile = filename;
        
        // Scroll to editor
        document.getElementById('blogEditor').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        alert('Error loading post: ' + error.message);
    }
}

// Create new post
function newPost() {
    document.getElementById('postTitle').value = '';
    document.getElementById('postDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('postLanguage').value = 'en';
    document.getElementById('postSlug').value = '';
    document.getElementById('postTags').value = '';
    document.getElementById('postExcerpt').value = '';
    document.getElementById('postContent').value = '';
    currentEditingFile = '';
}

// Save post to GitHub
async function savePost() {
    const title = document.getElementById('postTitle').value.trim();
    const date = document.getElementById('postDate').value;
    const language = document.getElementById('postLanguage').value;
    let slug = document.getElementById('postSlug').value.trim();
    const tags = document.getElementById('postTags').value.trim();
    const excerpt = document.getElementById('postExcerpt').value.trim();
    const content = document.getElementById('postContent').value.trim();
    
    if (!title || !date || !content) {
        alert('Please fill in at least title, date, and content');
        return;
    }
    
    // Auto-generate slug if not provided
    if (!slug) {
        slug = title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        document.getElementById('postSlug').value = slug;
    }
    
    const filename = `${slug}.md`;
    
    // Format tags for frontmatter
    const tagsArray = tags ? tags.split(',').map(t => `"${t.trim()}"`).join(', ') : '';
    
    // Create frontmatter
    const frontmatter = `---
title: "${title}"
date: "${date}"
language: "${language}"
tags: [${tagsArray}]
excerpt: "${excerpt}"
---

`;
    
    const fullContent = frontmatter + content;
    const encodedContent = btoa(unescape(encodeURIComponent(fullContent)));
    
    try {
        // Check if file exists to get SHA
        let sha = null;
        if (currentEditingFile) {
            const getResponse = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts/${currentEditingFile}`, {
                headers: {
                    'Authorization': `token ${githubToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (getResponse.ok) {
                const fileData = await getResponse.json();
                sha = fileData.sha;
            }
        }
        
        // Create or update file
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts/${filename}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: sha ? `Update blog post: ${title}` : `Create blog post: ${title}`,
                content: encodedContent,
                sha: sha
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to save post');
        }
        
        alert('✓ Post saved successfully to GitHub!');
        currentEditingFile = filename;
        loadPosts();
        
    } catch (error) {
        alert('Error saving post: ' + error.message);
    }
}

// Delete post
async function deletePost(filename, sha) {
    if (!confirm(`Are you sure you want to delete "${filename}"?`)) {
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts/${filename}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Delete blog post: ${filename}`,
                sha: sha
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        
        alert('✓ Post deleted successfully');
        loadPosts();
        
    } catch (error) {
        alert('Error deleting post: ' + error.message);
    }
}

function refreshPosts() {
    loadPosts();
}

// Handle admin link click
document.addEventListener('DOMContentLoaded', () => {
    const adminLink = document.querySelector('a[href="#admin"]');
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            openAdmin();
        });
    }
});
