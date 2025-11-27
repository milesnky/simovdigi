// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-In Animations on Scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Expand Package Details
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click
        const details = btn.nextElementSibling;
        details.classList.toggle('show');
        btn.textContent = details.classList.contains('show') ? 'Hide Details' : 'More Details';
    });
});

// Package Card Hover (Optional Extra Interactivity)
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('expand-btn')) {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => card.style.transform = '', 150);
        }
    });
});

// Chat Button (Placeholder for Tidio – Sign up at tidio.com for real)
document.getElementById('chat-toggle').addEventListener('click', () => {
    alert('SimovBot: Hi! Ask me about packages or book a call. (Add Tidio for live chat.)');
});
