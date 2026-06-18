(function () {
    var toggle = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (toggle && mobileNav) {
        toggle.addEventListener("click", function () {
            mobileNav.classList.toggle("open");
        });
    }

    var slider = document.querySelector("[data-hero-slider]");
    if (slider) {
        var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
        var prev = slider.querySelector("[data-hero-prev]");
        var next = slider.querySelector("[data-hero-next]");
        var index = 0;
        var timer;
        function show(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, itemIndex) {
                slide.classList.toggle("hero-slide-active", itemIndex === index);
            });
            dots.forEach(function (dot, itemIndex) {
                dot.classList.toggle("active", itemIndex === index);
            });
        }
        function play() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }
        if (prev) {
            prev.addEventListener("click", function () {
                show(index - 1);
                play();
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                show(index + 1);
                play();
            });
        }
        dots.forEach(function (dot, itemIndex) {
            dot.addEventListener("click", function () {
                show(itemIndex);
                play();
            });
        });
        show(0);
        play();
    }

    function applyFilter(panel) {
        var section = panel.closest("section") || document;
        var input = panel.querySelector("[data-filter-input]");
        var clear = panel.querySelector("[data-filter-clear]");
        var cards = Array.prototype.slice.call(section.querySelectorAll("[data-movie-card]"));
        var empty = section.querySelector("[data-empty-result]");
        function run() {
            var query = (input.value || "").trim().toLowerCase();
            var visible = 0;
            cards.forEach(function (card) {
                var haystack = [
                    card.getAttribute("data-title"),
                    card.getAttribute("data-region"),
                    card.getAttribute("data-year"),
                    card.getAttribute("data-type"),
                    card.getAttribute("data-keywords")
                ].join(" ").toLowerCase();
                var matched = !query || haystack.indexOf(query) !== -1;
                card.classList.toggle("hidden-by-filter", !matched);
                if (matched) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.classList.toggle("show", visible === 0);
            }
        }
        input.addEventListener("input", run);
        if (clear) {
            clear.addEventListener("click", function () {
                input.value = "";
                run();
                input.focus();
            });
        }
        var params = new URLSearchParams(window.location.search);
        var q = params.get("q");
        if (q && section.closest("[data-query-page]") || q && document.querySelector("[data-query-page]")) {
            input.value = q;
        }
        run();
    }

    Array.prototype.slice.call(document.querySelectorAll("[data-filter-panel]")).forEach(applyFilter);

    var rankList = document.querySelector("[data-rank-list]");
    if (rankList) {
        var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-ranking-mode]"));
        var items = Array.prototype.slice.call(rankList.querySelectorAll("[data-rank-item]"));
        function sortBy(mode) {
            buttons.forEach(function (button) {
                button.classList.toggle("active", button.getAttribute("data-ranking-mode") === mode);
            });
            var key = mode === "score" ? "score" : mode;
            items.sort(function (a, b) {
                return parseFloat(b.getAttribute("data-" + key)) - parseFloat(a.getAttribute("data-" + key));
            });
            items.forEach(function (item, itemIndex) {
                var number = item.querySelector(".rank-num");
                if (number) {
                    number.textContent = itemIndex + 1;
                }
                rankList.appendChild(item);
            });
        }
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                sortBy(button.getAttribute("data-ranking-mode"));
            });
        });
    }
}());
