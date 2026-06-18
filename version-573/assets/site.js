(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var panel = document.querySelector("[data-mobile-panel]");
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
  }

  function setupHero() {
    var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    if (slides.length < 2) {
      return;
    }
    var active = 0;
    var timer = null;

    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === active);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === active);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5200);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        if (timer) {
          window.clearInterval(timer);
        }
        show(i);
        start();
      });
    });

    show(0);
    start();
  }

  function setupFilters() {
    var searchInput = document.querySelector("[data-page-search]");
    var yearSelect = document.querySelector("[data-year-filter]");
    var cards = Array.prototype.slice.call(document.querySelectorAll(".js-movie-card"));
    var emptyTip = document.querySelector("[data-empty-tip]");
    if (!searchInput || cards.length === 0) {
      return;
    }

    if (yearSelect) {
      var years = cards.map(function (card) {
        return card.getAttribute("data-year") || "";
      }).filter(Boolean).filter(function (year, index, list) {
        return list.indexOf(year) === index;
      }).sort(function (a, b) {
        return Number(b) - Number(a);
      });
      years.forEach(function (year) {
        var option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
      });
    }

    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q") || "";
    if (initial) {
      searchInput.value = initial;
    }
    if (searchInput.hasAttribute("data-autofocus-search")) {
      searchInput.focus();
      searchInput.select();
    }

    function apply() {
      var keyword = normalize(searchInput.value);
      var year = yearSelect ? yearSelect.value : "";
      var visible = 0;
      cards.forEach(function (card) {
        var haystack = normalize([
          card.getAttribute("data-title"),
          card.getAttribute("data-tags"),
          card.getAttribute("data-category"),
          card.getAttribute("data-year")
        ].join(" "));
        var matchKeyword = !keyword || haystack.indexOf(keyword) !== -1;
        var matchYear = !year || card.getAttribute("data-year") === year;
        var show = matchKeyword && matchYear;
        card.style.display = show ? "" : "none";
        if (show) {
          visible += 1;
        }
      });
      if (emptyTip) {
        emptyTip.classList.toggle("show", visible === 0);
      }
    }

    searchInput.addEventListener("input", apply);
    if (yearSelect) {
      yearSelect.addEventListener("change", apply);
    }
    apply();
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupFilters();
  });
})();
