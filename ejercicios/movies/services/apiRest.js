const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '10b2a75d0c5d29a93d009c31e8d01a78';

async function fetchWrapper(url) {
  const response = await fetch(url);
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

// fetchWrapper(
//   'https://api.themoviedb.org:443/3/movie/550?api_key=10b2a75d0c5d29a93d009c31e8d01a78',
// )
//    .then((body) => { console.log(body)})
//   .catch((error) => console.log('catch', error));
