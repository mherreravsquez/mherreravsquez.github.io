// ======================
// GLOBAL STATE
// ======================

let githubToken = '';
let githubRepo = '';
let currentUser = '';
let allProjects = [];
let allBlogPosts = [];
let currentEditingProject = null;
let currentEditingPost = null;

// ======================
// AUTH & LOGIN
// ======================

async function login() {
    const token = document.getElementById('githubToken').value.trim();
    const repo = document.getElementById('githubRepo').value.trim();
    const errorEl = document.getElementById('loginError');
    
    if (!token || !repo) {
        showError(errorEl, 'Please enter both token and repository name');
        return;
    }
    
    try {
        // Test the token
        const response = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Invalid GitHub token');
        }
        
        const userData = await response.json();
        currentUser = userData.login;
        
        // Save credentials
        githubToken = token;
        githubRepo = repo;
        localStorage.setItem('github_token', token);
        localStorage.setItem('github_repo', repo);
        localStorage.setItem('github_user', currentUser);
        
        // Show dashboard
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('userInfo').textContent = currentUser;
        document.getElementById('currentRepo').textContent = repo;
        document.getElementById('currentUser').textContent = currentUser;
        
        // Load initial data
        showSection('projects');
        loadProjects();
        
    } catch (error) {
        showError(errorEl, 'Login failed: ' + error.message);
    }
}

function logout() {
    if (!confirm('Are you sure you want to logout?')) return;
    
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_repo');
    localStorage.removeItem('github_user');
    
    githubToken = '';
    githubRepo = '';
    currentUser = '';
    
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
}

function reconnectGitHub() {
    logout();
}

// Check if already logged in
window.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('github_token');
    const savedRepo = localStorage.getItem('github_repo');
    const savedUser = localStorage.getItem('github_user');
    
    if (savedToken && savedRepo) {
        githubToken = savedToken;
        githubRepo = savedRepo;
        currentUser = savedUser || '';
        
        document.getElementById('githubToken').value = savedToken;
        document.getElementById('githubRepo').value = savedRepo;
        
        // Auto-login
        login();
    }
});

// ======================
// NAVIGATION
// ======================

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });
    
    // Remove active from tabs
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    
    // Show selected section
    if (section === 'projects') {
        document.getElementById('projectsSection').style.display = 'block';
        document.getElementById('projectsSection').classList.add('active');
        document.querySelectorAll('.nav-tab')[0].classList.add('active');
        loadProjects();
    } else if (section === 'blog') {
        document.getElementById('blogSection').style.display = 'block';
        document.getElementById('blogSection').classList.add('active');
        document.querySelectorAll('.nav-tab')[1].classList.add('active');
        loadBlogPosts();
    } else if (section === 'settings') {
        document.getElementById('settingsSection').style.display = 'block';
        document.getElementById('settingsSection').classList.add('active');
        document.querySelectorAll('.nav-tab')[2].classList.add('active');
    }
}

// ======================
// PROJECTS MANAGEMENT
// ======================

async function loadProjects() {
    const container = document.getElementById('projectsList');
    container.innerHTML = '<div class="loading">Loading projects...</div>';
    
    try {
        // Load from projects.json in the repo
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/projects.json`, {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.ok) {
            const fileData = await response.json();
            const content = atob(fileData.content);
            allProjects = JSON.parse(content);
        } else {
            // File doesn't exist yet, start with empty array
            allProjects = [];
        }
        
        displayProjects();
        
    } catch (error) {
        container.innerHTML = `<div class="error-message" style="display:block;">Error loading projects: ${error.message}</div>`;
    }
}

function displayProjects() {
    const container = document.getElementById('projectsList');
    
    if (allProjects.length === 0) {
        container.innerHTML = '<div class="loading">No projects yet. Create your first one!</div>';
        return;
    }
    
    container.innerHTML = allProjects.map(project => `
        <div class="item-card">
            <div class="item-info">
                <h3>${project.title}</h3>
                <div class="item-meta">
                    <span>ID: ${project.id}</span>
                    <span>${project.type}</span>
                </div>
                <p class="item-description">${project.description.substring(0, 150)}...</p>
                <div class="item-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="item-actions">
                <button class="btn-icon" onclick='editProject(${JSON.stringify(project).replace(/'/g, "&apos;")})' title="Edit">
                    ✏️
                </button>
                <button class="btn-icon btn-delete" onclick="deleteProject('${project.id}')" title="Delete">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
}

function openProjectEditor(project = null) {
    currentEditingProject = project;
    const modal = document.getElementById('projectEditorModal');
    const title = document.getElementById('projectEditorTitle');
    
    if (project) {
        title.textContent = 'Edit Project';
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectId').value = project.id;
        document.getElementById('projectType').value = project.type;
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectPlatform').value = project.platform;
        document.getElementById('projectTools').value = project.tools;
        document.getElementById('projectLink').value = project.link;
        document.getElementById('projectBlogTag').value = project.blogTag;
        document.getElementById('projectTags').value = project.tags.join(', ');
        document.getElementById('projectMedia').value = project.media.map(m => m.url).join('\n');
    } else {
        title.textContent = 'New Project';
        document.getElementById('projectTitle').value = '';
        document.getElementById('projectId').value = '';
        document.getElementById('projectType').value = '';
        document.getElementById('projectDescription').value = '';
        document.getElementById('projectPlatform').value = '';
        document.getElementById('projectTools').value = '';
        document.getElementById('projectLink').value = '';
        document.getElementById('projectBlogTag').value = '';
        document.getElementById('projectTags').value = '';
        document.getElementById('projectMedia').value = '';
        
        // Set default date
        document.getElementById('postDate').valueAsDate = new Date();
    }
    
    modal.classList.add('active');
}

function closeProjectEditor() {
    document.getElementById('projectEditorModal').classList.remove('active');
    currentEditingProject = null;
}

function editProject(project) {
    openProjectEditor(project);
}

async function saveProject() {
    const title = document.getElementById('projectTitle').value.trim();
    const id = document.getElementById('projectId').value.trim();
    const type = document.getElementById('projectType').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const platform = document.getElementById('projectPlatform').value.trim();
    const tools = document.getElementById('projectTools').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const blogTag = document.getElementById('projectBlogTag').value.trim();
    const tagsStr = document.getElementById('projectTags').value.trim();
    const mediaStr = document.getElementById('projectMedia').value.trim();
    
    if (!title || !id || !description) {
        alert('Please fill in required fields: Title, ID, and Description');
        return;
    }
    
    const tags = tagsStr.split(',').map(t => t.trim()).filter(t => t);
    const mediaUrls = mediaStr.split('\n').map(u => u.trim()).filter(u => u);
    const media = mediaUrls.map(url => {
        const isVideo = url.match(/\.(mp4|webm|mov)$/i);
        return {
            type: isVideo ? 'video' : 'image',
            url: url
        };
    });
    
    const project = {
        id,
        title,
        type,
        description,
        platform,
        tools,
        link,
        blogTag,
        tags,
        media
    };
    
    // Update or add project
    if (currentEditingProject) {
        const index = allProjects.findIndex(p => p.id === currentEditingProject.id);
        allProjects[index] = project;
    } else {
        allProjects.push(project);
    }
    
    // Save to GitHub
    try {
        await saveProjectsToGitHub();
        closeProjectEditor();
        displayProjects();
        alert('Project saved successfully!');
    } catch (error) {
        alert('Error saving project: ' + error.message);
    }
}

async function deleteProject(projectId) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    allProjects = allProjects.filter(p => p.id !== projectId);
    
    try {
        await saveProjectsToGitHub();
        displayProjects();
        alert('Project deleted successfully!');
    } catch (error) {
        alert('Error deleting project: ' + error.message);
    }
}

async function saveProjectsToGitHub() {
    const content = JSON.stringify(allProjects, null, 2);
    const encodedContent = btoa(unescape(encodeURIComponent(content)));
    
    // Check if file exists to get SHA
    let sha = null;
    try {
        const getResponse = await fetch(`https://api.github.com/repos/${githubRepo}/contents/projects.json`, {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (getResponse.ok) {
            const fileData = await getResponse.json();
            sha = fileData.sha;
        }
    } catch (e) {
        // File doesn't exist, that's ok
    }
    
    // Save file
    const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/projects.json`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: sha ? 'Update projects data' : 'Create projects data',
            content: encodedContent,
            sha: sha
        })
    });
    
    if (!response.ok) {
        throw new Error('Failed to save projects');
    }
}

// ======================
// BLOG MANAGEMENT
// ======================

async function loadBlogPosts() {
    const container = document.getElementById('blogList');
    container.innerHTML = '<div class="loading">Loading blog posts...</div>';
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/posts`, {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            container.innerHTML = '<div class="loading">No blog posts yet. Create your first one!</div>';
            allBlogPosts = [];
            return;
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        // Fetch each post's content
        allBlogPosts = await Promise.all(markdownFiles.map(async (file) => {
            try {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                
                // Parse frontmatter
                const parts = content.split('---\n');
                if (parts.length < 3) return null;
                
                const frontmatter = parts[1];
                const markdown = parts.slice(2).join('---\n').trim();
                
                const titleMatch = frontmatter.match(/title: "(.*?)"/);
                const dateMatch = frontmatter.match(/date: "(.*?)"/);
                const langMatch = frontmatter.match(/language: "(.*?)"/);
                const tagsMatch = frontmatter.match(/tags: \[(.*?)\]/);
                const excerptMatch = frontmatter.match(/excerpt: "(.*?)"/);
                
                let tags = [];
                if (tagsMatch) {
                    tags = tagsMatch[1].split(',').map(tag => tag.trim().replace(/"/g, ''));
                }
                
                return {
                    filename: file.name,
                    slug: file.name.replace('.md', ''),
                    title: titleMatch ? titleMatch[1] : 'Untitled',
                    date: dateMatch ? dateMatch[1] : '',
                    language: langMatch ? langMatch[1] : 'en',
                    tags: tags,
                    excerpt: excerptMatch ? excerptMatch[1] : '',
                    content: markdown,
                    sha: file.sha
                };
            } catch (e) {
                return null;
            }
        }));
        
        allBlogPosts = allBlogPosts.filter(p => p !== null);
        displayBlogPosts();
        
    } catch (error) {
        container.innerHTML = `<div class="error-message" style="display:block;">Error loading blog posts: ${error.message}</div>`;
    }
}

function displayBlogPosts(posts = null) {
    const container = document.getElementById('blogList');
    const postsToShow = posts || allBlogPosts;
    
    if (postsToShow.length === 0) {
        container.innerHTML = '<div class="loading">No blog posts found.</div>';
        return;
    }
    
    container.innerHTML = postsToShow.map(post => `
        <div class="item-card">
            <div class="item-info">
                <h3>${post.title}</h3>
                <div class="item-meta">
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                    <span>${post.language === 'es' ? 'Español' : 'English'}</span>
                </div>
                <p class="item-description">${post.excerpt || post.content.substring(0, 150) + '...'}</p>
                <div class="item-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="item-actions">
                <button class="btn-icon" onclick='editPost(${JSON.stringify(post).replace(/'/g, "&apos;")})' title="Edit">
                    ✏️
                </button>
                <button class="btn-icon btn-delete" onclick="deletePost('${post.filename}', '${post.sha}')" title="Delete">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
}

function filterBlogPosts() {
    const filter = document.getElementById('blogFilter').value;
    const search = document.getElementById('blogSearch').value.toLowerCase();
    
    let filtered = allBlogPosts;
    
    // Filter by type
    if (filter === 'general') {
        filtered = filtered.filter(post => !post.tags.some(tag => 
            ['car-loop', 'break-the-bubble', 'hunters', 'tragones'].includes(tag)
        ));
    } else if (filter === 'project') {
        filtered = filtered.filter(post => post.tags.some(tag => 
            ['car-loop', 'break-the-bubble', 'hunters', 'tragones'].includes(tag)
        ));
    }
    
    // Filter by search
    if (search) {
        filtered = filtered.filter(post => 
            post.title.toLowerCase().includes(search) ||
            post.tags.some(tag => tag.toLowerCase().includes(search))
        );
    }
    
    displayBlogPosts(filtered);
}

function searchBlogPosts() {
    filterBlogPosts();
}

function openBlogEditor(post = null) {
    currentEditingPost = post;
    const modal = document.getElementById('blogEditorModal');
    const title = document.getElementById('blogEditorTitle');
    
    if (post) {
        title.textContent = 'Edit Blog Post';
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postSlug').value = post.slug;
        document.getElementById('postDate').value = post.date;
        document.getElementById('postLanguage').value = post.language;
        document.getElementById('postTags').value = post.tags.join(', ');
        document.getElementById('postExcerpt').value = post.excerpt;
        document.getElementById('postContent').value = post.content;
    } else {
        title.textContent = 'New Blog Post';
        document.getElementById('postTitle').value = '';
        document.getElementById('postSlug').value = '';
        document.getElementById('postDate').valueAsDate = new Date();
        document.getElementById('postLanguage').value = 'en';
        document.getElementById('postTags').value = '';
        document.getElementById('postExcerpt').value = '';
        document.getElementById('postContent').value = '';
    }
    
    modal.classList.add('active');
}

function closeBlogEditor() {
    document.getElementById('blogEditorModal').classList.remove('active');
    currentEditingPost = null;
}

function editPost(post) {
    openBlogEditor(post);
}

async function savePost() {
    const title = document.getElementById('postTitle').value.trim();
    let slug = document.getElementById('postSlug').value.trim();
    const date = document.getElementById('postDate').value;
    const language = document.getElementById('postLanguage').value;
    const tagsStr = document.getElementById('postTags').value.trim();
    const excerpt = document.getElementById('postExcerpt').value.trim();
    const content = document.getElementById('postContent').value.trim();
    
    if (!title || !content) {
        alert('Please fill in required fields: Title and Content');
        return;
    }
    
    // Auto-generate slug if not provided
    if (!slug) {
        slug = title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    }
    
    const filename = `${slug}.md`;
    const tags = tagsStr.split(',').map(t => t.trim()).filter(t => t);
    const tagsArray = tags.map(t => `"${t}"`).join(', ');
    
    // Create frontmatter
    const frontmatter = `---
title: "${title}"
date: "${date}"
language: "${language}"
tags: [${tagsArray}]
excerpt: "${excerpt}"
---

${content}`;
    
    const encodedContent = btoa(unescape(encodeURIComponent(frontmatter)));
    
    // Get SHA if editing existing post
    let sha = null;
    if (currentEditingPost) {
        sha = currentEditingPost.sha;
    }
    
    try {
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
            throw new Error('Failed to save post');
        }
        
        closeBlogEditor();
        loadBlogPosts();
        alert('Blog post saved successfully!');
        
    } catch (error) {
        alert('Error saving post: ' + error.message);
    }
}

async function deletePost(filename, sha) {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    
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
        
        loadBlogPosts();
        alert('Blog post deleted successfully!');
        
    } catch (error) {
        alert('Error deleting post: ' + error.message);
    }
}

// ======================
// SETTINGS & UTILITIES
// ======================

function clearCache() {
    if (!confirm('This will clear cached data. Continue?')) return;
    
    allProjects = [];
    allBlogPosts = [];
    
    showSection('projects');
    alert('Cache cleared! Data will reload.');
}

function exportData() {
    const data = {
        projects: allProjects,
        blogPosts: allBlogPosts,
        exportedAt: new Date().toISOString()
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-backup-${Date.now()}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    alert('Data exported successfully!');
}

function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

// Auto-generate slug from title
document.getElementById('postTitle')?.addEventListener('input', (e) => {
    const slug = e.target.value.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    document.getElementById('postSlug').value = slug;
});

document.getElementById('projectTitle')?.addEventListener('input', (e) => {
    if (!document.getElementById('projectId').value) {
        const id = e.target.value.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        document.getElementById('projectId').value = id;
    }
});
