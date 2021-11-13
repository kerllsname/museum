export default function initializeCompare() {
  let firstImageAndSlider = document.getElementsByClassName("compare_overlay");

  for (let i = 0; i < firstImageAndSlider.length; i++) {
    compareImages(firstImageAndSlider[i]);
  }

  function compareImages(img) {
    let slider,
      img,
      clicked = 0,
      w,
      h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = w / 2 + "px";
    slider = document.querySelector(".explore_slider");
    img.parentElement.insertBefore(slider, img);
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    slider.addEventListener("mousedown", isSlideReady);
    window.addEventListener("mouseup", isSlideFinish);
    slider.addEventListener("touchstart", isSlideReady);
    window.addEventListener("touchstop", isSlideFinish);

    function isSlideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function isSlideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      let position;
      if (clicked == 0) return false;
      position = getCursorPosition(e);
      if (position < 0) position = 0;
      if (position > w * 2) position = w * 2;
      slide(position);
    }

    function getCursorPosition(e) {
      let a,
        x = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
