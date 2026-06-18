(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    document.querySelectorAll("[data-player]").forEach(function (frame) {
      var video = frame.querySelector("video");
      var button = frame.querySelector("button");
      var src = frame.getAttribute("data-src");
      var loaded = false;
      var hls = null;

      function attach() {
        if (loaded || !video || !src) {
          return;
        }
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          loaded = true;
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: false
          });
          hls.loadSource(src);
          hls.attachMedia(video);
          loaded = true;
          return;
        }
        video.src = src;
        loaded = true;
      }

      function start() {
        attach();
        if (button) {
          button.classList.add("is-hidden");
        }
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {});
        }
      }

      if (button) {
        button.addEventListener("click", start);
      }
      if (video) {
        video.addEventListener("click", function () {
          if (!loaded) {
            start();
          }
        });
        video.addEventListener("play", function () {
          if (button) {
            button.classList.add("is-hidden");
          }
        });
        video.addEventListener("emptied", function () {
          if (hls) {
            hls.destroy();
            hls = null;
          }
          loaded = false;
        });
      }
    });
  });
})();
