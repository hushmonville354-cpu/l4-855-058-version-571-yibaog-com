(function () {
  var body = document.body;
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobilePanel = document.querySelector('[data-mobile-panel]');

  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', function () {
      mobilePanel.classList.toggle('open');
      body.classList.toggle('menu-open', mobilePanel.classList.contains('open'));
    });
  }

  document.querySelectorAll('.hero-shell').forEach(function (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dots button'));
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var active = 0;
    var timer = null;

    function show(index) {
      if (!slides.length) {
        return;
      }
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === active);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === active);
      });
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5200);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(active - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(active + 1);
        restart();
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        show(index);
        restart();
      });
    });

    show(0);
    restart();
  });

  document.querySelectorAll('[data-filter-scope]').forEach(function (scope) {
    var input = scope.querySelector('[data-filter-input]');
    var select = scope.querySelector('[data-filter-select]');
    var cards = Array.prototype.slice.call(scope.querySelectorAll('[data-card]'));
    var empty = scope.querySelector('[data-empty]');

    function filterCards() {
      var keyword = input ? input.value.trim().toLowerCase() : '';
      var year = select ? select.value : '';
      var shown = 0;

      cards.forEach(function (card) {
        var haystack = (card.getAttribute('data-search') || '').toLowerCase();
        var matchKeyword = !keyword || haystack.indexOf(keyword) !== -1;
        var matchYear = !year || haystack.indexOf(year) !== -1;
        var show = matchKeyword && matchYear;
        card.style.display = show ? '' : 'none';
        if (show) {
          shown += 1;
        }
      });

      if (empty) {
        empty.classList.toggle('show', shown === 0);
      }
    }

    if (input) {
      input.addEventListener('input', filterCards);
    }

    if (select) {
      select.addEventListener('change', filterCards);
    }

    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q && input) {
      input.value = q;
    }

    filterCards();
  });

  document.querySelectorAll('[data-video-player]').forEach(function (player) {
    var video = player.querySelector('video');
    var button = player.querySelector('[data-play-trigger]');
    var stream = player.getAttribute('data-play');
    var ready = false;
    var hls = null;

    function loadVideo() {
      if (!video || !stream || ready) {
        return;
      }

      ready = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true });
        hls.loadSource(stream);
        hls.attachMedia(video);
      } else {
        video.src = stream;
      }
    }

    function startVideo() {
      loadVideo();
      if (!video) {
        return;
      }
      player.classList.add('is-playing');
      video.controls = true;
      var playTask = video.play();
      if (playTask && typeof playTask.catch === 'function') {
        playTask.catch(function () {});
      }
    }

    if (button) {
      button.addEventListener('click', startVideo);
    }

    if (video) {
      video.addEventListener('click', function () {
        if (!ready) {
          startVideo();
        }
      });
      video.addEventListener('error', function () {
        if (hls && typeof hls.destroy === 'function') {
          hls.destroy();
          hls = null;
        }
      });
    }
  });
})();
