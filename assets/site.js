(function () {
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var current = 0;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(current + 1);
      }, 5600);
    }
  }

  function bindFilter(inputSelector, listSelector) {
    var input = document.querySelector(inputSelector);
    var list = document.querySelector(listSelector);

    if (!input || !list) {
      return;
    }

    var cards = Array.prototype.slice.call(list.querySelectorAll('[data-card]'));

    function applyFilter(value) {
      var keyword = String(value || '').trim().toLowerCase();
      cards.forEach(function (card) {
        var haystack = String(card.getAttribute('data-search') || '').toLowerCase();
        card.classList.toggle('hidden-card', keyword && haystack.indexOf(keyword) === -1);
      });
    }

    input.addEventListener('input', function () {
      applyFilter(input.value);
    });

    return applyFilter;
  }

  bindFilter('[data-filter-input]', '[data-filter-list]');

  var searchApply = bindFilter('[data-search-page-input]', '[data-search-page-list]');
  var searchInput = document.querySelector('[data-search-page-input]');
  var clearButton = document.querySelector('[data-search-clear]');

  if (searchInput && searchApply) {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q') || '';
    if (q) {
      searchInput.value = q;
      searchApply(q);
    }
  }

  if (clearButton && searchInput && searchApply) {
    clearButton.addEventListener('click', function () {
      searchInput.value = '';
      searchApply('');
      searchInput.focus();
    });
  }

  var player = document.querySelector('[data-player]');
  if (player) {
    var video = player.querySelector('video');
    var playButton = player.querySelector('[data-play]');
    var sourceUrl = player.getAttribute('data-video');
    var loaded = false;
    var hlsInstance = null;

    function loadVideo() {
      if (loaded || !video || !sourceUrl) {
        return;
      }
      loaded = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = sourceUrl;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(sourceUrl);
        hlsInstance.attachMedia(video);
      } else {
        video.src = sourceUrl;
      }
    }

    function startVideo() {
      loadVideo();
      var promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {});
      }
    }

    if (playButton) {
      playButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        startVideo();
      });
    }

    player.addEventListener('click', function (event) {
      if (event.target === player || event.target === video) {
        startVideo();
      }
    });

    video.addEventListener('play', function () {
      player.classList.add('is-playing');
    });

    video.addEventListener('pause', function () {
      player.classList.remove('is-playing');
    });

    video.addEventListener('ended', function () {
      player.classList.remove('is-playing');
    });

    window.addEventListener('beforeunload', function () {
      if (hlsInstance && typeof hlsInstance.destroy === 'function') {
        hlsInstance.destroy();
      }
    });
  }
})();
