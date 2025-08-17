// Carrossel Interativo
class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;
        
        this.init();
    }

    init() {
        // Configurar controles
        this.setupControls();
        
        // Configurar navegação por teclado
        this.setupKeyboard();
        
        // Configurar autoplay
        this.setupAutoplay();
        
        // Configurar touch/swipe
        this.setupTouch();
        
        // Mostrar slide inicial
        this.showSlide(0);
    }

    setupControls() {
        const prevBtn = this.container.querySelector('.carousel-btn.prev');
        const nextBtn = this.container.querySelector('.carousel-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    setupAutoplay() {
        // Autoplay a cada 5 segundos
        setInterval(() => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        }, 5000);
    }

    setupTouch() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    showSlide(index) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Remover classe active de todos os slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Adicionar classe active ao slide atual
        this.slides[index].classList.add('active');
        
        // Atualizar índice atual
        this.currentSlide = index;
        
        // Animar entrada do slide
        this.slides[index].style.animation = 'slideIn 0.5s ease-out';
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.showSlide(index);
        }
    }
}

// Inicializar carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.project-carousel');
    if (carouselContainer) {
        const carousel = new Carousel(carouselContainer);
        
        // Tornar carousel global para debug
        window.projectCarousel = carousel;
    }
    
    // Configurar interação com os cards de serviço
    const serviceItems = document.querySelectorAll('.service-item');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    
    serviceItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remover classe active de todos os itens
            serviceItems.forEach(service => service.classList.remove('active'));
            
            // Adicionar classe active ao item clicado
            item.classList.add('active');
            
            // Mostrar slide correspondente
            if (window.projectCarousel) {
                window.projectCarousel.goToSlide(index);
            }
        });
    });
    
    // Efeitos de hover nos slides
    carouselSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'scale(1.05)';
        });
        
        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'scale(1)';
        });
    });
});

// Funções para controle externo do carrossel
function nextCarouselSlide() {
    if (window.projectCarousel) {
        window.projectCarousel.nextSlide();
    }
}

function prevCarouselSlide() {
    if (window.projectCarousel) {
        window.projectCarousel.prevSlide();
    }
}

function goToCarouselSlide(index) {
    if (window.projectCarousel) {
        window.projectCarousel.goToSlide(index);
    }
} 