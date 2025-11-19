// ===== DATA - ALL CONTENT =====

// Hero Carousel Projects - CORREGIDO: Array con título, tags y ruta de imagen
const heroCarouselData = [
    {
        id: 'car_loop', 
        title: 'Car-Loop',
        tags: ['Unity', 'VR', '3D', 'PC', 'Psychological Horror'],
        image: 'https://imgur.com/diJAbfY.jpg',
        images: ['https://imgur.com/diJAbfY.jpg', 'https://imgur.com/BTx7b1s.jpg', 'https://imgur.com/RXFupZo.jpg', 'https://imgur.com/JSl88oB.jpg']
    },
    {
        id: 'break_bubble',
        title: 'Break the Bubble',
        tags: ['Unity', 'C#', 'PC', 'Metroidvania'],
        image: 'https://imgur.com/Oac1gLZ.jpg'
    },
    {
        id: 'hunters',
        title: 'HUNTERS: Awakening', 
        tags: ['Unity', '3D', 'PC', 'JRPG'],
        image: 'assets/Main Projects/HUNTERS/HUNTERS_gameplay1.png'
    }
];

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
        images: ['https://imgur.com/lvCnT03.jpg', 'https://imgur.com/2kuJgAy.jpg', 'https://imgur.com/43BEx6q.jpg'],
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
        images: ['https://imgur.com/diJAbfY.jpg', 'https://imgur.com/BTx7b1s.jpg', 'https://imgur.com/RXFupZo.jpg', 'https://imgur.com/JSl88oB.jpg'],
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
        images: ['https://imgur.com/Oac1gLZ.jpg', 'https://imgur.com/0nRsSsi.jpg'],
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

const gallery = [
    {
        id: 'boombastic',
        title: { en: 'Boombastic - Interactive Installation', es: 'Boombastic - Instalación Interactiva' },
        category: { en: 'Interactive Installation', es: 'Instalación Interactiva' },
        tags: ['Interactive Installations'],
        description: {
            en: 'Boombastic is an interactive installation that uses hand-tracking technology to allow users to move virtual cassettes onto a virtual boom box. Placing a cassette on the boom box sends a signal to REAPER a digital audio workstation to create beats with samples of representative songs from the 1990s. MadMapper is implemented to perform mapping projections on the boom box model, displaying various visual reactions and animations in real time.',
            es: 'Boombastic es una instalación interactiva que utiliza tecnología de seguimiento manual para que los usuarios puedan mover casetes virtuales hacia un radiocasete virtual. Al colocar un casete en el radiocasete, se envía una señal a REAPER una estación de trabajo de audio digital para crear ritmos con muestras de canciones representativas de los años 90. MadMapper se implementa para realizar proyecciones de mapas en el modelo del radiocasete, mostrando diversas reacciones visuales y animaciones en tiempo real.'
        },
        images: ['https://imgur.com/IOShMuK.mp4'],
        tools: ['Unity 6.2', 'Kinect SDK 2.0', 'Reaper 7.48', 'MadMapper 5.6.8'],
        objectives: {
            en: [
                'Create an interactive music experience using hand-tracking technology',
                'Integrate audio software with visual projections for a multisensory experience',
                'Develop a responsive system that reacts to user interactions in real time',
                'Combine nostalgic elements (cassettes) with modern technology'
            ],
            es: [
                'Crear una experiencia musical interactiva utilizando tecnología de seguimiento manual',
                'Integrar software de audio con proyecciones visuales para una experiencia multisensorial',
                'Desarrollar un sistema receptivo que reaccione a las interacciones del usuario en tiempo real',
                'Combinar elementos nostálgicos (casetes) con tecnología moderna'
            ]
        }
    },
    {
        id: 'beep',
        title: { en: 'Beep Animation and Sculpting', es: 'Animación y Esculpido de Beep' },
        category: { en: '3D Sculpting and Animation', es: 'Escultura 3D y Animación' },
        tags: ['3D Art', 'Animations'],
        description: {
            en: 'Sculpted and textured in ZBrush of the character Beep from the video game Kenshi. Then animated in Blender using Mixamo animations. This piece showcases advanced sculpting techniques and smooth character animation integration.',
            es: 'Esculpido y texturizado en ZBrush del personaje Beep del videojuego Kenshi. Luego animado en Blender haciendo uso de las animaciones de Mixamo. Esta pieza muestra técnicas de esculpido avanzadas e integración fluida de animación de caracteres.'
        },
        images: ['https://i.imgur.com/wbBoL9I.gif'],
        tools: ['Blender 4.0', 'ZBrush', 'Mixamo', 'Rokoko Studio addon'],
        objectives: {
            en: [
                'Master advanced sculpting techniques in ZBrush',
                'Create a faithful recreation of a character from an existing game',
                'Integrate Mixamo animations with custom character models',
                'Develop skills in character rigging and animation workflow'
            ],
            es: [
                'Dominar técnicas avanzadas de esculpido en ZBrush',
                'Crear una recreación fiel de un personaje de un juego existente',
                'Integrar animaciones de Mixamo con modelos de personajes personalizados',
                'Desarrollar habilidades en rigging de personajes y flujo de trabajo de animación'
            ]
        }
    },
    {
        id: 'leblanc',
        title: { en: 'Leblanc Cafe Diorama', es: 'Diorama de la Cafetería Leblanc' },
        category: { en: '3D Modeling', es: 'Modelado 3D' },
        tags: ['3D Art'],
        description: {
            en: 'Diorama of the Leblanc cafe from the Persona 5 Royal video game. 3D modeled and textured using materials from the Blender Kit website. This environment showcases detailed prop modeling, lighting, and composition skills.',
            es: 'Diorama del café Leblanc del videojuego Persona 5 Royal. Modelado en 3D y texturizado haciendo uso de materiales de la web Blender Kit. Este entorno muestra habilidades de modelado de props detallado, iluminación y composición.'
        },
        images: ['https://imgur.com/fhDMhR5.jpg', 'https://imgur.com/WvguvyV.jpg'],
        tools: ['Blender 4.0', 'BlenderKit', 'Substance Painter'],
        objectives: {
            en: [
                'Recreate a recognizable location from a popular video game',
                'Practice detailed prop modeling and environmental storytelling',
                'Master lighting techniques to create mood and atmosphere',
                'Utilize material libraries effectively for texturing workflows'
            ],
            es: [
                'Recrear una ubicación reconocible de un videojuego popular',
                'Practicar el modelado detallado de props y la narrativa ambiental',
                'Dominar técnicas de iluminación para crear ambiente y estado de ánimo',
                'Utilizar bibliotecas de materiales de manera efectiva para flujos de trabajo de texturizado'
            ]
        }
    },
    {
        id: 'vphi3d',
        title: {
            en: 'Virtual Production in Unreal Engine',
            es: 'Virtual Production en Unreal Engine'
        },
        category: {
            en: 'Virtual Production',
            es: 'Virtual Production'
        },
        tags: ['3D Art', 'Virtual Production', 'Unreal Engine'],  // Debe coincidir con categorías existentes
        description: {
            en: 'Your detailed description here...',
            es: 'Tu descripción detallada aquí...'
        },
        images: [
            'https://imgur.com/242q1wa.jpg'
        ],
        tools: ['Blender 5.0', 'Unreal Engine 5.4'],
        objectives: {
            en: [
                'Create a virtual production in Unreal Engine that can be rendered in real time and projected in a virtual production studio.',
                'Objective 2 in English'
            ],
            es: [
                'Crear una virtual production en unreal Engine, capaz de ser renderizada en tiempo real y proyectada en un estudio de virtual productions.',
                'Objetivo 2 en Español'
            ]
        }
    }
];

const skills = {
    programming: {
        title: { en: 'Programming', es: 'Programación' },
        items: ['C#', 'Python']
    },
    engines: {
        title: { en: 'Game Engines', es: 'Motores de Juego' },
        items: ['Unity', 'Unreal Engine', 'RenPy', 'Twine']
    },
    creative: {
        title: { en: 'Creative Tools', es: 'Herramientas Creativas' },
        items: ['ZBrush', 'Blender', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'TouchDesigner', 'Audacity', 'Reaper']
    },
    languages: {
        title: { en: 'Languages', es: 'Idiomas' },
        items: { en: ['Spanish (Native)', 'English (Advanced)'], es: ['Español (Nativo)', 'Inglés (Avanzado)'] }
    }
};

const certifications = [
    {
        id: 'meta_spark',
        title: { en: 'Meta Spark AR Certification', es: 'Certificación Meta Spark AR' },
        issuer: { en: 'CRTIC', es: 'CRTIC' },
        date: { en: 'October 2023', es: 'Octubre 2023' },
        icon: '🔥',
        pdfPath: 'assets/Certifications/Meta_Spark_AR_CRTIC.pdf'
    }
];

// ===== TRANSLATIONS - ORGANIZED BY SECTIONS =====
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

// HELPER FUNCTION: Get translation
function getTranslation(key) {
    return translations[currentLang][key] || key;
}

// State
let currentLang = 'en';
const carouselStates = {};
const galleryCarouselStates = {};
let activeFilter = 'all';
let activeGalleryFilter = 'all';

// Hero Carousel State
let heroCurrentIndex = 0;
let heroInterval = null;

const carouselIntervals = {};
const galleryCarouselIntervals = {};

// Initialize
function init() {
    renderHeroCarousel();
    renderProjects();
    renderGallery();
    renderSkills();
    renderCertifications();
    setupEventListeners();
    updateLanguage();
    startHeroAutoplay();
}

// ===== HERO CAROUSEL FUNCTIONS - CORREGIDO =====
function renderHeroCarousel() {
    const track = document.getElementById('heroCarouselTrack');
    const dots = document.getElementById('heroCarouselDots');

    if (!track) return;

    // Usar el array heroCarouselData para generar los slides
    track.innerHTML = heroCarouselData.map(item => `
        <div class="hero-carousel-slide">
            <img src="${item.image}" alt="${item.title}" class="hero-carousel-image" 
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzRBOEU0MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhlcm8gSW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg=='">
        </div>
    `).join('');

    // Dots para navegación entre slides principales
    dots.innerHTML = heroCarouselData.map((_, i) =>
        `<span class="hero-carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToHeroMainSlide(${i})"></span>`
    ).join('');

    updateHeroOverlay();
}

function goToHeroMainSlide(index) {
    heroCurrentIndex = index;
    updateHeroMainCarousel();
    resetHeroAutoplay();
}

function updateHeroMainCarousel() {
    const track = document.getElementById('heroCarouselTrack');
    if (track) {
        track.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
    }
    
    // Actualizar dots
    document.querySelectorAll('.hero-carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === heroCurrentIndex);
    });
    
    updateHeroOverlay();
}

function moveHeroMain(dir) {
    heroCurrentIndex = (heroCurrentIndex + dir + heroCarouselData.length) % heroCarouselData.length;
    updateHeroMainCarousel();
    resetHeroAutoplay();
}

function updateHeroOverlay() {
    const currentItem = heroCarouselData[heroCurrentIndex];
    const titleElement = document.getElementById('heroOverlayTitle');
    const techElement = document.getElementById('heroOverlayTech');
    
    if (titleElement && techElement && currentItem) {
        titleElement.textContent = currentItem.title;
        techElement.textContent = currentItem.tags.join(' • ');
    }
}

// Autoplay functions
function startHeroAutoplay() {
    stopHeroAutoplay();
    heroInterval = setInterval(() => moveHeroMain(1), 5000);
}

function stopHeroAutoplay() {
    if (heroInterval) {
        clearInterval(heroInterval);
        heroInterval = null;
    }
}

function resetHeroAutoplay() {
    stopHeroAutoplay();
    startHeroAutoplay();
}

// Filter Projects
function filterProjects(filter) {
    activeFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    // Filter projects
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.tags.includes(filter));
    
    renderProjects(filteredProjects);
}

// Filter Gallery
function filterGallery(filter) {
    activeGalleryFilter = filter;
    
    // Update active button
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.galleryFilter === filter);
    });
    
    // Filter gallery items
    const filteredGallery = filter === 'all' 
        ? gallery 
        : gallery.filter(item => item.tags.includes(filter));
    
    renderGallery(filteredGallery);
}

// Render Functions
function renderProjects(projectsToRender = projects) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projectsToRender.map(project => {
        carouselStates[project.id] = 0;
        const projectTrans = project;

        return `
            <div class="project-card" data-project="${project.id}">
                <div class="project-carousel">
                    <div class="carousel-track" id="carousel-${project.id}">
                        ${project.images.map(img => `
                            <img src="${img}" alt="${projectTrans.title}" class="carousel-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27250%27%3E%3Crect width=%27400%27 height=%27250%27 fill=%27%234A90E2%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dy=%27.3em%27%3E${projectTrans.title}%3C/text%3E%3C/svg%3E'">
                        `).join('')}
                    </div>
                    ${project.images.length > 1 ? `
                        <button class="carousel-btn prev" onclick="moveCarousel('${project.id}', -1)">‹</button>
                        <button class="carousel-btn next" onclick="moveCarousel('${project.id}', 1)">›</button>
                        <div class="carousel-dots">
                            ${project.images.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide('${project.id}', ${i})"></span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${projectTrans.title}</h3>
                    </div>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <p class="project-description">${projectTrans.description[currentLang]}</p>
                    <a href="project-details.html?id=${project.id}" class="btn btn-secondary">${getTranslation('btn_learn_more')}</a>
                </div>
            </div>
        `;
    }).join('');
    
    projectsToRender.forEach(project => {
        if (project.images.length > 1) {
            startCarouselAutoplay(project.id);
        }
    });
}

function renderGallery(galleryToRender = gallery) {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = galleryToRender.map((item, index) => {
        const title = item.title[currentLang];
        const category = item.category[currentLang];
        const isVideo = item.images[0].endsWith('.mp4');

        return `
    <div class="gallery-item" onclick="openGalleryModal('${item.id}')">
        ${isVideo ?
            `<video autoplay loop muted class="gallery-image">
                <source src="${item.images[0]}" type="video/mp4">
            </video>` :
            `<img src="${item.images[0]}" alt="${title}" class="gallery-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27300%27%3E%3Crect width=%27400%27 height=%27300%27 fill=%27%236C5CE7%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dy=%27.3em%27%3E${title}%3C/text%3E%3C/svg%3E'">`
        }
        <div class="gallery-overlay">
            <h3>${title}</h3>
            <p>${category}</p>
        </div>
    </div>
`;
    }).join('');
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = Object.entries(skills).map(([key, category]) => {
        const items = Array.isArray(category.items) ? category.items : category.items[currentLang];
        const title = category.title[currentLang];

        return `
            <div class="skill-category">
                <h3>${title}</h3>
                <div class="skill-list">
                    ${items.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderCertifications() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;

    grid.innerHTML = certifications.map(cert => {
        const title = cert.title[currentLang] || cert.title.en;
        const issuer = cert.issuer[currentLang] || cert.issuer.en;
        const date = cert.date[currentLang] || cert.date.en;

        return `
            <div class="achievement-card" onclick="openPdfModal('${cert.pdfPath}')">
                <div class="achievement-icon">${cert.icon}</div>
                <h3>${title}</h3>
                <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 4px;">${issuer}</p>
                <p style="color: var(--primary); font-weight: 500; font-size: 13px;">${date}</p>
            </div>
        `;
    }).join('');
}

// Carousel Functions
function moveCarousel(projectId, direction) {
    const project = projects.find(p => p.id === projectId);

    carouselStates[projectId] = (carouselStates[projectId] + direction + project.images.length) % project.images.length;
    updateCarousel(projectId);
    
    if (carouselIntervals[projectId]) {
        startCarouselAutoplay(projectId);
    }
}

function goToSlide(projectId, index) {
    carouselStates[projectId] = index;
    updateCarousel(projectId);
    
    if (carouselIntervals[projectId]) {
        startCarouselAutoplay(projectId);
    }
}

function updateCarousel(projectId) {
    const track = document.getElementById(`carousel-${projectId}`);
    const dots = track.parentElement.querySelectorAll('.carousel-dot');
    track.style.transform = `translateX(-${carouselStates[projectId] * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselStates[projectId]);
    });
}

function startCarouselAutoplay(projectId) {
    stopCarouselAutoplay(projectId);
    carouselIntervals[projectId] = setInterval(() => {
        moveCarousel(projectId, 1);
    }, 5000);
}

function stopCarouselAutoplay(projectId) {
    if (carouselIntervals[projectId]) {
        clearInterval(carouselIntervals[projectId]);
    }
}

// Gallery Carousel Functions
function moveGalleryCarousel(galleryId, direction) {
    const item = gallery.find(g => g.id === galleryId);

    galleryCarouselStates[galleryId] = (galleryCarouselStates[galleryId] + direction + item.images.length) % item.images.length;
    updateGalleryCarousel(galleryId);
}

function goToGallerySlide(galleryId, index) {
    galleryCarouselStates[galleryId] = index;
    updateGalleryCarousel(galleryId);
}

function updateGalleryCarousel(galleryId) {
    const track = document.getElementById(`gallery-carousel-${galleryId}`);
    const dots = track.parentElement.querySelectorAll('.carousel-dot');
    track.style.transform = `translateX(-${galleryCarouselStates[galleryId] * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === galleryCarouselStates[galleryId]);
    });
}

// Gallery Modal Functions
function openGalleryModal(galleryId) {
    const item = gallery.find(g => g.id === galleryId);
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');

    galleryCarouselStates[galleryId] = 0;

    const title = item.title[currentLang];
    const category = item.category[currentLang];
    const description = item.description[currentLang];

    body.innerHTML = `
        <div class="gallery-modal-layout">
            <div class="gallery-modal-header">
                <h2>${title}</h2>
                <p>${category}</p>
            </div>
            
            <div class="gallery-modal-carousel">
                <div class="carousel-track" id="gallery-carousel-${galleryId}" style="height: 100%;">
                    ${item.images.map(img => {
        const isVideo = img.endsWith('.mp4');
        return isVideo ?
            `<video autoplay loop muted class="carousel-image" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px; background: #f0f0f0;">
                                <source src="${img}" type="video/mp4">
                            </video>` :
            `<img src="${img}" alt="${title}" class="carousel-image" style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px; background: #f0f0f0;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27800%27 height=%27400%27%3E%3Crect width=%27800%27 height=%27400%27 fill=%27%236C5CE7%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2732%27 fill=%27white%27 text-anchor=%27middle%27 dy=%27.3em%27%3E${title}%3C/text%3E%3C/svg%3E'">`
    }).join('')}
                </div>
                ${item.images.length > 1 ? `
                    <button class="carousel-btn prev" onclick="moveGalleryCarousel('${galleryId}', -1)">‹</button>
                    <button class="carousel-btn next" onclick="moveGalleryCarousel('${galleryId}', 1)">›</button>
                    <div class="carousel-dots">
                        ${item.images.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToGallerySlide('${galleryId}', ${i})"></span>`).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="gallery-modal-content">
                <div class="gallery-modal-description">
                    <h3>${getTranslation('gallery_description')}</h3>
                    <p>${description}</p>
                </div>
                
                <div class="gallery-modal-details">
                    <div class="gallery-modal-tools">
                        <h3>${getTranslation('gallery_tools')}</h3>
                        <div class="gallery-modal-tools-list">
                            ${item.tools.map(tool => `<span class="gallery-modal-tool">${tool}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="gallery-modal-objectives">
                        <h3>${getTranslation('objectives')}</h3>
                        <ul>
                            ${item.objectives[currentLang].map(objective => `<li>${objective}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    Object.keys(modalCarouselIntervals).forEach(projectId => {
        stopModalCarouselAutoplay(projectId);
    });
}

// PDF Modal Functions
function openPdfModal(pdfPath) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfViewer');
    iframe.src = pdfPath;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfViewer');
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
}

// Language Toggle
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

    // Re-render sections
    updateHeroOverlay();
    renderProjects();
    renderGallery();
    renderSkills();
    renderCertifications();
}

// Event Listeners
function setupEventListeners() {
    // Hero carousel controls
    document.getElementById('heroCarouselPrev').addEventListener('click', () => moveHeroMain(-1));
    document.getElementById('heroCarouselNext').addEventListener('click', () => moveHeroMain(1));

    // Pause autoplay on hover
    const heroCarousel = document.querySelector('.hero-carousel');
    heroCarousel.addEventListener('mouseenter', stopHeroAutoplay);
    heroCarousel.addEventListener('mouseleave', startHeroAutoplay);

    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);

    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mainNav').classList.toggle('active');
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProjects(btn.dataset.filter);
        });
    });

    // Gallery filter buttons
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterGallery(btn.dataset.galleryFilter);
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.getElementById('mainNav').classList.remove('active');
            }
        });
    });

    // PDF Modal close
    document.getElementById('pdfModalClose').addEventListener('click', closePdfModal);
    document.getElementById('pdfModal').addEventListener('click', (e) => {
        if (e.target.id === 'pdfModal') closePdfModal();
    });

    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Active nav indicator
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    init();
    updateLanguageButton();
});