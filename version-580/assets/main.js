(function () {
    function ready(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    }

    function bindMobileMenu() {
        var toggle = document.querySelector("[data-mobile-toggle]");
        var panel = document.querySelector("[data-mobile-panel]");
        if (!toggle || !panel) {
            return;
        }
        toggle.addEventListener("click", function () {
            panel.classList.toggle("is-open");
        });
    }

    function bindSearchForms() {
        document.querySelectorAll("[data-site-search]").forEach(function (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var input = form.querySelector("input[name='q']");
                var value = input ? input.value.trim() : "";
                if (value) {
                    window.location.href = "./search.html?q=" + encodeURIComponent(value);
                }
            });
        });
    }

    function bindHero() {
        var hero = document.querySelector("[data-hero]");
        if (!hero) {
            return;
        }
        var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
        var prev = hero.querySelector("[data-hero-prev]");
        var next = hero.querySelector("[data-hero-next]");
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
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5000);
        }

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
        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                show(Number(dot.getAttribute("data-hero-dot")) || 0);
                restart();
            });
        });
        restart();
    }

    function bindFilters() {
        var input = document.querySelector("[data-filter-input]");
        var select = document.querySelector("[data-filter-select]");
        var list = document.querySelector("[data-filter-list]");
        if (!list || (!input && !select)) {
            return;
        }
        var cards = Array.prototype.slice.call(list.querySelectorAll(".movie-card"));
        function runFilter() {
            var keyword = input ? input.value.trim().toLowerCase() : "";
            var genre = select ? select.value.trim().toLowerCase() : "";
            cards.forEach(function (card) {
                var haystack = [
                    card.getAttribute("data-title"),
                    card.getAttribute("data-region"),
                    card.getAttribute("data-type"),
                    card.getAttribute("data-genre"),
                    card.getAttribute("data-year")
                ].join(" ").toLowerCase();
                var matchKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchGenre = !genre || haystack.indexOf(genre) !== -1;
                card.hidden = !(matchKeyword && matchGenre);
            });
        }
        if (input) {
            input.addEventListener("input", runFilter);
        }
        if (select) {
            select.addEventListener("change", runFilter);
        }
    }

    function movieCardTemplate(movie) {
        var tags = (movie.tags || []).slice(0, 2).map(function (tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
        }).join("");
        return "<a class=\"movie-card\" href=\"" + movie.url + "\">" +
            "<span class=\"poster-wrap\">" +
            "<img class=\"poster-img\" src=\"" + movie.cover + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\">" +
            "<span class=\"poster-shade\"></span>" +
            "<span class=\"play-badge\">▶</span>" +
            "<span class=\"card-year\">" + escapeHtml(movie.year) + "</span>" +
            "<span class=\"card-type\">" + escapeHtml(movie.type) + "</span>" +
            "</span>" +
            "<span class=\"card-body\">" +
            "<strong>" + escapeHtml(movie.title) + "</strong>" +
            "<em>" + escapeHtml(movie.oneLine || movie.genre || "") + "</em>" +
            "<span class=\"card-tags\">" + tags + "</span>" +
            "</span>" +
            "</a>";
    }

    function escapeHtml(value) {
        return String(value || "").replace(/[&<>"]/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\"": "&quot;"
            }[char];
        });
    }

    function bindSearchPage() {
        var page = document.querySelector("[data-search-page]");
        if (!page || !window.SEARCH_INDEX) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var query = (params.get("q") || "").trim();
        var summary = page.querySelector("[data-search-summary]");
        var resultBox = page.querySelector("[data-search-results]");
        var input = page.querySelector(".search-page-form input[name='q']");
        if (input) {
            input.value = query;
        }
        if (!query) {
            if (summary) {
                summary.textContent = "输入关键词后展示匹配结果。";
            }
            return;
        }
        var lower = query.toLowerCase();
        var results = window.SEARCH_INDEX.filter(function (movie) {
            var text = [
                movie.title,
                movie.region,
                movie.type,
                movie.genre,
                movie.category,
                movie.oneLine,
                (movie.tags || []).join(" ")
            ].join(" ").toLowerCase();
            return text.indexOf(lower) !== -1;
        });
        if (summary) {
            summary.textContent = "关键词“" + query + "”找到 " + results.length + " 部影片。";
        }
        if (resultBox) {
            resultBox.innerHTML = results.slice(0, 300).map(movieCardTemplate).join("");
            if (results.length === 0) {
                resultBox.innerHTML = "<div class=\"content-panel\"><h2>未找到相关影片</h2><p>请尝试更换片名、地区、类型或标签关键词。</p></div>";
            }
        }
    }

    ready(function () {
        bindMobileMenu();
        bindSearchForms();
        bindHero();
        bindFilters();
        bindSearchPage();
    });
})();
