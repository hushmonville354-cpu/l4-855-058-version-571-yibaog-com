(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function bindPlayer(shell) {
    var video = shell.querySelector("video");
    var button = shell.querySelector(".play-layer");
    if (!video || !button) {
      return;
    }
    var url = video.getAttribute("data-video");
    var loaded = false;
    var hlsInstance = null;

    function load() {
      if (loaded || !url) {
        return;
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(video);
      } else {
        video.src = url;
      }
      loaded = true;
    }

    function play() {
      load();
      button.hidden = true;
      shell.classList.add("is-playing");
      video.controls = true;
      var result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(function () {
          button.hidden = false;
          shell.classList.remove("is-playing");
        });
      }
    }

    button.addEventListener("click", play);
    video.addEventListener("click", function () {
      if (video.paused) {
        play();
      }
    });
    window.addEventListener("beforeunload", function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  ready(function () {
    Array.prototype.slice.call(document.querySelectorAll(".video-shell")).forEach(bindPlayer);
  });
})();
