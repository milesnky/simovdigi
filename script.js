// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
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
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        details.classList.toggle('show');
        btn.textContent = details.classList.contains('show') ? 'Hide Details' : 'More Details';
    });
});

// Chat Button Placeholder (Add Tidio script for real chat)
document.getElementById('chat-toggle').addEventListener('click', () => {
    alert('SimovBot: Hi! How can I help with your digital project? (Integrate Tidio for full chat.)');
});
