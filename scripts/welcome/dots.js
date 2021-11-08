export default function initializeDots() {
  const dots = document.querySelectorAll('.dots');

  dots.forEach((dot) => {
    dot.addEventListener('click', ({ currentTarget: dot }) => handleDotClick(dot, dots))
  })
}

function handleDotClick(dot, dots) {
  clearDotsState(dots);
  setDotActive(dot);

  changeCounter(dot);

  changeBackgroundImage(dot);
  changeImage(dot);
}

function clearDotsState(dots) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  })
}

function setDotActive(dot) {
  dot.classList.add('active');
}

function changeCounter(dot) {
  const welcome_counter = document.querySelector('.first_counter');

  welcome_counter.innerHTML = dot.dataset.counterNumber;
}

function changeBackgroundImage(dot) {
  if (window.screen.width <= 768) return

  const welcome_image = document.querySelector('.welcome');
  const image_name = dot.dataset.welcomeImg;

  welcome_image.style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,1) 33%, rgba(255,255,255,0) 50%), url('./assets/welcome/" + image_name + "')";
}

function changeImage(dot) {
  const welcome_image = document.querySelector('.mona_img');
  const image_name = dot.dataset.welcomeImg;

  welcome_image.src = "./assets/welcome/" + image_name;
}