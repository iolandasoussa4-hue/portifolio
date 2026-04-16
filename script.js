// ===== DADOS DOS PROJETOS =====
const projetosData = [
    {
        titulo: "📚 Plataforma Educacional",
        descricao: "Sistema de gestão de aprendizagem com foco em acessibilidade e gamificação para alunos do ensino fundamental.",
        link: "#"
    },
    {
        titulo: "🎯 Jogo Pedagógico",
        descricao: "Jogo interativo desenvolvido em JavaScript para auxiliar no ensino de matemática de forma lúdica e divertida.",
        link: "#"
    },
];

// ===== RENDERIZAR PROJETOS =====
function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    if (!container) return;
    
    container.innerHTML = projetosData.map(projeto => `
        <div class="projeto">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn-projeto" target="_blank">Ver projeto →</a>
        </div>
    `).join('');
}

// ===== MENU HAMBÚRGUER (agora no header) =====
function initMenuHamburguer() {
    const menuBtn = document.getElementById("menuHamburguer");
    const navMenu = document.getElementById("navMenu");
    const overlay = document.getElementById("navOverlay");
    const body = document.body;
    
    function toggleMenu() {
        navMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
        
        // Mudar ícone do menu
        const icon = menuBtn.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    }
    
    function closeMenu() {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "";
        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
    
    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);
    
    // Fechar menu ao clicar em um link
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
            closeMenu();
        }
    });
}

// ===== SCROLL SUAVE =====
function initScrollSuave() {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== DETECTAR SEÇÃO ATIVA =====
function initActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== ANIMAÇÃO SCROLL REVEAL =====
function initScrollReveal() {
    const elementos = document.querySelectorAll('.projeto, #sobre');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    initMenuHamburguer();
    initScrollSuave();
    initActiveLink();
    initScrollReveal();
});