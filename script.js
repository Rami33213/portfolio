/* ============================================
   Rami Alsalameh Portfolio — Scripts
   ============================================ */

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.badge': 'Available for opportunities',
        'hero.greeting': "Hi, I'm",
        'hero.desc': 'Laravel Backend Developer & AI Integration Specialist. I build scalable APIs, intelligent microservices, and full-stack solutions that solve real-world problems.',
        'hero.cta1': 'View Projects',
        'hero.cta2': 'Get In Touch',
        'hero.status': 'Open to work',
        'stats.exp': 'Years Experience',
        'stats.projects': 'Projects Delivered',
        'stats.credits': 'Academic Credits',
        'stats.langs': 'Languages',
        'about.tag': 'About Me',
        'about.title': 'Who I Am',
        'about.p1': "I'm a Backend Developer and AI Integration Specialist from Damascus, Syria. Currently working at YaCode B.V. (Netherlands) building CRM systems with Laravel and integrating AI microservices via FastAPI.",
        'about.p2': 'Graduating from Arab International University with a B.Sc. in Artificial Intelligence & Software Engineering. I combine strong backend architecture skills with hands-on AI/ML experience — from computer vision and rPPG signal processing to NLP-powered learning platforms.',
        'about.p3': 'Former Head of IT & Media Office at AIU Student Union. Passionate about clean code, scalable systems, and building technology that makes a real impact.',
        'about.edu': 'Education',
        'about.eduVal': 'B.Sc. AI & Software Engineering — AIU',
        'about.loc': 'Location',
        'about.locVal': 'Damascus, Syria — Remote',
        'about.role': 'Current Role',
        'about.roleVal': 'Backend & AI Developer @ YaCode',
        'about.langs': 'Languages',
        'about.langsVal': 'Arabic · English B2 · German A2',
        'skills.tag': 'Expertise',
        'skills.title': 'Technical Skills',
        'skills.backend': 'Backend Development',
        'skills.ai': 'AI & Machine Learning',
        'skills.mobile': 'Mobile & Frontend',
        'skills.data': 'Database & Tools',
        'skills.arch': 'Architecture & Design',
        'projects.tag': 'Portfolio',
        'projects.title': 'Featured Projects',
        'projects.p1type': 'Pre-Graduation · AI Health',
        'projects.p1title': 'Smart Heart Health Monitoring System',
        'projects.p1desc': 'AI-powered cardiovascular health system with rPPG-based heart rate estimation, ECG signal analysis, real-time risk prediction, and multimodal AI pipeline combining computer vision, signal processing, and symptom-based inference.',
        'projects.p2type': 'Graduation Project · EdTech',
        'projects.p2title': 'AI-Powered IELTS Prep Platform',
        'projects.p2desc': 'Intelligent IELTS preparation platform with mobile app and web admin dashboard. NLP and speech processing for personalized study plans, automated skill assessment, and interactive exam preparation.',
        'projects.p3type': 'Senior Project · HR Tech',
        'projects.p3title': 'AI HR Management System',
        'projects.p3desc': 'Full-stack AI-powered HR platform with CV parsing, automated job matching, promotion prediction, and resignation forecasting using ML models. Led backend architecture with Laravel REST APIs and FastAPI microservices.',
        'projects.p4type': 'Mobile · Tamkeen',
        'projects.p4title': 'Ride-Hailing & E-Commerce Apps',
        'projects.p4desc': 'Built Uber-like ride-hailing app with real-time GPS tracking and OLX-style e-commerce platform. Advanced state management with Provider & GetX, modern responsive UI across devices.',
        'projects.code': 'Source Code',
        'exp.tag': 'Career',
        'exp.title': 'Work Experience',
        'exp.e1title': 'Laravel Backend Developer | AI Integrations',
        'exp.e1desc': 'Designing scalable backend services with Laravel, building RESTful APIs, CRM features, and workflow automation. Integrating AI models via FastAPI microservices with fine-tuning for domain-specific use cases.',
        'exp.e2title': 'AI Data Collection & Annotation Specialist',
        'exp.e2desc': 'Collected and validated large-scale datasets (images, videos) for AI training. Performed annotation, quality assurance, data cleaning, and preprocessing for machine learning applications.',
        'exp.e3title': 'Software Developer — Freelancer',
        'exp.e3company': 'Independent / Graduation Project',
        'exp.e3desc': 'Led development of AI-powered HR system as senior graduation project. Full-stack implementation with Laravel, REST APIs, ML models via FastAPI, and Flutter frontend integration.',
        'exp.e4title': 'Flutter Developer',
        'exp.e4desc': 'Developed ride-hailing and e-commerce mobile applications using Flutter with real-time location tracking, advanced state management, and modern responsive UI design.',
        'exp.e5title': 'Data Entry & Collection Assistant',
        'exp.e5desc': 'Collected, verified, and organized business and tourism data. Ensured data quality, consistency, and completeness across company databases and CMS.',
        'edu.title': 'Education',
        'edu.degree': 'B.Sc. Artificial Intelligence & Software Engineering',
        'edu.detail': 'Oct 2022 — Jun 2026 · 169 Credit Hours · Daraa, Syria',
        'edu.extra': 'Head of IT & Media Office — Student Union. Applied AI research in rPPG heart-rate estimation.',
        'cert.title': 'Certifications',
        'contact.tag': 'Contact',
        'contact.title': "Let's Work Together",
        'contact.sub': "Have a project in mind or want to collaborate? I'd love to hear from you.",
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.wa': 'Message me',
        'footer.rights': 'All rights reserved.',
        typed: [
            'Backend Developer',
            'AI Integration Specialist',
            'Laravel Expert',
            'FastAPI Developer',
            'Flutter Developer'
        ]
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'عني',
        'nav.skills': 'المهارات',
        'nav.projects': 'المشاريع',
        'nav.experience': 'الخبرات',
        'nav.contact': 'تواصل',
        'hero.badge': 'متاح لفرص العمل',
        'hero.greeting': 'مرحباً، أنا',
        'hero.desc': 'مطور باك إند Laravel ومتخصص دمج الذكاء الصنعي. أبني APIs قابلة للتوسع، خدمات مصغرة ذكية، وحلول متكاملة تحل مشاكل حقيقية.',
        'hero.cta1': 'شاهد المشاريع',
        'hero.cta2': 'تواصل معي',
        'hero.status': 'متاح للعمل',
        'stats.exp': 'سنوات خبرة',
        'stats.projects': 'مشاريع منجزة',
        'stats.credits': 'ساعات أكاديمية',
        'stats.langs': 'لغات',
        'about.tag': 'عني',
        'about.title': 'من أنا',
        'about.p1': 'مطور باك إند ومتخصص دمج الذكاء الصنعي من دمشق، سوريا. أعمل حالياً في شركة YaCode B.V. (هولندا) على بناء أنظمة CRM بـ Laravel ودمج خدمات AI عبر FastAPI.',
        'about.p2': 'أتخرج من الجامعة العربية الدولية بتخصص الذكاء الصنعي وهندسة البرمجيات. أجمع بين مهارات معمارية الباك إند وخبرة عملية في AI/ML — من رؤية الحاسوب ومعالجة إشارات rPPG إلى منصات تعليمية مدعومة بـ NLP.',
        'about.p3': 'رئيس مكتب IT والإعلام سابقاً في اتحاد طلاب AIU. شغوف بالكود النظيف والأنظمة القابلة للتوسع وبناء تقنية لها أثر حقيقي.',
        'about.edu': 'التعليم',
        'about.eduVal': 'بكالوريوس ذكاء صنعي وهندسة برمجيات — AIU',
        'about.loc': 'الموقع',
        'about.locVal': 'دمشق، سوريا — عن بُعد',
        'about.role': 'الدور الحالي',
        'about.roleVal': 'مطور باك إند وذكاء صنعي @ YaCode',
        'about.langs': 'اللغات',
        'about.langsVal': 'عربي · إنجليزي B2 · ألماني A2',
        'skills.tag': 'الخبرات',
        'skills.title': 'المهارات التقنية',
        'skills.backend': 'تطوير الباك إند',
        'skills.ai': 'الذكاء الصنعي والتعلم الآلي',
        'skills.mobile': 'الموبايل والفرونت إند',
        'skills.data': 'قواعد البيانات والأدوات',
        'skills.arch': 'المعمارية والتصميم',
        'projects.tag': 'الأعمال',
        'projects.title': 'المشاريع المميزة',
        'projects.p1type': 'ما قبل التخرج · صحة ذكية',
        'projects.p1title': 'نظام مراقبة صحة القلب الذكي',
        'projects.p1desc': 'نظام صحي قلبي مدعوم بالذكاء الصنعي مع تقدير نبض القلب عبر rPPG، تحليل إشارات ECG، التنبؤ بالمخاطر لحظياً، وخط أنابيب AI متعدد الوسائط يجمع رؤية الحاسوب ومعالجة الإشارات والاستدلال القائم على الأعراض.',
        'projects.p2type': 'مشروع تخرج · تعليم',
        'projects.p2title': 'منصة تحضير IELTS بالذكاء الصنعي',
        'projects.p2desc': 'منصة ذكية لتحضير IELTS مع تطبيق موبايل ولوحة تحكم ويب. NLP ومعالجة الصوت لخطط دراسة مخصصة وتقييم تلقائي للمهارات وتحضير تفاعلي للامتحان.',
        'projects.p3type': 'مشروع تخرج · موارد بشرية',
        'projects.p3title': 'نظام إدارة موارد بشرية بالذكاء الصنعي',
        'projects.p3desc': 'منصة HR مدعومة بالذكاء الصنعي مع تحليل السير الذاتية، مطابقة وظائف آلية، التنبؤ بالترقيات والاستقالات عبر نماذج ML. قدت معمارية الباك إند بـ Laravel REST APIs وخدمات FastAPI.',
        'projects.p4type': 'موبايل · تمكين',
        'projects.p4title': 'تطبيقات توصيل وتجارة إلكترونية',
        'projects.p4desc': 'بناء تطبيق توصيل مشابه لـ Uber مع تتبع GPS لحظي ومنصة تجارة إلكترونية بأسلوب OLX. إدارة حالة متقدمة بـ Provider و GetX وواجهات مستخدم عصرية متجاوبة.',
        'projects.code': 'عرض الكود',
        'exp.tag': 'المسيرة',
        'exp.title': 'الخبرات العملية',
        'exp.e1title': 'مطور Laravel باك إند | دمج الذكاء الصنعي',
        'exp.e1desc': 'تصميم خدمات باك إند قابلة للتوسع بـ Laravel، بناء RESTful APIs، ميزات CRM، وأتمتة سير العمل. دمج نماذج AI عبر خدمات FastAPI مع ضبط دقيق لحالات استخدام محددة.',
        'exp.e2title': 'متخصص جمع ووسم بيانات AI',
        'exp.e2desc': 'جمع والتحقق من مجموعات بيانات ضخمة (صور، فيديو) لتدريب AI. تنفيذ الوسم، ضمان الجودة، تنظيف البيانات والمعالجة المسبقة لتطبيقات التعلم الآلي.',
        'exp.e3title': 'مطور برمجيات — مستقل',
        'exp.e3company': 'مستقل / مشروع تخرج',
        'exp.e3desc': 'قيادة تطوير نظام HR مدعوم بالذكاء الصنعي كمشروع تخرج. تنفيذ متكامل بـ Laravel و REST APIs ونماذج ML عبر FastAPI ودمج واجهة Flutter.',
        'exp.e4title': 'مطور Flutter',
        'exp.e4desc': 'تطوير تطبيقات موبايل للتوصيل والتجارة الإلكترونية بـ Flutter مع تتبع موقع لحظي وإدارة حالة متقدمة وتصميم واجهات عصرية متجاوبة.',
        'exp.e5title': 'مساعد إدخال وجمع بيانات',
        'exp.e5desc': 'جمع والتحقق وتنظيم بيانات الأعمال والسياحة. ضمان جودة واتساق واكتمال البيانات عبر قواعد البيانات وأنظمة إدارة المحتوى.',
        'edu.title': 'التعليم',
        'edu.degree': 'بكالوريوس الذكاء الصنعي وهندسة البرمجيات',
        'edu.detail': 'أكتوبر 2022 — يونيو 2026 · 169 ساعة معتمدة · درعا، سوريا',
        'edu.extra': 'رئيس مكتب IT والإعلام — اتحاد الطلاب. بحث تطبيقي في تقدير نبض القلب عبر rPPG.',
        'cert.title': 'الشهادات',
        'contact.tag': 'تواصل',
        'contact.title': 'لنبدأ العمل معاً',
        'contact.sub': 'عندك مشروع أو بدك تتعاون؟ يسعدني أسمع منك.',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.wa': 'راسلني',
        'footer.rights': 'جميع الحقوق محفوظة.',
        typed: [
            'مطور باك إند',
            'متخصص دمج الذكاء الصنعي',
            'خبير Laravel',
            'مطور FastAPI',
            'مطور Flutter'
        ]
    }
};

const html = document.documentElement;
let currentLang = localStorage.getItem('lang') || 'en';
let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedTimeout;

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLang);
    initLoader();
    initHeader();
    initMobileNav();
    initScrollReveal();
    initCounters();
    initBackToTop();
    initActiveNav();
    startTyping();
});

// ========== Loader ==========
function initLoader() {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 600);
    });
    setTimeout(() => loader.classList.add('hidden'), 2500);
}

// ========== Theme ==========
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', saved);
    updateThemeIcon(saved);

    toggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========== Language ==========
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
    resetTyping();
});

function setLanguage(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('lang-label').textContent = lang === 'en' ? 'AR' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// ========== Typing Effect ==========
function startTyping() {
    const el = document.getElementById('typed-text');
    const words = translations[currentLang].typed;

    function type() {
        const word = words[typedIndex];
        if (!isDeleting) {
            el.textContent = word.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === word.length) {
                isDeleting = true;
                typedTimeout = setTimeout(type, 2000);
                return;
            }
            typedTimeout = setTimeout(type, 80);
        } else {
            el.textContent = word.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                typedIndex = (typedIndex + 1) % words.length;
                typedTimeout = setTimeout(type, 400);
                return;
            }
            typedTimeout = setTimeout(type, 40);
        }
    }

    type();
}

function resetTyping() {
    clearTimeout(typedTimeout);
    typedIndex = 0;
    charIndex = 0;
    isDeleting = false;
    document.getElementById('typed-text').textContent = '';
    startTyping();
}

// ========== Header Scroll ==========
function initHeader() {
    const header = document.getElementById('header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ========== Mobile Nav ==========
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        });
    });
}

// ========== Scroll Reveal ==========
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========== Counter Animation ==========
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const duration = 1500;
            const start = performance.now();

            function update(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = target;
            }

            requestAnimationFrame(update);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ========== Back to Top ==========
function initBackToTop() {
    const btn = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== Active Nav Link ==========
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}
