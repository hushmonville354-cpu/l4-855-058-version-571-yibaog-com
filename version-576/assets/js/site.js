(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var panel = document.querySelector("[data-mobile-panel]");
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener("click", function () {
      panel.classList.toggle("is-open");
    });
  }

  function setupHero() {
    var root = document.querySelector("[data-hero]");
    if (!root) {
      return;
    }
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-hero-dot]"));
    var prev = root.querySelector("[data-hero-prev]");
    var next = root.querySelector("[data-hero-next]");
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    function restart() {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
        restart();
      });
    });

    if (prev) {
      prev.addEventListener("click", function () {
        show(current - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
        restart();
      });
    }

    show(0);
    restart();
  }

  function setupSearchForms() {
    var forms = document.querySelectorAll("[data-search-form]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector("input[name='q']");
        if (!input || !input.value.trim()) {
          event.preventDefault();
          window.location.href = "./search.html";
        }
      });
    });
  }

  function setupFilter() {
    var filterInput = document.querySelector("[data-filter-input]");
    var list = document.querySelector("[data-filter-list]");
    if (!filterInput || !list) {
      return;
    }
    var cards = Array.prototype.slice.call(list.querySelectorAll("[data-movie-card]"));
    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q") || "";
    var clearButton = document.querySelector("[data-clear-filter]");

    function applyFilter() {
      var query = normalize(filterInput.value);
      cards.forEach(function (card) {
        var text = normalize(card.getAttribute("data-search"));
        card.classList.toggle("is-hidden", Boolean(query) && text.indexOf(query) === -1);
      });
    }

    if (initialQuery) {
      filterInput.value = initialQuery;
    }

    filterInput.addEventListener("input", applyFilter);

    if (clearButton) {
      clearButton.addEventListener("click", function () {
        filterInput.value = "";
        applyFilter();
        filterInput.focus();
      });
    }

    applyFilter();
  }

  window.initMoviePlayer = function (streamUrl) {
    var video = document.getElementById("player-video");
    var cover = document.querySelector("[data-player-cover]");
    var playButton = document.querySelector("[data-player-button]");
    var attached = false;
    var hlsInstance = null;

    if (!video || !streamUrl) {
      return;
    }

    function attachSource() {
      if (attached) {
        return;
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(video);
      } else {
        video.src = streamUrl;
      }
      attached = true;
    }

    function startPlayback(event) {
      if (event) {
        event.preventDefault();
      }
      attachSource();
      video.controls = true;
      if (cover) {
        cover.classList.add("is-hidden");
      }
      var playback = video.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(function () {});
      }
    }

    if (cover) {
      cover.addEventListener("click", startPlayback);
    }

    if (playButton) {
      playButton.addEventListener("click", startPlayback);
    }

    video.addEventListener("click", function () {
      if (!attached || video.paused) {
        startPlayback();
      }
    });

    window.addEventListener("beforeunload", function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  };

  ready(function () {
    setupMenu();
    setupHero();
    setupSearchForms();
    setupFilter();
  });
})();
