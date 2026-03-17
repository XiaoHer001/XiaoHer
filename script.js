// =================== 多语言翻译 ===================
const translations = {
    en: {
        nav_about: "About Me", nav_projects: "Projects", nav_tech: "Highlights", nav_contact: "Contact",
        about_title: "About Me", about_text: "Hello! I am Xiaoher, a Unity developer specializing in VR/AR and interactive simulations. Graduated in 2024 from Jilin Animation Institute, Virtual Reality Technology.",
        projects_title: "Projects", project1_title: "Automotive Visualization System", project1_desc: "Unity3D-based car visualization project supporting multiple options and optimized performance.",
        project2_title: "VR Party History Pavilion", project2_desc: "VR exhibition project with high-fidelity modeling and immersive interactive content.",
        project3_title: "Traffic Sign Quiz System", project3_desc: "Educational system covering common traffic signs with interactive quizzes.",
        project4_title: "Xiaoyudot AI Chat System", project4_desc: "AI chat system for text and voice interaction with natural responses.",
        tech_title: "Highlights", tech_desc1: "Immersive VR showcase with interactive demos.", tech_desc2: "High-fidelity modeling and realistic lighting.", tech_desc3: "Cross-platform compatibility for Unity projects.",
        certificates_title: "Certificates & Awards",
        contact_title: "Contact", contact_text: "Email: xhrvrstudio@163.com", contact_btn: "Contact Xiaoher", share_btn: "Share Page"
    },
    zh: {
        nav_about: "关于我", nav_projects: "作品展示", nav_tech: "亮点展示", nav_contact: "联系我",
        about_title: "关于我", about_text: "哈喽！我叫小贺儿，Unity开发者，专注于VR/AR和交互仿真。2024年毕业于吉林动画学院虚拟现实技术专业。",
        projects_title: "作品展示", project1_title: "汽车视界三维可视化系统", project1_desc: "基于 Unity3D 开发汽车视界展示项目，支持多种选择及性能优化。",
        project2_title: "VR党史主题展馆", project2_desc: "VR展馆项目，高精度建模，沉浸式互动内容。",
        project3_title: "交通标识科普问答系统", project3_desc: "涵盖常见交通标识的互动学习系统。",
        project4_title: "与小雨点的AI聊天系统", project4_desc: "AI聊天系统，支持文本和语音自然互动。",
        tech_title: "亮点展示", tech_desc1: "沉浸式VR展示与互动演示。", tech_desc2: "高精度建模与真实光照。", tech_desc3: "Unity项目跨平台兼容。",
        certificates_title: "证书与荣誉",
        contact_title: "联系我", contact_text: "邮箱: xhrvrstudio@163.com", contact_btn: "联系小贺儿", share_btn: "分享页面"
    }
};

let currentLang = 'en';
function applyTranslations() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? '中' : 'EN';
}
applyTranslations();
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    applyTranslations();
});

// 图片禁止右键/拖拽
document.addEventListener('contextmenu', e => e.preventDefault());
document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', false));

// 项目点击跳转
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => { const url = card.getAttribute('data-link'); if (url) window.open(url, '_blank'); });
});

// 轮播
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
function showSlide(i) { currentIndex = (i + slides.length) % slides.length; track.style.transform = `translateX(-${currentIndex * 100}%)`; updateDots(); }
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
setInterval(() => showSlide(currentIndex + 1), 5000);

// 轮播圆点
const carouselContainer = document.querySelector('.carousel');
const dotsContainer = document.createElement('div');
dotsContainer.className = 'carousel-dots';
carouselContainer.appendChild(dotsContainer);
slides.forEach((_, index) => { const dot = document.createElement('span'); dot.className = 'dot'; dot.addEventListener('click', () => showSlide(index)); dotsContainer.appendChild(dot); });
function updateDots() { const dots = document.querySelectorAll('.carousel-dots .dot'); dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex)); }
updateDots();