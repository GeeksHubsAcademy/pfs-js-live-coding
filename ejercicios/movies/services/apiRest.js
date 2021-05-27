const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '10b2a75d0c5d29a93d009c31e8d01a78';
export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/';

async function fetchWrapper(url, method = 'GET') {
  const response = await fetch(url, { method });
  if (response.status < 200 || response.status >= 300)
    throw response;

  return await response.json();
}

export function getMovieById(id) {
  return fetchWrapper(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );
}

// export function getTrendingMovies(page = 1) {}
