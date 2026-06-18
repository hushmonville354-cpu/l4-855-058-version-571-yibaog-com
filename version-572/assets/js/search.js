import movies from './movies-index.js';

const input = document.querySelector('[data-search-input]');
const results = document.querySelector('[data-search-results]');
const title = document.querySelector('[data-search-title]');
const params = new URLSearchParams(window.location.search);
const initialQuery = params.get('q') || '';

if (input) {
  input.value = initialQuery;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createCard(movie) {
  const tags = [movie.type, movie.genre].filter(Boolean);

  return `
<article class="movie-card searchable-card">
  <a class="movie-poster" href="${escapeHtml(movie.url)}" aria-label="观看 ${escapeHtml(movie.title)}">
    <img src="${escapeHtml(movie.cover)}" alt="${escapeHtml(movie.title)} 封面" loading="lazy">
    <span class="poster-shade"></span>
    <span class="play-mark">▶</span>
  </a>
  <div class="movie-card-body">
    <div class="movie-meta-line">
      <span>${escapeHtml(movie.region)}</span>
      <span>${escapeHtml(movie.year)}</span>
    </div>
    <h2><a href="${escapeHtml(movie.url)}">${escapeHtml(movie.title)}</a></h2>
    <p>${escapeHtml(movie.oneLine)}</p>
    <div class="movie-tags">
      ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
    </div>
  </div>
</article>`;
}

function searchMovies(query) {
  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return movies.slice(0, 60);
  }

  return movies
    .filter((movie) => {
      const haystack = [
        movie.title,
        movie.region,
        movie.type,
        movie.year,
        movie.genre,
        movie.categoryName,
        ...(movie.tags || []),
        movie.oneLine,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(keyword);
    })
    .slice(0, 120);
}

function render(query) {
  if (!results) {
    return;
  }

  const matched = searchMovies(query);

  if (title) {
    title.textContent = query.trim() ? `“${query.trim()}”的搜索结果（${matched.length}）` : '默认推荐结果';
  }

  if (!matched.length) {
    results.innerHTML = '<div class="no-results">没有找到匹配影片，可以换一个关键词再试。</div>';
    return;
  }

  results.innerHTML = matched.map(createCard).join('');
}

input?.addEventListener('input', () => render(input.value));
render(initialQuery);
