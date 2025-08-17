// Arquivo JavaScript Principal - Versiory

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initSmoothScrolling();
    initScrollAnimations();
    initFormHandling();
    initNavigation();
    initMobileMenu();
    initTypewriterEffect();
    initParallaxEffect();
    initLoadingScreen();
});

// Smooth Scrolling para navegação
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fixa
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animações baseadas no scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Elementos para animar no scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    // Adicionar classe animate-on-scroll aos elementos
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const elements = section.querySelectorAll('.vision-item, .value-item, .service-card, .contact-card');
        elements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    });
}

// Manipulação de formulários
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    const projectForm = document.querySelector('.project-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    if (projectForm) {
        const submitBtn = projectForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', handleProjectSubmit);
        }
    }
    
    // Validação em tempo real
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    showNotification('Mensagem enviada com sucesso!', 'success');
    
    // Limpar formulário
    e.target.reset();
}

function handleProjectSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    showNotification('Projeto enviado! Entraremos em contato em breve.', 'success');
    
    // Limpar formulário
    e.target.reset();
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo é obrigatório');
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Email inválido');
    } else {
        clearFieldError(field);
    }
}

function clearValidation(e) {
    clearFieldError(e.target);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#E91E63';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#E91E63';
}

function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Navegação ativa
function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
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

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.style.display = 'none';
    
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    navContainer.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Responsividade
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.classList.add('mobile');
        } else {
            menuToggle.style.display = 'none';
            navMenu.classList.remove('mobile', 'active');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
}

// Efeito Typewriter
function initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const spans = heroTitle.querySelectorAll('span');
    let currentSpan = 0;
    
    function typeWriter(span, text, index) {
        if (index < text.length) {
            span.textContent += text.charAt(index);
            setTimeout(() => typeWriter(span, text, index + 1), 100);
        }
    }
    
    spans.forEach((span, index) => {
        const text = span.textContent;
        span.textContent = '';
        
        setTimeout(() => {
            typeWriter(span, text, 0);
        }, index * 800);
    });
}

// Efeito Parallax
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Tela de carregamento
function initLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'loading-screen';
    loader.innerHTML = `
        <div class="loader">
            <div class="loader-logo">
                <svg width="60" height="60" viewBox="0 0 40 40">
                    <polygon points="10,5 15,15 25,10 30,20 20,25 15,35" fill="#4CAF50"/>
                    <polygon points="15,15 20,25 30,20 25,10" fill="#9C27B0"/>
                    <polygon points="25,10 30,20 35,15 30,5" fill="#2196F3"/>
                    <polygon points="30,20 35,15 40,25 35,30" fill="#FFC107"/>
                    <polygon points="20,25 25,35 35,30 30,20" fill="#00BCD4"/>
                </svg>
            </div>
            <div class="loader-text">Versiory</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    // Estilos para o loader
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }
        
        .loader {
            text-align: center;
        }
        
        .loader-logo {
            animation: rotate 2s linear infinite;
            margin-bottom: 20px;
        }
        
        .loader-text {
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        
        .loader-bar {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .loader-progress {
            height: 100%;
            background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);
            width: 0%;
            animation: loading 2s ease-in-out infinite;
        }
        
        @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
        }
    `;
    
    document.head.appendChild(loaderStyles);
    document.body.appendChild(loader);
    
    // Simular carregamento
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos para notificações
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ffffff;
            color: #333333;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left: 4px solid #4CAF50;
        }
        
        .notification-error {
            border-left: 4px solid #E91E63;
        }
        
        .notification-info {
            border-left: 4px solid #2196F3;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
            font-size: 16px;
        }
        
        .notification-close:hover {
            color: #333;
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        notificationStyles.id = 'notification-styles';
        document.head.appendChild(notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Configurar fechamento
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Utilitários
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event listeners globais
window.addEventListener('scroll', debounce(() => {
    // Atualizar navbar
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10));

// Funções globais para debug
window.versiory = {
    showNotification,
    startRain: () => window.rainEffect?.start(),
    stopRain: () => window.rainEffect?.stop(),
    nextSlide: () => window.projectCarousel?.nextSlide(),
    prevSlide: () => window.projectCarousel?.prevSlide()
}; 