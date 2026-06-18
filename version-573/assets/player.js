function initMoviePlayer(videoId, buttonId, source) {
  var video = document.getElementById(videoId);
  var button = document.getElementById(buttonId);
  var started = false;

  if (!video || !button || !source) {
    return;
  }

  function attachSource() {
    if (started) {
      return;
    }
    started = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
    } else if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(source);
      hls.attachMedia(video);
    } else {
      video.src = source;
    }
  }

  function playVideo() {
    attachSource();
    button.classList.add("hide");
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {
        button.classList.remove("hide");
      });
    }
  }

  button.addEventListener("click", playVideo);
  video.addEventListener("click", function () {
    if (!started) {
      playVideo();
    }
  });
  video.addEventListener("play", function () {
    button.classList.add("hide");
  });
}
