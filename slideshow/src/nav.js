
const sections = document.querySelectorAll('.section-page');
const leftButton = document.createElement('button');
leftButton.innerText = '👈';
leftButton.style.position = 'fixed';
leftButton.style.top = '50%';
leftButton.style.left = '32px';
leftButton.style.transform = 'translateY(-50%)';
leftButton.style.zIndex = '1000';

const rightButton = document.createElement('button');
rightButton.innerText = '👉';
rightButton.style.position = 'fixed';
rightButton.style.top = '50%';
rightButton.style.right = '32px';
rightButton.style.transform = 'translateY(-50%)';
rightButton.style.zIndex = '1000';

const classes = ['w-12', 'h-12', 'text-xl', 'bg-white/10', 'px-2', 'py-1', 'rounded-full', 'cursor-pointer', 'shadow-lg', 'hover:bg-white/25', 'transition'];

leftButton.classList.add(...classes);
rightButton.classList.add(...classes);

document.body.appendChild(leftButton);
document.body.appendChild(rightButton);

let currentSectionIndex = 1;

leftButton.addEventListener('click', () => {
    if (currentSectionIndex > 1) {
        currentSectionIndex--;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

rightButton.addEventListener('click', () => {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionIndex = index;
        }
    });
});
