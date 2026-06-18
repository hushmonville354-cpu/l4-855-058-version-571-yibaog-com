(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var panel = document.querySelector(".mobile-panel");
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.hidden = expanded;
      document.body.classList.toggle("menu-open", !expanded);
    });
  }

  function setupHero() {
    var root = document.querySelector("[data-hero]");
    if (!root) {
      return;
    }
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
    var images = Array.prototype.slice.call(root.querySelectorAll("[data-hero-image]"));
    var previous = root.querySelector("[data-hero-prev]");
    var next = root.querySelector("[data-hero-next]");
    var index = 0;

    function activate(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, current) {
        slide.classList.toggle("active", current === index);
      });
      images.forEach(function (image, current) {
        image.classList.toggle("active", current === index);
      });
    }

    slides.forEach(function (slide, current) {
      slide.addEventListener("mouseenter", function () {
        activate(current);
      });
      slide.addEventListener("focusin", function () {
        activate(current);
      });
    });

    if (previous) {
      previous.addEventListener("click", function () {
        activate(index - 1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        activate(index + 1);
      });
    }

    window.setInterval(function () {
      activate(index + 1);
    }, 5200);
  }

  function setupFilters() {
    var roots = Array.prototype.slice.call(document.querySelectorAll("[data-filter-root]"));
    roots.forEach(function (root) {
      var area = root.closest("section") || document;
      var cards = Array.prototype.slice.call(area.querySelectorAll(".movie-card, .rank-item"));
      var searchInput = root.querySelector("[data-filter-search]");
      var fields = Array.prototype.slice.call(root.querySelectorAll("[data-filter-field]"));
      var reset = root.querySelector("[data-filter-reset]");
      var empty = area.querySelector("[data-empty-state]");
      var params = new URLSearchParams(window.location.search);
      var initialQuery = params.get("q");

      if (initialQuery && searchInput) {
        searchInput.value = initialQuery;
      }

      function apply() {
        var query = normalize(searchInput ? searchInput.value : "");
        var active = {};
        fields.forEach(function (field) {
          active[field.getAttribute("data-filter-field")] = normalize(field.value);
        });
        var visible = 0;
        cards.forEach(function (card) {
          var haystack = normalize(card.getAttribute("data-search"));
          var ok = !query || haystack.indexOf(query) !== -1;
          Object.keys(active).forEach(function (name) {
            if (!active[name]) {
              return;
            }
            var cardValue = normalize(card.getAttribute("data-" + name));
            if (cardValue.indexOf(active[name]) === -1) {
              ok = false;
            }
          });
          card.hidden = !ok;
          if (ok) {
            visible += 1;
          }
        });
        if (empty) {
          empty.classList.toggle("active", visible === 0);
        }
      }

      if (searchInput) {
        searchInput.addEventListener("input", apply);
      }
      fields.forEach(function (field) {
        field.addEventListener("change", apply);
      });
      if (reset) {
        reset.addEventListener("click", function () {
          if (searchInput) {
            searchInput.value = "";
          }
          fields.forEach(function (field) {
            field.value = "";
          });
          apply();
        });
      }
      apply();
    });
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupFilters();
  });
})();
