// Efeito de Chuva
class RainEffect {
  constructor() {
    this.container = document.getElementById('rain-container');
    this.isActive = false;
    this.raindrops = [];
    this.maxDrops = 100;
    this.animationId = null;
  }

  // Iniciar o efeito de chuva
  start() {
    if (this.isActive) return;

    this.isActive = true;
    this.container.classList.add('active');
    this.createRaindrops();
    this.animate();
  }

  // Parar o efeito de chuva
  stop() {
    if (!this.isActive) return;

    this.isActive = false;
    this.container.classList.remove('active');

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    // Limpar gotas existentes
    this.raindrops.forEach(drop => {
      if (drop.element && drop.element.parentNode) {
        drop.element.parentNode.removeChild(drop.element);
      }
    });
    this.raindrops = [];
  }

  // Criar gotas de chuva
  createRaindrops() {
    for (let i = 0; i < this.maxDrops; i++) {
      this.createDrop();
    }
  }

  // Criar uma gota individual
  createDrop() {
    const drop = document.createElement('div');
    drop.className = 'raindrop';

    // Posição aleatória
    const x = Math.random() * window.innerWidth;
    const y = -20 - Math.random() * 100; // Começa acima da tela

    // Tamanho aleatório
    const width = 1 + Math.random() * 2;
    const height = 15 + Math.random() * 25;

    // Velocidade aleatória
    const speed = 2 + Math.random() * 3;

    // Aplicar estilos
    drop.style.left = x + 'px';
    drop.style.top = y + 'px';
    drop.style.width = width + 'px';
    drop.style.height = height + 'px';

    // Adicionar ao container
    this.container.appendChild(drop);

    // Armazenar dados da gota
    this.raindrops.push({
      element: drop,
      x: x,
      y: y,
      speed: speed,
      width: width,
      height: height,
    });
  }

  // Animar as gotas
  animate() {
    if (!this.isActive) return;

    this.raindrops.forEach((drop, index) => {
      // Mover gota para baixo
      drop.y += drop.speed;

      // Aplicar nova posição
      drop.element.style.top = drop.y + 'px';

      // Remover gota se saiu da tela
      if (drop.y > window.innerHeight) {
        if (drop.element.parentNode) {
          drop.element.parentNode.removeChild(drop.element);
        }
        this.raindrops.splice(index, 1);
        this.createDrop(); // Criar nova gota
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  // Mudar intensidade da chuva
  setIntensity(level) {
    const levels = {
      light: 50,
      medium: 100,
      heavy: 150,
    };

    if (levels[level]) {
      this.maxDrops = levels[level];

      // Ajustar gotas existentes
      if (this.isActive) {
        this.stop();
        setTimeout(() => this.start(), 100);
      }
    }
  }

  // Mudar cor da chuva
  setColor(color) {
    const colors = {
      green: '#4CAF50',
      blue: '#2196F3',
      purple: '#9C27B0',
      pink: '#E91E63',
      yellow: '#FFC107',
    };

    if (colors[color]) {
      const style = document.createElement('style');
      style.textContent = `
                .raindrop {
                    background: linear-gradient(to bottom, transparent, ${colors[color]}) !important;
                }
            `;
      document.head.appendChild(style);
    }
  }
}

// Instância global do efeito de chuva
const rainEffect = new RainEffect();

// Funções para controle do efeito
function startRain() {
  rainEffect.start();
}

function stopRain() {
  rainEffect.stop();
}

function setRainIntensity(level) {
  rainEffect.setIntensity(level);
}

function setRainColor(color) {
  rainEffect.setColor(color);
}

// Ativar chuva em determinadas seções
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  // Observer para detectar quando uma seção está visível
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Ativar chuva na seção de produtos
          if (section.id === 'produtos') {
            setTimeout(() => {
              rainEffect.setColor('blue');
              rainEffect.setIntensity('medium');
              rainEffect.start();
            }, 500);
          }

          // Parar chuva em outras seções
          else {
            rainEffect.stop();
          }
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // Observar todas as seções
  sections.forEach(section => {
    observer.observe(section);
  });

  // Controles de debug (opcional)
  if (window.location.hash === '#debug') {
    const rainControls = document.createElement('div');
    rainControls.innerHTML = `
            <div style="position: fixed; top: 100px; right: 10px; background: rgba(0,0,0,0.8); padding: 10px; border-radius: 5px; z-index: 10000;">
                <h4 style="color: white; margin: 0 0 10px 0;">Rain Controls</h4>
                <button onclick="startRain()">Start Rain</button>
                <button onclick="stopRain()">Stop Rain</button>
                <br><br>
                <button onclick="setRainIntensity('light')">Light</button>
                <button onclick="setRainIntensity('medium')">Medium</button>
                <button onclick="setRainIntensity('heavy')">Heavy</button>
                <br><br>
                <button onclick="setRainColor('green')">Green</button>
                <button onclick="setRainColor('blue')">Blue</button>
                <button onclick="setRainColor('purple')">Purple</button>
                <button onclick="setRainColor('pink')">Pink</button>
            </div>
        `;
    document.body.appendChild(rainControls);
  }
});

// Parar chuva quando a página for fechada
window.addEventListener('beforeunload', () => {
  rainEffect.stop();
});
