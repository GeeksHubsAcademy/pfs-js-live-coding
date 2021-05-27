import { getMovieById } from '../services/apiRest.js';

document.addEventListener('DOMContentLoaded', async () => {
  const movie_id = new URL(
    window.location.href,
  ).searchParams.get('movie_id');

  const movieData = await getMovieById(movie_id);
  document.write(`
  <H1>HOLAAA</H1>
  <pre>
    ${JSON.stringify(movieData, null, 2)}
  </pre>`);
});
