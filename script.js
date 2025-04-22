const images = ['img/g-ph1.jpg', 'img/g-ph2.jpg', 'img/g-ph3.jpg', 'img/g-ph4.jpg', 'img/g-ph5.jpg', 'img/g-ph6.jpg'];
let current = 0;

const imgElement = document.getElementById('slider-image');

function changeImage(nextIndex) {
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = images[nextIndex];
    imgElement.onload = () => {
      imgElement.style.opacity = 1;
    };
    current = nextIndex;
  }, 300);
}

document.getElementById('next').addEventListener('click', () => {
  const nextIndex = (current + 1) % images.length;
  changeImage(nextIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  const nextIndex = (current - 1 + images.length) % images.length;
  changeImage(nextIndex);
});


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = "-100px"; 
  } else {
    header.style.top = "0"; 
  }
});
