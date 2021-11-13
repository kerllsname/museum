export default function initializeVideo() {
  const player = document.querySelector(".video_player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector(".progress_bar");
  const progressBar = player.querySelector(".progress_bar_fill");
  const big_play_btn = player.querySelector(".big_play_button");
  const play_btn = player.querySelector(".play");
  const stop_btn = player.querySelector(".stop");
  const unmute_btn = player.querySelector(".unmute");
  const mute_btn = player.querySelector(".mute");
  const volume = player.querySelector(".volume_range");

  let mousedown = false;
  video.addEventListener("click", togglePlay);
  video.addEventListener("timeupdate", handleProgress);
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
  big_play_btn.addEventListener("click", togglePlay);
  play_btn.addEventListener("click", togglePlay);
  stop_btn.addEventListener("click", togglePlay);
  volume.addEventListener("change", handleRangeUpdate);
  unmute_btn.addEventListener("click", () => toggleMute(true));
  mute_btn.addEventListener("click", () => toggleMute(false));

  function togglePlay() {
    if (video.paused) {
      video.play();
      stopBtnAppear();
    } else {
      video.pause();
      stopBtnDissaper();
    }
  }

  function stopBtnAppear() {
    big_play_btn.style.display = "none";
    play_btn.style.display = "none";
    stop_btn.style.display = "block";
  }

  function stopBtnDissaper() {
    big_play_btn.style.display = "block";
    play_btn.style.display = "block";
    stop_btn.style.display = "none";
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;

    if (percent == 100) {
      big_play_btn.style.display = "block";
      play_btn.style.display = "block";
      stop_btn.style.display = "none";
    }
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function handleRangeUpdate() {
    setVolume(this.value);

    if (video[this.name] == 0) {
      unmute_btn.style.display = "none";
      mute_btn.style.display = "block";
    } else {
      unmute_btn.style.display = "block";
      mute_btn.style.display = "none";
    }
  }

  function toggleMute(muted) {
    if (muted) {
      unmute_btn.style.display = "none";
      mute_btn.style.display = "block";
      setVolume("0");
    } else {
      unmute_btn.style.display = "block";
      mute_btn.style.display = "none";
      setVolume("1");
    }
  }

  function setVolume(value) {
    video["volume"] = value;
    volume.value = value;
  }
}
