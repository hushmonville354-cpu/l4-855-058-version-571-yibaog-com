(function () {
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

  function fillSelect(select, values) {
    if (!select) {
      return;
    }
    var current = select.value;
    values.forEach(function (value) {
      if (!value) {
        return;
      }
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
    select.value = current;
  }

  function setupFilters() {
    var grid = document.querySelector("[data-card-grid]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
    if (!grid || cards.length === 0) {
      return;
    }

    var input = document.querySelector("[data-filter-input]");
    var regionSelect = document.querySelector("[data-filter-region]");
    var yearSelect = document.querySelector("[data-filter-year]");
    var genreSelect = document.querySelector("[data-filter-genre]");
    var emptyState = document.querySelector("[data-empty-state]");

    var regions = Array.from(new Set(cards.map(function (card) { return card.getAttribute("data-region") || ""; }))).sort();
    var years = Array.from(new Set(cards.map(function (card) { return card.getAttribute("data-year") || ""; }))).sort().reverse();
    var genres = Array.from(new Set(cards.map(function (card) { return card.getAttribute("data-genre") || ""; }))).sort();

    fillSelect(regionSelect, regions);
    fillSelect(yearSelect, years);
    fillSelect(genreSelect, genres);

    var searchInput = document.querySelector("[data-search-page-input]");
    if (searchInput) {
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q") || "";
      searchInput.value = q;
    }

    function apply() {
      var keyword = normalize(input && input.value);
      var region = normalize(regionSelect && regionSelect.value);
      var year = normalize(yearSelect && yearSelect.value);
      var genre = normalize(genreSelect && genreSelect.value);
      var shown = 0;

      cards.forEach(function (card) {
        var haystack = normalize(card.getAttribute("data-search"));
        var cardRegion = normalize(card.getAttribute("data-region"));
        var cardYear = normalize(card.getAttribute("data-year"));
        var cardGenre = normalize(card.getAttribute("data-genre"));
        var visible = true;

        if (keyword && haystack.indexOf(keyword) === -1) {
          visible = false;
        }
        if (region && cardRegion !== region) {
          visible = false;
        }
        if (year && cardYear !== year) {
          visible = false;
        }
        if (genre && cardGenre !== genre) {
          visible = false;
        }

        card.hidden = !visible;
        if (visible) {
          shown += 1;
        }
      });

      if (emptyState) {
        emptyState.hidden = shown !== 0;
      }
    }

    [input, regionSelect, yearSelect, genreSelect].forEach(function (control) {
      if (control) {
        control.addEventListener("input", apply);
        control.addEventListener("change", apply);
      }
    });

    apply();
  }

  function setupHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }

    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var current = 0;

    function show(index) {
      if (slides.length === 0) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(current - 1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
      });
    }
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-hero-dot") || 0));
      });
    });

    window.setInterval(function () {
      show(current + 1);
    }, 5000);
  }

  function setupSearchForms() {
    document.querySelectorAll("[data-search-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector("input[name='q']");
        if (!input || !input.value.trim()) {
          event.preventDefault();
          window.location.href = "./search.html";
        }
      });
    });
  }

  function init() {
    setupMenu();
    setupFilters();
    setupHero();
    setupSearchForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
