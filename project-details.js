// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Project data
const projects = [
    {
        id: 'tmlh',
        title: 'Tragones y Mazmorras x Lugares que Hablan',
        tags: ['RenPy', '2D', 'PC'],
        description: {
            en: 'Tragones y Mazmorras x Lugares que Hablan is a visual novel developed in RenPy, only available in Spanish. The story unfolds as it normally would in the first chapter of the manga of the anime Tragones y Mazmorras, introducing in certain scenes Francisco Saavedra, also known as Pancho Saavedra, host of the program Lugares que hablan, where he visits different places in Chile, learning about their culture and tasting their food, just as can be seen in this project, which mixes Pancho\'s humor with that of the rest of the group of Laos and Marcielle.',
            es: 'Tragones y Mazmorras x Lugares que Hablan es una novela visual desarrollada en RenPy, solamente disponible en español. La historia se desarrolla como normalmente sucedería en el primer capítulo del manga del anime Tragones y Mazmorras, introduciendo en ciertas escenas a Francisco Saavedra, también conocido como Pancho Saavedra, conductor del programa Lugares que hablan, donde se visita diferentes sitios en Chile, aprendiendo de su cultura y probando su comida, tal y como se puede apreciar en este proyecto, donde se mezcla el humor de Pancho con el del resto del grupo de Laos y Marcielle.'
        },
        projectDetails: {
            en: 'Tragones y Mazmorras x Lugares que Hablan is a visual novel developed in RenPy, only available in Spanish. The story unfolds as it normally would in the first chapter of the manga of the anime Tragones y Mazmorras, introducing in certain scenes Francisco Saavedra, also known as Pancho Saavedra, host of the program Lugares que hablan, where he visits different places in Chile, learning about their culture and tasting their food, just as can be seen in this project, which mixes Pancho\'s humor with that of the rest of the group of Laos and Marcielle.\n\nThe art for the project was entirely made by Antonia Benz.',
            es: 'Tragones y Mazmorras x Lugares que Hablan es una novela visual desarrollada en RenPy, solamente disponible en español. La historia se desarrolla como normalmente sucedería en el primer capítulo del manga del anime Tragones y Mazmorras, introduciendo en ciertas escenas a Francisco Saavedra, también conocido como Pancho Saavedra, conductor del programa Lugares que hablan, donde se visita diferentes sitios en Chile, aprendiendo de su cultura y probando su comida, tal y como se puede apreciar en este proyecto, donde se mezcla el humor de Pancho con el del resto del grupo de Laos y Marcielle.\n\nEl arte del proyecto fue hecho en su totalidad por Antonia Benz.'
        },
        images: ['https://i.imgur.com/lvCnT03.jpg', 'https://i.imgur.com/2kuJgAy.jpg', 'https://i.imgur.com/43BEx6q.jpg'],
        demoUrl: 'https://mherreravsquez.itch.io/tragones-y-mazmorras-x-lugares-que-hablan',
        objectives: {
            en: [
                'Create a project that mixes a character from Chilean culture with a fantasy universe',
                'Develop a visual novel using RenPy engine',
                'Combine humor from different cultural references into a cohesive narrative',
                'Explore the integration of real-world personalities into fictional universes'
            ],
            es: [
                'Crear un proyecto que mezcle un personaje de la cultura chilena con un universo de fantasía',
                'Desarrollar una novela visual utilizando el motor RenPy',
                'Combinar el humor de diferentes referencias culturales en una narrativa cohesiva',
                'Explorar la integración de personalidades del mundo real en universos ficticios'
            ]
        },
        technicalDifficulties: {
            en: [
                'First time working with RenPy engine',
                'Integrating an established character into a fantasy universe',
                'Balancing humor from different cultural references',
                'Adapting the visual novel format to include interactive elements'
            ],
            es: [
                'Primera vez trabajando con el motor RenPy',
                'Integración de un personaje ya establecido dentro de un universo fantástico',
                'Equilibrar el humor de diferentes referencias culturales',
                'Adaptar el formato de novela visual para incluir elementos interactivos'
            ]
        }
    },
    {
        id: 'car_loop',
        title: 'Car-Loop',
        tags: ['Unity', 'VR', '3D', 'PC'],
        description: {
            en: 'A VR psychological horror experience that traps players in an infinite driving loop. Built with Unity and C#, featuring advanced procedural generation and atmospheric storytelling.',
            es: 'Una experiencia de terror psicológico en VR que atrapa a los jugadores en un bucle infinito de conducción. Construido con Unity y C#, con generación procedural avanzada y narrativa atmosférica.'
        },
        projectDetails: {
            en: 'Car-Loop is a VR psychological horror game where players find themselves trapped in an endless driving sequence. The game uses procedural generation to create subtle variations in each loop, making players question their perception of reality.',
            es: 'Car-Loop es un juego de terror psicológico en VR donde los jugadores se encuentran atrapados en una secuencia infinita de conducción. El juego utiliza generación procedural para crear variaciones sutiles en cada bucle, haciendo que los jugadores cuestionen su percepción de la realidad.'
        },
        images: ['https://i.imgur.com/diJAbfY.jpg', 'https://i.imgur.com/BTx7b1s.jpg', 'https://i.imgur.com/RXFupZo.jpg', 'https://i.imgur.com/JSl88oB.jpg'],
        demoUrl: 'https://plants-path-co.itch.io/car-loop',
        objectives: {
            en: [
                'Create an immersive VR horror experience that plays with player perception',
                'Implement procedural generation to create unique experiences in each playthrough',
                'Develop comfortable VR movement mechanics to prevent motion sickness',
                'Create an atmospheric narrative that unfolds through environmental storytelling'
            ],
            es: [
                'Crear una experiencia de terror inmersiva en VR que juegue con la percepción del jugador',
                'Implementar generación procedural para crear experiencias únicas en cada partida',
                'Desarrollar mecánicas de movimiento cómodas en VR para prevenir mareos',
                'Crear una narrativa atmosférica que se desarrolle a través de la narrativa ambiental'
            ]
        },
        technicalDifficulties: {
            en: [
                'Implementing seamless VR movement without causing motion sickness',
                'Procedural generation of the environment that feels both repetitive and varied',
                'Optimizing performance for VR platforms'
            ],
            es: [
                'Implementar movimiento en VR sin interrupciones que no cause mareo',
                'Generación procedural del entorno que se sienta repetitivo y variado a la vez',
                'Optimizar el rendimiento para plataformas de VR'
            ]
        }
    },
    {
        id: 'break_bubble',
        title: 'Break the Bubble',
        tags: ['Unity', '2D', 'PC'],
        description: {
            en: 'Break the Bubble is a game developed for GGJ 2025, with the theme of "Bubble." This game tells the story of a developer who wants to develop a new video game, showing us his creative process toward creating the Metroidvania genre in his world.',
            es: 'Break the Bubble es un juego desarrollado para la GGJ 2025, el tema era Burbuja. En este juego, se narra la historia de un desarrollador que quiere desarrollar un nuevo videojuego, se nos muestra su proceso creativo hacia la creación del genero Metroidvania en su mundo.'
        },
        projectDetails: {
            en: 'Break the Bubble is a game developed for GGJ 2025, with the theme of "Bubble." This game tells the story of a developer who wants to develop a new video game, showing us his creative process toward creating the Metroidvania genre in his world.\n\nDuring the Metroidvania stage, we can see mechanics such as the transformation of the character to be able to move through confined spaces, and the movement of platforms with runes, in order to reach places that you could not reach with a conventional jump.',
            es: 'Break the Bubble es un juego desarrollado para la GGJ 2025, el tema era Burbuja. En este juego, se narra la historia de un desarrollador que quiere desarrollar un nuevo videojuego, se nos muestra su proceso creativo hacia la creación del genero Metroidvania en su mundo.\n\nDurante la etapa de metroidvania, podemos notar mecánicas como la transformación del personaje para poder avanzar por espacios reducidos, y el movimiento de plataformas con runas, con el fin de alcanzar lugares que no podrías alcanzar con un salto convencional.'
        },
        images: ['https://i.imgur.com/Oac1gLZ.jpg', 'https://i.imgur.com/0nRsSsi.jpg', 'https://i.imgur.com/l7SI2IB.mp4'],
        demoUrl: 'https://plants-path-co.itch.io/romper-la-burbuja-ggj-2025',
        objectives: {
            en: [
                'Develop a complete game in 48 hours for Global Game Jam 2025',
                'Create a Metroidvania-style game with transformation mechanics',
                'Implement rune-based platform movement systems',
                'Tell a story about the creative process of game development'
            ],
            es: [
                'Desarrollar un juego completo en 48 horas para la Global Game Jam 2025',
                'Crear un juego estilo Metroidvania con mecánicas de transformación',
                'Implementar sistemas de movimiento de plataformas basados en runas',
                'Contar una historia sobre el proceso creativo del desarrollo de videojuegos'
            ]
        },
        technicalDifficulties: {
            en: [
                'Implementing character transformation mechanics',
                'Creating platform movement systems with rune-based interactions',
                'Designing non-linear level progression typical of Metroidvania games'
            ],
            es: [
                'Implementar mecánicas de transformación de personaje',
                'Crear sistemas de movimiento de plataformas con interacciones basadas en runas',
                'Diseñar progresión de niveles no lineal típica de juegos Metroidvania'
            ]
        }
    },
    {
        id: 'hunters',
        title: 'HUNTERS: Awakening',
        tags: ['Unity', '3D', 'PC'],
        description: {
            en: 'HUNTERS: Awakening is an action JRPG featuring dynamic combat systems and deep character progression.',
            es: 'HUNTERS: Awakening es un JRPG de acción con sistemas de combate dinámicos y progresión de personajes profunda.'
        },
        projectDetails: {
            en: 'HUNTERS: Awakening is an action JRPG that combines fast-paced combat with deep character customization and progression systems. Players can explore a vast world, engage in strategic battles, and develop their characters through an extensive skill tree.',
            es: 'HUNTERS: Awakening es un JRPG de acción que combina combate rápido con personalización profunda de personajes y sistemas de progresión. Los jugadores pueden explorar un mundo vasto, participar en batallas estratégicas y desarrollar sus personajes a través de un extenso árbol de habilidades.'
        },
        images: ['assets/Main Projects/HUNTERS/HUNTERS_thumbnail.png', 'assets/Main Projects/HUNTERS/HUNTERS_gameplay1.png'],
        demoUrl: 'https://plants-path-co.itch.io/hunters-awakening',
        objectives: {
            en: [
                'Create a dynamic combat system that blends action and strategy',
                'Develop an extensive character progression system with skill trees',
                'Design a compelling JRPG-style narrative with memorable characters',
                'Build a vast explorable world with diverse environments'
            ],
            es: [
                'Crear un sistema de combate dinámico que combine acción y estrategia',
                'Desarrollar un sistema extenso de progresión de personajes con árboles de habilidades',
                'Diseñar una narrativa convincente al estilo JRPG con personajes memorables',
                'Construir un mundo vasto y explorable con entornos diversos'
            ]
        },
        technicalDifficulties: {
            en: [
                'Developing dynamic combat systems',
                'Creating character progression and skill trees',
                'Implementing JRPG-style narrative systems'
            ],
            es: [
                'Desarrollar sistemas de combate dinámicos',
                'Crear progresión de personajes y árboles de habilidades',
                'Implementar sistemas narrativos al estilo JRPG'
            ]
        }
    }
];

// Translations
const translations = {
    en: {
        // HEADER & NAVIGATION
        logo: 'Marcelo Herrera',
        nav_about: 'About me',
        nav_projects: 'Projects',
        nav_gallery: 'Gallery',
        nav_skills: 'Skills',
        nav_contact: 'Contact',

        // HERO SECTION
        name: 'Marcelo Herrera',
        title: 'Gameplay Programmer & Game Designer',
        status: 'Available for Projects',

        // ABOUT SECTION
        bio_full: 'Gameplay Programmer and Game Designer specializing in Unity, currently in his third year of Digital Game Design at Andrés Bello University. Passionate about experimenting with emerging technologies—procedural generation, procedural animation, virtual reality—and developing innovative prototypes that enhance interactivity and gameplay. Founder and active member of Plants Path Collective, a group dedicated to indie video game development, where he leads multidisciplinary projects specializing in interactive narrative, complex mechanics, and transmedia IP design.',
        stat_experience: 'Years of Experience',
        stat_education_value: 'Estudies',
        stat_education: 'Digital Game Design Student',
        stat_specialization: 'Specialization',
        stat_specialization_value: 'Unity 3D & VR',
        stat_interests_value: 'Interests',
        stat_interests: 'Procedural Animation & Procedural Generation',

        // PROJECTS SECTION
        section_projects: 'Featured Projects',
        btn_learn_more: 'Learn More',
        btn_download_demo: 'Download Demo',
        technical_difficulties: 'Technical Challenges',
        objectives: 'Project Objectives',
        project_tags: 'Project Tags',
        description: 'Description',

        // GALLERY SECTION
        section_gallery: 'Creative Gallery',
        gallery_subtitle: '3D Art • Interactive Installations • Animations • Cinematics • & more',
        gallery_tools: 'Tools & Software',
        gallery_description: 'Description',
        gallery_filter_3d_art: '3D Art',
        gallery_filter_interactive: 'Interactive Installations',
        gallery_filter_animations: 'Animations',

        // SKILLS SECTION
        section_skills: 'Skills & Tools',

        // ACHIEVEMENTS SECTION
        section_achievements: 'Achievements & Certifications',

        // CONTACT SECTION
        section_contact: 'Let\'s Connect',
        contact_subtitle: 'Ready to collaborate on innovative gaming projects',
        cv_download: 'Download CV',

        // FOOTER
        footer_text: '© 2025 Marcelo Herrera. All rights reserved.'
    },

    es: {
        // ENCABEZADO Y NAVEGACIÓN
        logo: 'Marcelo Herrera',
        nav_about: 'Sobre mi',
        nav_projects: 'Proyectos',
        nav_gallery: 'Galería',
        nav_skills: 'Habilidades',
        nav_contact: 'Contacto',

        // SECCIÓN HERO
        name: 'Marcelo Herrera',
        title: 'Programador de Gameplay y Diseñador de Juegos',
        status: 'Disponible para Proyectos',

        // SECCIÓN ABOUT
        bio_full: 'Gameplay Programmer y Game Designer especializado en Unity, actualmente cursando el tercer año de Diseño de Juegos Digitales en la Universidad Andrés Bello. Apasionado por experimentar con tecnologías emergentes —generación procedural, animación procedural, realidad virtual— y desarrollar prototipos innovadores que potencien la interactividad y el gameplay. Fundador y miembro activo de Plants Path Collective, grupo dedicado al desarrollo de videojuegos indie, donde lidera proyectos multidisciplinarios con especialización en narrativa interactiva, mecánicas complejas e IP design transmedia.',
        stat_experience: 'Años de Experiencia',
        stat_education_value: 'Estudios',
        stat_education: 'Estudiante de Diseño de Juegos Digitales',
        stat_specialization: 'Especialización',
        stat_specialization_value: 'Unity 3D & VR',
        stat_interests_value: 'Intereses',
        stat_interests: 'Animación y Generación Procedural',

        // SECCIÓN PROYECTOS
        section_projects: 'Proyectos Destacados',
        btn_learn_more: 'Saber Más',
        btn_download_demo: 'Descargar Demo',
        technical_difficulties: 'Desafíos Técnicos',
        objectives: 'Objetivos del Proyecto',
        project_tags: 'Etiquetas del Proyecto',
        description: 'Descripción',

        // SECCIÓN GALERÍA
        section_gallery: 'Galería Creativa',
        gallery_subtitle: '3D Art • Instalaciones Interactivas • Animaciones • Cinemática • y más',
        gallery_tools: 'Herramientas y Software',
        gallery_description: 'Descripción',
        gallery_filter_3d_art: 'Arte 3D',
        gallery_filter_interactive: 'Instalaciones Interactivas',
        gallery_filter_animations: 'Animaciones',

        // SECCIÓN HABILIDADES
        section_skills: 'Habilidades y Herramientas',

        // SECCIÓN LOGROS
        section_achievements: 'Logros y Certificaciones',

        // SECCIÓN CONTACTO
        section_contact: 'Conectemos',
        contact_subtitle: 'Listo para colaborar en proyectos innovadores de videojuegos',
        cv_download: 'Descargar CV',
        
        // PIE DE PÁGINA
        footer_text: '© 2025 Marcelo Herrera. Todos los derechos reservados.'
    }
};

let currentLang = 'en';
let currentSlide = 0;

// Helper function to get translation
function getTranslation(key) {
    return translations[currentLang][key] || key;
}

// Load project data
function loadProject() {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        document.body.innerHTML = '<h1>Project not found</h1>';
        return;
    }

    // Set page title
    document.title = `${project.title} - Marcelo Herrera`;
    
    // Update content
    document.getElementById('projectTitle').textContent = project.title;
    
    // Update tags
    const tagsContainer = document.getElementById('projectTags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="project-tag-modal">${tag}</span>`
    ).join('');
    
    // Update description
    document.getElementById('projectDescription').textContent = 
        project.projectDetails[currentLang];
    
    // Update objectives
    const objectivesContainer = document.getElementById('projectObjectives');
    objectivesContainer.innerHTML = project.objectives[currentLang].map(
        objective => `<li>${objective}</li>`
    ).join('');
    
    // Update technical difficulties
    const techDifficultiesContainer = document.getElementById('projectTechnicalDifficulties');
    techDifficultiesContainer.innerHTML = project.technicalDifficulties[currentLang].map(
        difficulty => `<li>${difficulty}</li>`
    ).join('');
    
    // Update demo link
    const downloadSection = document.getElementById('downloadSection');
    const demoLink = document.getElementById('demoLink');
    if (project.demoUrl) {
        downloadSection.style.display = 'block';
        demoLink.href = project.demoUrl;
    } else {
        downloadSection.style.display = 'none';
    }
    
    // Update carousel
    renderCarousel(project);
}

// Render carousel
function renderCarousel(project) {
    const track = document.getElementById('modal-carousel-track');
    const dots = document.getElementById('carouselDots');
    
    track.innerHTML = project.images.map(img => `
        <img src="${img}" alt="${project.title}" class="modal-carousel-image" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRBOEU0MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4='">
    `).join('');
    
    if (project.images.length > 1) {
        dots.innerHTML = project.images.map((_, i) => `
            <span class="modal-carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>
        `).join('');
        
        document.getElementById('carouselPrev').style.display = 'block';
        document.getElementById('carouselNext').style.display = 'block';
    } else {
        dots.innerHTML = '';
        document.getElementById('carouselPrev').style.display = 'none';
        document.getElementById('carouselNext').style.display = 'none';
    }
    
    updateCarousel();
}

// Carousel functions
function updateCarousel() {
    const track = document.getElementById('modal-carousel-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.modal-carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function moveCarousel(direction) {
    const project = projects.find(p => p.id === projectId);
    currentSlide = (currentSlide + direction + project.images.length) % project.images.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Language functions
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateLanguage();
    updateLanguageButton();
}

function updateLanguageButton() {
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';
}

function updateLanguage() {
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            el.textContent = translation;
        }
    });

    // Reload project data with new language
    loadProject();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProject();
    
    // Set up carousel event listeners
    document.getElementById('carouselPrev').addEventListener('click', () => moveCarousel(-1));
    document.getElementById('carouselNext').addEventListener('click', () => moveCarousel(1));
    
    // Set up language
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    updateLanguageButton();
    
    // Set up mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mainNav').classList.toggle('active');
    });
});