const select = (selector, root = document) => root.querySelector(selector);
const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setupMobileNavigation() {
  const toggle = select('[data-menu-toggle]');
  const nav = select('[data-site-nav]');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
    }
  });
}

function setupHeroCarousel() {
  const hero = select('[data-hero]');

  if (!hero) {
    return;
  }

  const slides = selectAll('[data-hero-slide]', hero);
  const dots = selectAll('[data-hero-dot]', hero);
  const previous = select('[data-hero-prev]', hero);
  const next = select('[data-hero-next]', hero);
  let index = 0;
  let timer = null;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
    });
  };

  const start = () => {
    stop();
    timer = window.setInterval(() => showSlide(index + 1), 5200);
  };

  const stop = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  previous?.addEventListener('click', () => {
    showSlide(index - 1);
    start();
  });

  next?.addEventListener('click', () => {
    showSlide(index + 1);
    start();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.heroDot || 0));
      start();
    });
  });

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  showSlide(0);
  start();
}

function setupCardFilters() {
  const panel = select('[data-card-filter]');

  if (!panel) {
    return;
  }

  const search = select('[data-filter-search]', panel);
  const type = select('[data-filter-type]', panel);
  const year = select('[data-filter-year]', panel);
  const output = select('[data-filter-count]', panel);
  const cards = selectAll('.searchable-card');

  const update = () => {
    const keyword = (search?.value || '').trim().toLowerCase();
    const selectedType = type?.value || '';
    const selectedYear = year?.value || '';
    let visibleCount = 0;

    cards.forEach((card) => {
      const haystack = [
        card.dataset.title,
        card.dataset.year,
        card.dataset.type,
        card.dataset.region,
        card.dataset.tags,
      ].join(' ').toLowerCase();
      const matchesKeyword = !keyword || haystack.includes(keyword);
      const matchesType = !selectedType || card.dataset.type === selectedType;
      const matchesYear = !selectedYear || card.dataset.year === selectedYear;
      const visible = matchesKeyword && matchesType && matchesYear;

      card.classList.toggle('is-hidden', !visible);
      if (visible) {
        visibleCount += 1;
      }
    });

    if (output) {
      output.value = `正在显示 ${visibleCount} 部影片`;
      output.textContent = `正在显示 ${visibleCount} 部影片`;
    }
  };

  [search, type, year].forEach((input) => {
    input?.addEventListener('input', update);
    input?.addEventListener('change', update);
  });

  update();
}

setupMobileNavigation();
setupHeroCarousel();
setupCardFilters();
