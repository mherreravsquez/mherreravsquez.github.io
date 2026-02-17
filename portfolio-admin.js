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
            description: "I craft engaging games and interactive experiences that blend compelling gameplay with stunning visuals. From concept to completion, I bring ideas to life through code and creativity.",
            cta1: "View My Games",
            cta2: "Get In Touch"
        },
        about: {
            number: "01.",
            title: "About Me",
            description: "Gameplay programmer passionate about experimental development",
            greeting: "Hello! I'm Marcelo Herrera",
            p1: "I'm a Gameplay Programmer specializing in Unity development, currently in my third year studying Digital Game Design at Universidad Andrés Bello. I focus on writing clean, efficient code that brings experimental game concepts to life.",
            p2: "My technical expertise centers on Virtual Reality programming, procedural generation systems, and building custom Unity editor tools. I'm passionate about solving complex technical challenges—from implementing advanced animation systems to architecting scalable gameplay frameworks.",
            p3: "I thrive on pushing technical boundaries, whether that's optimizing VR performance, creating procedural generation algorithms, or developing tools that streamline game development workflows. Code is my primary creative medium."
        },
        skills: {
            number: "02.",
            title: "Skills & Technologies",
            description: "The tools and technologies I use to bring games to life",
            engines: "Game Engines",
            languages: "Programming Languages",
            specializations: "Specializations",
            specialist: "Specialist"
        },
        games: {
            number: "03.",
            title: "Game Projects",
            description: "Professional game projects I've contributed to",
            carloop: {
                type: "VR College Project · Demo",
                desc: "A VR psychological horror game where players are trapped in an endless driving sequence. Uses procedural generation to create subtle variations in each loop, making players question their perception of reality. Features hand-tracking and gesture-based dialogue interactions.",
                play: "Play on Itch.io"
            },
            bubble: {
                type: "Game Jam · Global Game Jam 2025",
                desc: "A Metroidvania developed for GGJ 2025 exploring the theme \"Bubble.\" Tells the story of a developer's creative process in building a Metroidvania. Features character transformation for tight spaces and rune-based platform movement mechanics.",
                play: "Play on Itch.io"
            },
            hunters: {
                type: "College Project · Demo",
                desc: "An action JRPG combining fast-paced combat with deep character customization. Features an extensive skill tree system, strategic battles, and a vast explorable world with progression mechanics.",
                play: "Play on Itch.io"
            },
            tragones: {
                type: "College Project · Fangame Demo",
                desc: "A visual novel fangame based on the Dungeon Meshi (Delicious in Dungeon) manga. Blends the original story with Chilean culture through the TV show \"Lugares que Hablan\", creating a unique crossover featuring the manga's characters in cultural storytelling scenarios.",
                play: "Play on Itch.io"
            }
        },
        blog: {
            number: "04.",
            title: "Development Blog",
            description: "Thoughts, tutorials, and insights from my development journey"
        },
        contact: {
            number: "05.",
            title: "Get In Touch",
            description: "Let's create something amazing together",
            heading: "Let's Connect",
            intro: "I'm always open to discussing new projects, technical challenges, or collaboration opportunities. Whether you're looking for a gameplay programmer or want to chat about VR development and procedural systems, feel free to reach out!",
            resumeTitle: "Download My Resume",
            resumeDesc: "Get a detailed overview of my experience, skills, and projects",
            resumeBtn: "Download PDF Resume"
        },
        footer: {
            credit: "Designed & Built by Marcelo Herrera",
            rights: "© 2026 All Rights Reserved"
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
            description: "Creo juegos atractivos y experiencias interactivas que combinan jugabilidad convincente con visuales impresionantes. Desde el concepto hasta la finalización, doy vida a las ideas a través del código y la creatividad.",
            cta1: "Ver Mis Juegos",
            cta2: "Contactar"
        },
        about: {
            number: "01.",
            title: "Sobre Mí",
            description: "Programador de gameplay apasionado por el desarrollo experimental",
            greeting: "¡Hola! Soy Marcelo Herrera",
            p1: "Soy Programador de Gameplay especializado en desarrollo con Unity, actualmente en mi tercer año estudiando Diseño de Juegos Digitales en la Universidad Andrés Bello. Me enfoco en escribir código limpio y eficiente que da vida a conceptos de juegos experimentales.",
            p2: "Mi experiencia técnica se centra en programación de Realidad Virtual, sistemas de generación procedural y construcción de herramientas personalizadas para el editor de Unity. Me apasiona resolver desafíos técnicos complejos—desde implementar sistemas de animación avanzados hasta arquitecturar frameworks de gameplay escalables.",
            p3: "Me encanta superar límites técnicos, ya sea optimizando el rendimiento de VR, creando algoritmos de generación procedural, o desarrollando herramientas que agilizan los flujos de trabajo de desarrollo de juegos. El código es mi medio creativo principal."
        },
        skills: {
            number: "02.",
            title: "Habilidades y Tecnologías",
            description: "Las herramientas y tecnologías que uso para dar vida a los juegos",
            engines: "Motores de Juego",
            languages: "Lenguajes de Programación",
            specializations: "Especializaciones",
            specialist: "Especialista"
        },
        games: {
            number: "03.",
            title: "Proyectos de Juegos",
            description: "Proyectos de juegos profesionales en los que he contribuido",
            carloop: {
                type: "Proyecto Universitario VR · Demo",
                desc: "Un juego de horror psicológico en VR donde los jugadores quedan atrapados en una secuencia de conducción sin fin. Usa generación procedural para crear variaciones sutiles en cada loop, haciendo que los jugadores cuestionen su percepción de la realidad. Cuenta con seguimiento de manos e interacciones de diálogo basadas en gestos.",
                play: "Jugar en Itch.io"
            },
            bubble: {
                type: "Game Jam · Global Game Jam 2025",
                desc: "Un Metroidvania desarrollado para GGJ 2025 explorando el tema \"Burbuja\". Cuenta la historia del proceso creativo de un desarrollador al construir un Metroidvania. Incluye transformación de personaje para espacios reducidos y mecánicas de movimiento de plataformas basadas en runas.",
                play: "Jugar en Itch.io"
            },
            hunters: {
                type: "Proyecto Universitario · Demo",
                desc: "Un JRPG de acción que combina combate rápido con personalización profunda de personajes. Cuenta con un extenso sistema de árbol de habilidades, batallas estratégicas y un vasto mundo explorable con mecánicas de progresión.",
                play: "Jugar en Itch.io"
            },
            tragones: {
                type: "Proyecto Universitario · Fangame Demo",
                desc: "Una novela visual fangame basada en el manga Dungeon Meshi (Delicious in Dungeon). Mezcla la historia original con la cultura chilena a través del programa de TV \"Lugares que Hablan\", creando un crossover único con los personajes del manga en escenarios de narrativa cultural.",
                play: "Jugar en Itch.io"
            }
        },
        blog: {
            number: "04.",
            title: "Blog de Desarrollo",
            description: "Pensamientos, tutoriales e ideas de mi viaje de desarrollo"
        },
        contact: {
            number: "05.",
            title: "Contacto",
            description: "Creemos algo increíble juntos",
            heading: "Conectemos",
            intro: "Siempre estoy abierto a discutir nuevos proyectos, desafíos técnicos u oportunidades de colaboración. Ya sea que estés buscando un programador de gameplay o quieras charlar sobre desarrollo VR y sistemas procedurales, ¡no dudes en contactarme!",
            resumeTitle: "Descarga Mi CV",
            resumeDesc: "Obtén una descripción detallada de mi experiencia, habilidades y proyectos",
            resumeBtn: "Descargar CV en PDF"
        },
        footer: {
            credit: "Diseñado y Construido por Marcelo Herrera",
            rights: "© 2026 Todos los Derechos Reservados"
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
    
    const heroDesc = document.querySelector('.hero p:not(.subtitle)');
    if (heroDesc) {
        heroDesc.textContent = lang.hero.description;
    }
    
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].textContent = lang.hero.cta1;
    if (ctaButtons[1]) ctaButtons[1].textContent = lang.hero.cta2;
    
    // Update About section
    updateSection('about', lang.about);
    const aboutH3 = document.querySelector('#about h3');
    if (aboutH3) aboutH3.textContent = lang.about.greeting;
    
    const aboutParagraphs = document.querySelectorAll('#about .about-content p');
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = lang.about.p1;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = lang.about.p2;
    if (aboutParagraphs[2]) aboutParagraphs[2].textContent = lang.about.p3;
    
    // Update Skills section
    updateSection('skills', lang.skills);
    const skillCards = document.querySelectorAll('#skills .skill-card h4');
    if (skillCards[0]) skillCards[0].textContent = lang.skills.engines;
    if (skillCards[1]) skillCards[1].textContent = lang.skills.languages;
    if (skillCards[2]) skillCards[2].textContent = lang.skills.specializations;
    
    // Update "Specialist" text
    const specialistText = document.querySelector('#skills .skill-card li');
    if (specialistText && (specialistText.textContent.includes('Specialist') || specialistText.textContent.includes('Especialista'))) {
        specialistText.textContent = `Unity (${lang.skills.specialist})`;
    }
    
    // Update Games/Projects section
    updateSection('games', lang.games);
    
    const projectCards = document.querySelectorAll('#games .project-card');
    projectCards.forEach((card, index) => {
        const projectType = card.querySelector('.project-type');
        const projectDesc = card.querySelector('.project-description');
        const projectLink = card.querySelector('.project-link');
        
        if (index === 0) { // Car-Loop
            if (projectType) projectType.textContent = lang.games.carloop.type;
            if (projectDesc) projectDesc.textContent = lang.games.carloop.desc;
            if (projectLink) projectLink.textContent = lang.games.carloop.play + ' →';
        } else if (index === 1) { // Break the Bubble
            if (projectType) projectType.textContent = lang.games.bubble.type;
            if (projectDesc) projectDesc.textContent = lang.games.bubble.desc;
            if (projectLink) projectLink.textContent = lang.games.bubble.play + ' →';
        } else if (index === 2) { // Hunters
            if (projectType) projectType.textContent = lang.games.hunters.type;
            if (projectDesc) projectDesc.textContent = lang.games.hunters.desc;
            if (projectLink) projectLink.textContent = lang.games.hunters.play + ' →';
        } else if (index === 3) { // Tragones
            if (projectType) projectType.textContent = lang.games.tragones.type;
            if (projectDesc) projectDesc.textContent = lang.games.tragones.desc;
            if (projectLink) projectLink.textContent = lang.games.tragones.play + ' →';
        }
    });
    
    // Update other sections
    updateSection('blog', lang.blog);
    updateSection('contact', lang.contact);
    
    // Update contact section content
    const contactH3 = document.querySelector('#contact h3');
    if (contactH3) contactH3.textContent = lang.contact.heading;
    
    const contactIntro = document.querySelector('#contact .contact-info p');
    if (contactIntro) contactIntro.textContent = lang.contact.intro;
    
    const resumeTitle = document.querySelector('.resume-download h4');
    if (resumeTitle) resumeTitle.textContent = lang.contact.resumeTitle;
    
    const resumeDesc = document.querySelector('.resume-download p');
    if (resumeDesc) resumeDesc.textContent = lang.contact.resumeDesc;
    
    const resumeBtn = document.querySelector('.resume-download .btn');
    if (resumeBtn) resumeBtn.textContent = lang.contact.resumeBtn;
    
    // Update footer
    const footerCredit = document.querySelector('footer p:first-child');
    if (footerCredit) footerCredit.textContent = lang.footer.credit;
    
    const footerRights = document.querySelector('footer p:nth-child(2)');
    if (footerRights) footerRights.textContent = lang.footer.rights;
    
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

// Handle admin link click and initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    // Update language toggle button text
    const toggleBtn = document.querySelector('.language-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    }
    
    // Apply saved language preference (if not English)
    if (currentLanguage !== 'en') {
        updateLanguage();
    }
    
    // Setup admin link
    const adminLink = document.querySelector('a[href="#admin"]');
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            openAdmin();
        });
    }
    
    // Load blog posts on page load
    loadBlogPosts();
});

// ======================
// BLOG POST VIEWER
// ======================

function openBlogPost(post) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'blog-post-modal';
    
    // Render markdown first
    const renderedContent = renderMarkdown(post.content);
    
    modal.innerHTML = `
        <div class="blog-post-content">
            <button class="close-post" onclick="closeBlogPost()">✕ Close</button>
            <article class="blog-article">
                <header class="blog-header">
                    <h1>${post.title}</h1>
                    <div class="blog-meta">
                        <span class="blog-date">${new Date(post.date).toLocaleDateString(post.language === 'es' ? 'es-ES' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                </header>
                <div class="blog-body"></div>
            </article>
        </div>
    `;
    
    // Set markdown content separately to avoid HTML escaping
    const blogBody = modal.querySelector('.blog-body');
    if (blogBody) {
        blogBody.innerHTML = renderedContent;
    }
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeBlogPost() {
    const modal = document.querySelector('.blog-post-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Robust markdown renderer
function renderMarkdown(markdown) {
    if (!markdown) return '';
    
    let html = String(markdown); // Ensure it's a string
    
    // Step 1: Protect code blocks
    const codeBlocks = [];
    html = html.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
        const id = `___CODE_${codeBlocks.length}___`;
        codeBlocks.push({ lang: lang || 'text', code: escapeHtml(code.trim()) });
        return id;
    });
    
    // Step 2: Images (before links to avoid conflict)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
    
    // Step 3: Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // Step 4: Headers (process in order: h3, h2, h1 to avoid conflicts)
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    
    // Step 5: Bold (before italic)
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Step 6: Italic (avoid matching asterisks in bold)
    html = html.replace(/(?<!\*)\*(?!\*)([^*]+?)\*(?!\*)/g, '<em>$1</em>');
    
    // Step 7: Unordered lists
    html = html.replace(/((?:^[\-\*] .+$\n?)+)/gm, (match) => {
        const items = match.trim().split('\n')
            .map(line => line.replace(/^[\-\*] (.+)$/, '<li>$1</li>'))
            .join('\n');
        return `<ul>\n${items}\n</ul>\n`;
    });
    
    // Step 8: Ordered lists  
    html = html.replace(/((?:^\d+\. .+$\n?)+)/gm, (match) => {
        const items = match.trim().split('\n')
            .map(line => line.replace(/^\d+\. (.+)$/, '<li>$1</li>'))
            .join('\n');
        return `<ol>\n${items}\n</ol>\n`;
    });
    
    // Step 9: Paragraphs (only wrap text that isn't already tagged)
    html = html.split('\n\n').map(block => {
        block = block.trim();
        if (!block) return '';
        
        // Skip if already has HTML tags or code placeholder
        if (block.startsWith('<') || block.includes('___CODE_')) {
            return block;
        }
        
        return `<p>${block}</p>`;
    }).join('\n\n');
    
    // Step 10: Restore code blocks
    codeBlocks.forEach((block, i) => {
        const id = `___CODE_${i}___`;
        html = html.replace(id, `<pre><code class="language-${block.lang}">${block.code}</code></pre>`);
    });
    
    return html;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ======================
// LOAD BLOG POSTS FOR PUBLIC VIEW
// ======================

async function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    try {
        // Use public GitHub API (no auth needed for public repos)
        const response = await fetch('https://api.github.com/repos/mherreravsquez/blog-posts/contents/posts', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            console.log('Blog posts directory not found. Create posts in the admin panel.');
            return;
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        if (markdownFiles.length === 0) {
            blogGrid.innerHTML = '<p style="color: var(--text-dim); padding: 2rem; text-align: center; grid-column: 1/-1;">No blog posts yet. Check back soon!</p>';
            return;
        }
        
        // Clear existing placeholder posts
        blogGrid.innerHTML = '';
        
        // Fetch and parse each post
        for (const file of markdownFiles) {
            const postData = await fetchPostContent(file.download_url);
            if (postData) {
                createBlogCard(postData, blogGrid);
            }
        }
        
        // Apply language filter
        filterBlogByLanguage();
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

async function fetchPostContent(url) {
    try {
        const response = await fetch(url);
        const content = await response.text();
        
        // Parse frontmatter
        const parts = content.split('---\n');
        if (parts.length < 3) return null;
        
        const frontmatter = parts[1];
        const markdown = parts.slice(2).join('---\n').trim();
        
        // Extract metadata
        const titleMatch = frontmatter.match(/title: "(.*?)"/);
        const dateMatch = frontmatter.match(/date: "(.*?)"/);
        const langMatch = frontmatter.match(/language: "(.*?)"/);
        const excerptMatch = frontmatter.match(/excerpt: "(.*?)"/);
        const tagsMatch = frontmatter.match(/tags: \[(.*?)\]/);
        
        // Parse tags array
        let tags = [];
        if (tagsMatch) {
            tags = tagsMatch[1].split(',').map(tag => tag.trim().replace(/"/g, ''));
        }
        
        return {
            title: titleMatch ? titleMatch[1] : 'Untitled',
            date: dateMatch ? dateMatch[1] : '',
            language: langMatch ? langMatch[1] : 'en',
            excerpt: excerptMatch ? excerptMatch[1] : markdown.substring(0, 150) + '...',
            tags: tags,
            content: markdown
        };
        
    } catch (error) {
        console.error('Error fetching post content:', error);
        return null;
    }
}

function createBlogCard(post, container) {
    const card = document.createElement('div');
    card.className = 'blog-card fade-in';
    card.setAttribute('data-lang', post.language);
    card.style.cursor = 'pointer';
    
    const formattedDate = new Date(post.date).toLocaleDateString(post.language === 'es' ? 'es-ES' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="blog-image"></div>
        <div class="blog-content">
            <div class="blog-date">${formattedDate}</div>
            <h3>${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="event.preventDefault();">Read More →</a>
        </div>
    `;
    
    // Add click handler to open full post
    card.addEventListener('click', () => {
        openBlogPost(post);
    });
    
    container.appendChild(card);
}

// ======================
// PROJECT MODAL SYSTEM
// ======================

// Project data with multimedia and blog posts
const projectsData = {
    'car-loop': {
        title: 'Car-Loop',
        type: 'VR College Project · Demo',
        tags: ['Unity 6', 'Meta Quest 3', 'VR', 'Procedural Gen', 'Hand Tracking'],
        description: 'A VR psychological horror game where players are trapped in an endless driving sequence. Uses procedural generation to create subtle variations in each loop, making players question their perception of reality. Features hand-tracking and gesture-based dialogue interactions.',
        platform: 'Meta Quest 3 (PC Connected)',
        tools: 'Unity 6, Meta XR SDK, C#',
        link: 'https://plants-path-co.itch.io/car-loop',
        media: [
            { type: 'image', url: 'https://i.imgur.com/diJAbfY.jpg' },
            { type: 'image', url: 'https://i.imgur.com/JSl88oB.jpg' }
        ],
        blogTag: 'car-loop' // Posts with this tag will show in project modal
    },
    'break-the-bubble': {
        title: 'Break the Bubble',
        type: 'Game Jam · Global Game Jam 2025',
        tags: ['Unity 2023', '2D', 'Metroidvania', 'Game Jam'],
        description: "A Metroidvania developed for GGJ 2025 exploring the theme 'Bubble.' Tells the story of a developer's creative process in building a Metroidvania. Features character transformation for tight spaces and rune-based platform movement mechanics.",
        platform: 'PC',
        tools: 'Unity 2023, C#',
        link: 'https://plants-path-co.itch.io/romper-la-burbuja-ggj-2025',
        media: [
            { type: 'image', url: 'https://i.imgur.com/Oac1gLZ.jpg' },
            { type: 'video', url: 'https://i.imgur.com/l7SI2IB.mp4' }
        ],
        blogTag: 'break-the-bubble'
    },
    'hunters-awakening': {
        title: 'Hunters: Awakening',
        type: 'College Project · Demo',
        tags: ['Unity 2023', 'Action', 'JRPG', '3D'],
        description: 'An action JRPG combining fast-paced combat with deep character customization. Features an extensive skill tree system, strategic battles, and a vast explorable world with progression mechanics.',
        platform: 'PC',
        tools: 'Unity 2023, C#',
        link: 'https://plants-path-co.itch.io/hunters-awakening',
        media: [],
        blogTag: 'hunters'
    },
    'tragones-y-mazmorras': {
        title: 'Tragones y Mazmorras x Lugares que Hablan',
        type: 'College Project · Fangame Demo',
        tags: ["Ren'Py", 'Visual Novel', 'Fangame', 'Spanish'],
        description: 'A visual novel fangame based on the Dungeon Meshi (Delicious in Dungeon) manga. Blends the original story with Chilean culture through the TV show "Lugares que Hablan", creating a unique crossover featuring the manga\'s characters in cultural storytelling scenarios.',
        platform: 'PC',
        tools: "Ren'Py, Python",
        link: 'https://mherreravsquez.itch.io/tragones-y-mazmorras-x-lugares-que-hablan',
        media: [
            { type: 'image', url: 'https://i.imgur.com/lvCnT03.png' },
            { type: 'image', url: 'https://i.imgur.com/2kuJgAy.png' },
            { type: 'image', url: 'https://i.imgur.com/43BEx6q.png' }
        ],
        blogTag: 'tragones'
    }
};

let currentCarouselIndex = 0;
let currentProjectSlides = [];

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    currentProjectSlides = project.media;
    currentCarouselIndex = 0;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.id = 'projectModal';
    
    // Build carousel HTML
    let carouselHTML = '';
    if (project.media.length > 0) {
        carouselHTML = `
            <div class="project-carousel">
                <div class="carousel-container">
                    ${project.media.map((item, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                            ${item.type === 'image' 
                                ? `<img src="${item.url}" alt="${project.title} screenshot ${index + 1}">`
                                : `<video src="${item.url}" controls loop><source src="${item.url}" type="video/mp4"></video>`
                            }
                        </div>
                    `).join('')}
                </div>
                ${project.media.length > 1 ? `
                    <button class="carousel-nav carousel-prev" onclick="changeSlide(-1)">‹</button>
                    <button class="carousel-nav carousel-next" onclick="changeSlide(1)">›</button>
                    <div class="carousel-dots">
                        ${project.media.map((_, index) => `
                            <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="project-modal-content">
            <button class="close-project" onclick="closeProjectModal()">✕ Close</button>
            
            <div class="project-modal-header">
                <div class="project-modal-type">${project.type}</div>
                <h1>${project.title}</h1>
                <div class="project-modal-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            ${carouselHTML}
            
            <div class="project-details">
                <div class="project-description-full">
                    <h2>About the Project</h2>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-info-sidebar">
                    <div class="project-info-item">
                        <h3>Platform</h3>
                        <p>${project.platform}</p>
                    </div>
                    <div class="project-info-item">
                        <h3>Tools Used</h3>
                        <p>${project.tools}</p>
                    </div>
                    <div class="project-info-item">
                        <h3>Play Now</h3>
                        <a href="${project.link}" target="_blank">Play on Itch.io →</a>
                    </div>
                </div>
            </div>
            
            <div class="project-blog-section">
                <h2>Development Blog</h2>
                <div class="project-blog-grid" id="projectBlogPosts">
                    <p style="color: var(--text-dim); text-align: center;">Loading blog posts...</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Load project-specific blog posts
    loadProjectBlogPosts(project.blogTag);
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Carousel navigation
function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (slides.length === 0) return;
    
    slides[currentCarouselIndex].classList.remove('active');
    dots[currentCarouselIndex].classList.remove('active');
    
    currentCarouselIndex += direction;
    
    if (currentCarouselIndex >= slides.length) {
        currentCarouselIndex = 0;
    } else if (currentCarouselIndex < 0) {
        currentCarouselIndex = slides.length - 1;
    }
    
    slides[currentCarouselIndex].classList.add('active');
    dots[currentCarouselIndex].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides[currentCarouselIndex].classList.remove('active');
    dots[currentCarouselIndex].classList.remove('active');
    
    currentCarouselIndex = index;
    
    slides[currentCarouselIndex].classList.add('active');
    dots[currentCarouselIndex].classList.add('active');
}

// Load blog posts for specific project
async function loadProjectBlogPosts(projectTag) {
    const container = document.getElementById('projectBlogPosts');
    if (!container) return;
    
    try {
        const response = await fetch('https://api.github.com/repos/mherreravsquez/blog-posts/contents/posts', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            container.innerHTML = '<p style="color: var(--text-dim); text-align: center;">No blog posts yet for this project.</p>';
            return;
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        // Fetch and filter posts by tag
        const projectPosts = [];
        for (const file of markdownFiles) {
            const postData = await fetchPostContent(file.download_url);
            if (postData && postData.tags && postData.tags.includes(projectTag)) {
                projectPosts.push(postData);
            }
        }
        
        if (projectPosts.length === 0) {
            container.innerHTML = '<p style="color: var(--text-dim); text-align: center; grid-column: 1/-1;">No development blog posts yet for this project. Check back soon!</p>';
            return;
        }
        
        // Display filtered posts
        container.innerHTML = '';
        projectPosts.forEach(post => {
            createProjectBlogCard(post, container);
        });
        
    } catch (error) {
        console.error('Error loading project blog posts:', error);
        container.innerHTML = '<p style="color: var(--accent); text-align: center;">Error loading blog posts.</p>';
    }
}

// Create blog card for project modal
function createProjectBlogCard(post, container) {
    const card = document.createElement('div');
    card.className = 'blog-card fade-in';
    card.style.cursor = 'pointer';
    
    const formattedDate = new Date(post.date).toLocaleDateString(post.language === 'es' ? 'es-ES' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="blog-image"></div>
        <div class="blog-content">
            <div class="blog-date">${formattedDate}</div>
            <h3>${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="event.preventDefault();">Read More →</a>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openBlogPost(post);
    });
    
    container.appendChild(card);
}

// Project modal handlers now use onclick in HTML links
// No need for event listeners here anymore


// ======================
// HANDLE #ADMIN HASH IN URL
// ======================

// Check for #admin hash on page load
if (window.location.hash === '#admin') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => openAdmin(), 100);
        });
    } else {
        setTimeout(() => openAdmin(), 100);
    }
}

// Also listen for hash changes (if user navigates to #admin)
window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
        openAdmin();
    }
});
