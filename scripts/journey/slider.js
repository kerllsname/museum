export default function initializeSlider() {
  $('.frames').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'frames_sliders_list',
    appendDots: $('.frames_sliders'),
    appendArrows: $('.for_arrows'),
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true
  });

  setDotActive(0);

  $('.frames').on('afterChange', handleSliderChange);
}

function handleSliderChange(_e, _slick, currentSlide) {
  changeMainVideo(currentSlide);
  clearDotsState();
  setDotActive(currentSlide);
}

function changeMainVideo(currentSlide) {
  const main_video = document.querySelector('.viewer');
  let mainVideoId = currentSlide;

  if(mainVideoId === 5) mainVideoId = 0;
  if(mainVideoId === -1) mainVideoId = 4;

  main_video.src = "./assets/journey/video" + mainVideoId + ".mp4";
  main_video.poster = "./assets/journey/poster" + mainVideoId + ".jpg";
}

function clearDotsState() {
  dots().forEach((dot) => {
    dot.style.background = "url('./assets/journey/def_dot.svg') no-repeat";
  })
}

function setDotActive(currentSlide) {
  dots()[currentSlide].style.background = "url('./assets/journey/active_dot.svg') no-repeat";
}

function dots() {
  return document.querySelectorAll('.frames_sliders_list li button');
}