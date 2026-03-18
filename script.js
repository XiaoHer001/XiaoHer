/**
 * Xiaoher Portfolio - Main Script
 * Integrated Features: Translations, Theme Toggle, Animations, Modal, Image Protection, Email Copy
 */

// ================= 1. TRANSLATIONS CONFIGURATION =================
const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_skills: "Skills",
        nav_resume: "Resume",
        nav_certs: "Awards",
        nav_projects: "Projects",
        nav_contact: "Contact",
        btn_works: "My Works",
        lang_btn: "CN",

        // Hero Section
        hero_title: "Hi, I'm Xiaoher",
        hero_subtitle: "Unity Developer specializing in VR/AR & Interactive Simulation",
        hero_desc: "Graduated in 2024 from Jilin Animation Institute (VR Technology). Over 1 year of enterprise Unity experience. Focusing on Virtual Simulation, VR/AR, and HCI projects.",
        contact_btn: "Contact Me",

        // Skills Section
        skills_title: "Professional Skills",
        cat_unity: "Unity Engine",
        skill_scripting: "Unity Scripting (C#)",
        skill_profiling: "Profiling / Optimization",
        skill_interaction: "Plugin / Interaction Dev",
        cat_code: "Programming",
        skill_csharp: "C# / Architecture",
        skill_algo: "Data Structures / Algorithms",
        cat_xr: "XR Technology",
        skill_vrar: "VR / AR Development",
        skill_device: "VR Device Adaptation",
        cat_hci: "HCI & Interaction",
        skill_leap: "Leap Motion Gestures",
        skill_arduino: "Arduino / Sensors",
        cat_ta: "Tech Art (TA)",
        skill_shader: "Shader / Post-processing",
        skill_anim: "Animation / Rendering",
        cat_front: "Frontend / Mini Program",
        skill_wechat: "WeChat Mini Program / XR Frame",

        // Resume Section
        resume_title: "Experience",
        header_work: "Work Experience",
        header_edu: "Education",
        header_achieve: "Achievements & Community",

        // Work Entries
        job3_title: "Unity Developer",
        job3_comp: "Mingyang Zhuoyue (Shenyang) Technology Co., Ltd.",
        job2_title: "Unity Engineer",
        job2_comp: "Jilin Daodongjiang Technology Co., Ltd.",
        job1_title: "Unity VR Intern",
        job1_comp: "FAW-Volkswagen (Changchun)",

        // Education Entries
        edu_degree: "Virtual Reality Technology (Bachelor)",
        edu_school: "Jilin Animation Institute",
        edu_desc: "GPA: 3.94/4.00 (Rank 3/61)<br>Awards: Outstanding Graduate, 1st Prize in National VR Competition (NCVR).",

        // Achievements List (HTML allowed)
        achieve_list_html: "<li><strong>Sharing:</strong> Published 44 Unity tutorials (325k+ views), open-sourced multiple projects.</li><li><strong>Service:</strong> Completed 80+ technical consulting orders, resolved 135+ issues.</li><li><strong>Networking:</strong> Active in Unity official community and industry forums.</li>",

        // Certificates Section (Polished English)
        certs_title: "Certificates & Honors",
        cert1_title: "Automotive Vision 3D Visualization System",
        cert1_desc: "Computer Software Copyright Registration Certificate",
        cert2_title: "Traffic Sign Science Popularization System",
        cert2_desc: "Computer Software Copyright Registration Certificate",
        cert3_title: "Automotive Front Beam Inspection Training System",
        cert3_desc: "University-level Outstanding Graduation Project",
        cert4_title: "Outstanding Graduate",
        cert4_desc: "Recipient of multiple 2nd and 3rd Class University Scholarships",
        cert5_title: "VR Building Blasting Training",
        cert5_desc: "National 1st Prize - 6th China Virtual Reality Competition (NCVR)",
        cert6_title: "AR Medical Treatise Interaction",
        cert6_desc: "Provincial Prize - 2023 China Collegiate Computing Contest",

        // Projects Section (Polished English)
        projects_title: "Selected Projects",
        project1_title: "Automotive Visualization System",
        project1_desc: "Unity3D-based car visualizer with multiple configurations and high-performance optimization.",
        project2_title: "VR History Exhibition Hall",
        project2_desc: "High-fidelity modeling, baked lighting, and immersive VR interaction.",
        project3_title: "Traffic Sign Quiz System",
        project3_desc: "Educational simulation system with interactive quizzes and data tracking.",
        project4_title: "Xiaoyudot AI Chat",
        project4_desc: "Integrated speech recognition and AI APIs to enable natural language interaction via text and voice.",
        project5_title: "Electronic Signature Wall",
        project5_desc: "Interactive system allowing digital signatures overlay, server upload, and real-time scanning.",
        project6_title: "Psychological Sandplay System",
        project6_desc: "Interactive 3D sandbox with save/load functionality and automated psychological report generation.",

        // Contact Section
        contact_title: "Contact Me",
        contact_intro: "Feel free to reach out for technical exchange or collaboration."
    },
    zh: {
        // Navigation
        nav_about: "关于我",
        nav_skills: "技能栈",
        nav_resume: "履历",
        nav_certs: "荣誉证书",
        nav_projects: "作品",
        nav_contact: "联系",
        btn_works: "查看作品",
        lang_btn: "EN",

        // Hero Section
        hero_title: "你好，我是小贺儿",
        hero_subtitle: "专注于 VR/AR 与交互仿真开发的 Unity 工程师",
        hero_desc: "2024年毕业于吉林动画学院虚拟现实技术专业。拥有1+年Unity企业项目开发经验。专注于虚拟仿真、VR/AR及人机交互类项目的开发。",
        contact_btn: "联系我",

        // Skills Section
        skills_title: "专业技能",
        cat_unity: "Unity 引擎应用",
        skill_scripting: "Unity 脚本开发 (C#)",
        skill_profiling: "引擎调优 / 性能分析",
        skill_interaction: "插件 / 交互开发",
        cat_code: "编程与架构",
        skill_csharp: "C# 编程 / 架构设计",
        skill_algo: "数据结构 / 算法基础",
        cat_xr: "XR 技术实践",
        skill_vrar: "VR / AR 项目开发",
        skill_device: "VR 设备适配调试",
        cat_hci: "人机交互",
        skill_leap: "Leap Motion 手势",
        skill_arduino: "Arduino / 传感器控制",
        cat_ta: "技术美术 (TA)",
        skill_shader: "Shader / 后处理",
        skill_anim: "动画控制 / 图像渲染",
        cat_front: "前端与小程序",
        skill_wechat: "微信小程序 / XR Frame",

        // Resume Section
        resume_title: "经历",
        header_work: "工作经历",
        header_edu: "教育背景",
        header_achieve: "其他成就 & 社区贡献",

        // Work Entries
        job3_title: "Unity 程序开发师",
        job3_comp: "铭扬卓越（沈阳）科技有限公司",
        job2_title: "U3D 开发工程师",
        job2_comp: "吉林省道东江科技有限公司",
        job1_title: "U3D VR开发实习生",
        job1_comp: "一汽大众汽车有限公司（长春）",

        // Education Entries
        edu_degree: "虚拟现实技术 (本科)",
        edu_school: "吉林动画学院",
        edu_desc: "学分绩点：3.94 / 4.00 (排名 3/61)<br>荣誉：优秀毕业生、优秀毕业设计<br>奖项：第六届中国虚拟现实大赛国家级一等奖。",

        // Achievements List
        achieve_list_html: "<li><strong>技术分享：</strong>发布 Unity 教程视频 44 个 (32.5万+ 播放量)，整理 PPT 20篇及开源源码。</li><li><strong>技术服务：</strong>完成 80+ 单技术指导与项目代做，解决问题 135 次。</li><li><strong>行业交流：</strong>活跃于 Unity 官方社区，与北上广深同行及高校教师保持技术交流。</li>",

        // Certificates Section
        certs_title: "证书与荣誉",
        cert1_title: "汽车视界三维可视化展示系统",
        cert1_desc: "计算机软件著作权登记证书",
        cert2_title: "交通标识科普问答系统",
        cert2_desc: "计算机软件著作权登记证书",
        cert3_title: "基于 Unity 的汽车前束检测培训系统",
        cert3_desc: "校级优秀毕业设计",
        cert4_title: "优秀毕业生",
        cert4_desc: "多次获得校二、三等奖学金",
        cert5_title: "VR建筑爆破与安全培训",
        cert5_desc: "2023第六届中国虚拟现实大赛全国总决赛",
        cert6_title: "AR 伤寒杂病论",
        cert6_desc: "2023中国大学生计算机设计大赛吉林省级赛",

        // Projects Section
        projects_title: "精选作品",
        project1_title: "汽车视界三维可视化系统",
        project1_desc: "基于 Unity3D 开发汽车视界展示项目，支持多种配置选择及极致性能优化。",
        project2_title: "VR党史主题展馆",
        project2_desc: "高精度建模与烘焙光照，沉浸式 VR 互动体验。",
        project3_title: "交通标识科普问答系统",
        project3_desc: "教育类仿真系统，包含互动问答逻辑与数据统计。",
        project4_title: "与小雨点的AI聊天系统",
        project4_desc: "用于自然语言的集成语音识别和 AI API 参与文本和语音对话。",
        project5_title: "电子签名墙互动平台",
        project5_desc: "在屏幕上写下签名并将其叠加在卡上，上传到服务器进行扫描和下载。",
        project6_title: "心理沙盘互动系统",
        project6_desc: "点击屏幕放置沙盘工具，可以加载和保存沙盘场景，导出心理报告。",

        // Contact Section
        contact_title: "联系我",
        contact_intro: "随时欢迎技术交流或项目合作。"
    }
};


// ================= 2. LANGUAGE TOGGLE LOGIC =================
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';

    // Update button text
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = translations[currentLang]['lang_btn'];
    }

    // Update text content
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[currentLang][key]) {
            // Handle HTML content for lists
            if (key === 'achieve_list_html' || key === 'edu_desc') {
                el.innerHTML = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);


// ================= 3. THEME TOGGLE LOGIC =================
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;
const body = document.body;

// Check local storage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Toggle Theme Function
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        // Default is dark (null/empty), so if current is light, switch to dark, else light
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Update Icon based on theme
function updateThemeIcon(theme) {
    if (themeIcon) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}


// ================= 4. PROJECT CARD INTERACTION =================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-link');
        if (url) window.open(url, '_blank');
    });
});


// ================= 5. SKILLS PROGRESS BAR ANIMATION =================
const observerOptions = { threshold: 0.2 };

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                void bar.offsetWidth; // Force reflow
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = targetWidth;
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


// ================= 6. CERTIFICATE MODAL & IMAGE PROTECTION =================

// Global Variables for Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("close-modal")[0];
const overlay = document.querySelector(".protection-overlay");

// Function to Open Modal (Called from HTML onclick)
function openModal(imageSrc) {
    if (modal && modalImg) {
        modal.style.display = "flex";
        // CSS handles centering
        modalImg.src = imageSrc;
        document.body.style.overflow = "hidden"; // Disable scroll
    }
}

// Function to Close Modal
function closeModal() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scroll
    }
}

// Event Listeners for Closing
if (closeBtn) closeBtn.onclick = () => closeModal();
if (overlay) overlay.onclick = () => closeModal();
if (modal) {
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    }
}

// Close on Escape Key
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") closeModal();
});


// ================= 7. SECURITY: DISABLE RIGHT CLICK & DRAG =================

document.addEventListener('contextmenu', event => {
    // Block right-click on images, modal overlay, or protected classes
    if (event.target.tagName === 'IMG' ||
        event.target.classList.contains('protected-img') ||
        event.target.classList.contains('protection-overlay') ||
        event.target.closest('.cert-img-wrapper')) {

        event.preventDefault();
        return false;
    }
});

document.addEventListener('dragstart', event => {
    // Disable dragging images
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
        return false;
    }
});


// ================= 8. SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ================= 9. COPY EMAIL LOGIC =================

function copyEmail(element) {
    const email = element.getAttribute('data-copy-text');

    // 使用 Clipboard API
    navigator.clipboard.writeText(email).then(() => {
        // 根据当前语言显示提示
        const msg = currentLang === 'zh' ? '邮箱已复制！' : 'Email Copied!';

        // 视觉反馈：文字变色
        const originalText = element.innerText;
        element.style.color = "#4caf50"; // 变绿
        element.innerText = msg; // 临时改变文字提示

        alert(msg + "\n" + email); // 弹窗确认

        // 2秒后恢复原样
        setTimeout(() => {
            element.style.color = ""; // 恢复原来的颜色
            element.innerText = originalText; // 恢复邮箱地址显示
        }, 2000);
    }).catch(err => {
        console.error('Copy failed', err);
        // 如果自动复制失败（极少数旧浏览器），提示手动复制
        prompt("请手动复制邮箱 / Please copy manually:", email);
    });
}