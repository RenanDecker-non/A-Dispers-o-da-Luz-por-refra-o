/* ============================================
   DISPERSÃO DA LUZ - Scripts Interativos
   ============================================ */

// ==========================================
// CALCULADORA DA LEI DE SNELL
// ==========================================
function calcularRefrao() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const theta1 = parseFloat(document.getElementById('angle1').value);
    const resultBox = document.getElementById('resultado');

    // Validação
    if (n1 < 1 || n2 < 1 || isNaN(theta1)) {
        resultBox.style.display = 'block';
        resultBox.style.borderColor = 'red';
        resultBox.innerHTML = '⚠️ Por favor, insira valores válidos (Índices >= 1).';
        return;
    }

    // Converte graus para radianos
    const theta1Rad = theta1 * (Math.PI / 180);
    const sinTheta2 = (n1 * Math.sin(theta1Rad)) / n2;

    resultBox.style.display = 'block';
    resultBox.style.borderColor = 'var(--accent)';

    // Verifica Reflexão Total Interna
    if (sinTheta2 > 1) {
        resultBox.innerHTML = `🚨 <strong>Reflexão Total Interna!</strong><br>O ângulo é maior que o ângulo limite. A luz não atravessa o meio 2, ela reflete de volta para o meio 1.`;
    } else {
        const theta2Rad = Math.asin(sinTheta2);
        const theta2 = theta2Rad * (180 / Math.PI);

        resultBox.innerHTML = `🌈 <strong>Ângulo de Refração:</strong> ${theta2.toFixed(2)}°<br>
        <small style="color: #aaa;">A luz ao passar do meio 1 para o meio 2 sofreu esse desvio.</small>`;
    }
}

// ==========================================
// MENU MOBILE (HAMBURGUER)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

// ==========================================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ==========================================
// EFEITO PARALLAX SUAVE NO HERO
// ==========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});
