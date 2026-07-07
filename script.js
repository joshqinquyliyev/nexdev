// --- Elementlarni tanlash ---
const customCursor = document.querySelector('.custom-cursor');
const customCursorDot = document.querySelector('.custom-cursor-dot');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// --- 1. Custom Cursor Logikasi (cursor: none EMAS) ---
document.addEventListener('mousemove', (e) => {
    if (customCursor && customCursorDot) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursorDot.style.left = e.clientX + 'px';
        customCursorDot.style.top = e.clientY + 'px';
    }
});

// Elementlar ustiga borganda kursor o'zgarishi
const hoverElements = document.querySelectorAll('a, button, .card, input, textarea, .hamburger');
hoverElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        if (customCursor) customCursor.classList.add('hovered');
    });
    elem.addEventListener('mouseleave', () => {
        if (customCursor) customCursor.classList.remove('hovered');
    });
});

// --- 2. Dark/Light Mode Xotira Bilan (LocalStorage) ---
// Sahifa yuklanganda oxirgi saqlangan temani tekshirish
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Xotiraga saqlash
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// --- 3. Mobil Qurilmalar uchun Hamburger Menyusi ---
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});