(function () {
    function all(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function one(selector, root) {
        return (root || document).querySelector(selector);
    }

    function setupMenu() {
        var toggle = one('[data-menu-toggle]');
        var panel = one('[data-mobile-panel]');
        if (!toggle || !panel) {
            return;
        }
        toggle.addEventListener('click', function () {
            panel.classList.toggle('is-open');
        });
    }

    function setupHero() {
        var hero = one('[data-hero]');
        if (!hero) {
            return;
        }
        var slides = all('[data-hero-slide]', hero);
        var dots = all('[data-hero-dot]', hero);
        var prev = one('[data-hero-prev]', hero);
        var next = one('[data-hero-next]', hero);
        var current = 0;
        var timer = null;

        function show(index) {
            if (!slides.length) {
                return;
            }
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, idx) {
                slide.classList.toggle('is-active', idx === current);
            });
            dots.forEach(function (dot, idx) {
                dot.classList.toggle('is-active', idx === current);
            });
        }

        function start() {
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            start();
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.getAttribute('data-hero-dot')) || 0);
                restart();
            });
        });

        if (prev) {
            prev.addEventListener('click', function () {
                show(current - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(current + 1);
                restart();
            });
        }

        show(0);
        start();
    }

    function setupFilters() {
        var panels = all('[data-filter-panel]');
        panels.forEach(function (panel) {
            var scope = panel.closest('main') || document;
            var grid = one('[data-filter-grid]', scope);
            var empty = one('[data-empty-state]', scope);
            if (!grid) {
                return;
            }
            var controls = all('[data-filter-text], [data-filter-key]', panel);

            function run() {
                var queryInput = one('[data-filter-text]', panel);
                var query = queryInput ? queryInput.value.trim().toLowerCase() : '';
                var filters = {};
                all('[data-filter-key]', panel).forEach(function (select) {
                    filters[select.getAttribute('data-filter-key')] = select.value.trim().toLowerCase();
                });
                var visible = 0;
                all('[data-card]', grid).forEach(function (card) {
                    var haystack = [
                        card.getAttribute('data-title'),
                        card.getAttribute('data-region'),
                        card.getAttribute('data-year'),
                        card.getAttribute('data-type'),
                        card.getAttribute('data-genre')
                    ].join(' ').toLowerCase();
                    var pass = !query || haystack.indexOf(query) !== -1;
                    Object.keys(filters).forEach(function (key) {
                        var val = filters[key];
                        if (val && (card.getAttribute('data-' + key) || '').toLowerCase().indexOf(val) === -1) {
                            pass = false;
                        }
                    });
                    card.hidden = !pass;
                    if (pass) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.classList.toggle('is-visible', visible === 0);
                }
            }

            controls.forEach(function (control) {
                control.addEventListener('input', run);
                control.addEventListener('change', run);
            });
        });
    }

    function setupSearchPage() {
        var page = one('[data-search-page]');
        if (!page || !window.SEARCH_ITEMS) {
            return;
        }
        var input = one('[data-search-input]', page);
        var title = one('[data-search-title]', page);
        var results = one('[data-search-results]', page);
        var params = new URLSearchParams(window.location.search);
        var q = (params.get('q') || '').trim();
        if (input) {
            input.value = q;
        }
        if (!q || !results) {
            return;
        }
        var query = q.toLowerCase();
        var matches = window.SEARCH_ITEMS.filter(function (item) {
            return item.text.toLowerCase().indexOf(query) !== -1;
        }).slice(0, 120);
        if (title) {
            title.textContent = '搜索结果';
        }
        results.innerHTML = matches.map(function (item) {
            return [
                '<article class="movie-card" data-card>',
                '<a class="poster-link" href="' + item.href + '" aria-label="观看' + item.title + '">',
                '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy">',
                '<span class="play-chip">▶</span>',
                '</a>',
                '<div class="card-body">',
                '<div class="card-meta"><span>' + item.year + '</span><span>' + item.region + '</span><span>' + item.type + '</span></div>',
                '<h3><a href="' + item.href + '">' + item.title + '</a></h3>',
                '<p>' + item.line + '</p>',
                '<div class="badge-row"><span>' + item.category + '</span><span>' + item.genre + '</span></div>',
                '</div>',
                '</article>'
            ].join('');
        }).join('') || '<div class="empty-state is-visible">没有找到匹配的影片</div>';
    }

    function setupPlayer() {
        var video = one('.movie-video');
        if (!video) {
            return;
        }
        var stream = video.getAttribute('data-stream');
        var overlay = one('.play-overlay');
        var attached = false;

        function attach() {
            if (attached || !stream) {
                return;
            }
            attached = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = stream;
            } else if (window.Hls && window.Hls.isSupported()) {
                var hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hls.loadSource(stream);
                hls.attachMedia(video);
            } else {
                video.src = stream;
            }
        }

        function play() {
            attach();
            if (overlay) {
                overlay.classList.add('is-hidden');
            }
            var result = video.play();
            if (result && typeof result.catch === 'function') {
                result.catch(function () {
                    if (overlay) {
                        overlay.classList.remove('is-hidden');
                    }
                });
            }
        }

        if (overlay) {
            overlay.addEventListener('click', play);
        }
        video.addEventListener('click', function () {
            if (video.paused) {
                play();
            } else {
                video.pause();
            }
        });
        video.addEventListener('play', function () {
            if (overlay) {
                overlay.classList.add('is-hidden');
            }
        });
        video.addEventListener('pause', function () {
            if (overlay && video.currentTime === 0) {
                overlay.classList.remove('is-hidden');
            }
        });
        attach();
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupMenu();
        setupHero();
        setupFilters();
        setupSearchPage();
        setupPlayer();
    });
}());
