// Слайдер 
const images = ['img/g-ph1.jpg', 'img/g-ph2.jpg', 'img/g-ph3.jpg', 'img/g-ph4.jpg', 'img/g-ph5.jpg', 'img/g-ph6.jpg'];
let current = 0;

const imgElement = document.getElementById('slider-image');

function changeImage(nextIndex) {
  if (!imgElement) return; 
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = images[nextIndex];
    imgElement.onload = () => {
      imgElement.style.opacity = 1;
    };
    current = nextIndex;
  }, 300);
}

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

if (nextButton) {
  nextButton.addEventListener('click', () => {
    const nextIndex = (current + 1) % images.length;
    changeImage(nextIndex);
  });
}

if (prevButton) {
  prevButton.addEventListener('click', () => {
    const nextIndex = (current - 1 + images.length) % images.length;
    changeImage(nextIndex);
  });
}


// Змінна теми
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = "-100px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобільних браузерів
});

const toggle = document.getElementById('theme-toggle');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  
  if (toggle) {
    toggle.textContent = '☀️';
  }
} else {
  
  body.classList.remove('dark-theme');
  if (toggle) {
    toggle.textContent = '🌙';
  }
}

if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Плавний скрол до секцій 
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}