// Configuração do Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FFC107']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4CAF50',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Função para alternar entre diferentes configurações de partículas
function changeParticleTheme(theme) {
    const themes = {
        default: {
            color: ['#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FFC107'],
            line_linked: {
                color: '#4CAF50'
            }
        },
        purple: {
            color: ['#9C27B0', '#E91E63', '#673AB7', '#3F51B5'],
            line_linked: {
                color: '#9C27B0'
            }
        },
        blue: {
            color: ['#2196F3', '#03A9F4', '#00BCD4', '#009688'],
            line_linked: {
                color: '#2196F3'
            }
        },
        green: {
            color: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B'],
            line_linked: {
                color: '#4CAF50'
            }
        }
    };

    if (themes[theme]) {
        pJS.particles.color.value = themes[theme].color;
        pJS.particles.line_linked.color = themes[theme].line_linked.color;
        pJS.fn.particlesRefresh();
    }
}

// Função para ativar/desativar partículas
function toggleParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer.style.display === 'none') {
        particlesContainer.style.display = 'block';
        pJS.fn.particlesRefresh();
    } else {
        particlesContainer.style.display = 'none';
    }
}

// Função para mudar a intensidade das partículas
function setParticleIntensity(intensity) {
    const levels = {
        low: 40,
        medium: 80,
        high: 120
    };

    if (levels[intensity]) {
        pJS.particles.number.value = levels[intensity];
        pJS.fn.particlesRefresh();
    }
}

// Event listeners para controles de partículas
document.addEventListener('DOMContentLoaded', function() {
    // Controles de partículas (opcional - para desenvolvimento)
    if (window.location.hash === '#debug') {
        const controls = document.createElement('div');
        controls.innerHTML = `
            <div style="position: fixed; top: 10px; right: 10px; background: rgba(0,0,0,0.8); padding: 10px; border-radius: 5px; z-index: 10000;">
                <button onclick="changeParticleTheme('default')">Default</button>
                <button onclick="changeParticleTheme('purple')">Purple</button>
                <button onclick="changeParticleTheme('blue')">Blue</button>
                <button onclick="changeParticleTheme('green')">Green</button>
                <button onclick="toggleParticles()">Toggle</button>
                <button onclick="setParticleIntensity('low')">Low</button>
                <button onclick="setParticleIntensity('medium')">Medium</button>
                <button onclick="setParticleIntensity('high')">High</button>
            </div>
        `;
        document.body.appendChild(controls);
    }
}); 