const targetElement = document.getElementById('flicker-text');
const finalValue = "SHIP.";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = 0;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (targetElement && !prefersReducedMotion) {
    const interval = setInterval(() => {
        targetElement.innerText = finalValue
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return finalValue[index];
                }
                return chars[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iterations >= finalValue.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 40);
} else if (targetElement) {
    targetElement.innerText = finalValue;
}
const menuToggle = document.getElementById('menuToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMenu = document.getElementById('closeMenu');

// Open Menu
menuToggle.addEventListener('click', () => {
    mobileOverlay.classList.add('active');
});

// Close Menu
closeMenu.addEventListener('click', () => {
    mobileOverlay.classList.remove('active');
});

// Close menu if a link is clicked
document.querySelectorAll('.overlay-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
});