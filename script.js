// Efeito de partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Partículas carregadas!');
});

// Animação de digitação
const typed = new Typed('.typing', {
    strings: ['`Gabriel K Milani`', 'Desenvolvedor', 'Especialista em IA', 'Criativo'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Reveal
ScrollReveal().reveal('.hero-content', { delay: 300, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.sobre-content', { delay: 400, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.trajetoria-content', { delay: 500, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.habilidade', { delay: 300, interval: 200 });
ScrollReveal().reveal('.projeto', { delay: 300, interval: 200 });

// Dark Mode
const toggleTheme = () => {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
};

// Verifica preferência do usuário
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.dataset.theme = "dark";
}