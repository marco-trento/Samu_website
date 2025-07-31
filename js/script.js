document.addEventListener('DOMContentLoaded', function() {
    // Select all main sections
    const sections = document.querySelectorAll('.section-padded, .light-bg');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
});

// Expand/collapse extra piercings in price list
window.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggle-piercing-list');
    var extraPiercings = document.querySelectorAll('.extra-piercing');
    // Always hide extra piercings on page load
    extraPiercings.forEach(function(li) {
        li.style.display = 'none';
    });
    if (toggleBtn && extraPiercings.length > 0) {
        toggleBtn.addEventListener('click', function() {
            // Use getComputedStyle for robust visibility check
            var isHidden = getComputedStyle(extraPiercings[0]).display === 'none';
            extraPiercings.forEach(function(li) {
                li.style.display = isHidden ? '' : 'none';
            });
            toggleBtn.textContent = isHidden ? 'Hide extra piercings' : 'Show all piercings';
            // If hiding, scroll to the piercing list section
            if (!isHidden) {
                var typologySection = document.getElementById('typology');
                if (typologySection) {
                    typologySection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}); 